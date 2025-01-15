import { ExerciseDayDto } from '@/shared/models';
import { useState, useEffect } from 'react';
import styles from '../ExerciseHistory.module.css';
import { ExerciseRecordElement } from '@/shared/';
import { Select } from '@/shared'; 
import { Container } from 'react-bootstrap';
import { toLocaleDateString } from '@/shared/lib';

interface ExerciseHistoryProps { 
    historyDays: ExerciseDayDto[],
    onUpdateExercise: (id: number, values: any) => void;
    onDeleteExercise: (id: number) => void;
}

export const ExerciseHistory = ({historyDays, onUpdateExercise, onDeleteExercise} :ExerciseHistoryProps) => {
    const lastDayId = historyDays.length != 0 ? historyDays?.reduce((max, x) => (x.id > max.id ? x : max)).id! : 0;
    const [activeDay, setActiveDay] = useState(lastDayId); 
    
    const currentDay = historyDays?.find(x => x?.id === activeDay);

    const exercises = currentDay?.exerciseRecords?.map((exercise, index) => (
        <ExerciseRecordElement 
            key={index} 
            exerciseRecord={exercise} 
            onDelete={async () => await onDeleteExercise(exercise.id)} 
            onEdit={async (id: number, values: any) => await onUpdateExercise(exercise.id, values)} 
        />
    ));

    useEffect(() => {
        setActiveDay(lastDayId);
    }, [lastDayId]);

    return (
        <div className={styles.mainBlock}>
            <div className={styles.titleBlock}>
                <h1 className={styles.title}>История упражнений</h1>
            </div>
            <div className={styles.optionsBlock}>
                <Select
                    value={activeDay}
                    onChange={(event) => setActiveDay(Number(event.target.value))}
                    options={
                        historyDays?.map((day) => (
                            {value: day.id, label: toLocaleDateString(day.date)}
                        ))
                    }
                />
            </div>
            <Container className={styles.exerciseContainer} style={{ overflowY: 'auto' }}>
                {exercises}
            </Container>
            {/* <div className={styles.exerciseContainer}>
                {exercises}
            </div> */}
        </div>
    );
}