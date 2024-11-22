import { PlanElement } from './PlanElement';
import { ResponseExerciseRecordDto } from '@/shared/models';
import { Form } from 'react-bootstrap';
import { RoundButton } from '@/shared';
import { ExerciseDayDto } from '@/shared/models';
import { useState } from 'react';
import { toLocaleDateString } from '@/shared/lib';

import styles from '../history.module.css';
import { ExerciseElement } from './ExerciseElement';
import { deleteExerciseRecord } from '@/entities/sport';

interface ExerciseHistoryProps { 
    historyDays: ExerciseDayDto[],
}

export const ExerciseHistory = ({historyDays: initialHistoryDays}:ExerciseHistoryProps) => {
    const [historyDays, setHistoryDays] = useState(initialHistoryDays);
    const [activeDay, setActiveDay] = useState(0); 
    const options = historyDays?.map((day, index) => <option key={index} value={index}>{toLocaleDateString(day.date)}</option>)
    const currentDay = historyDays?.at(activeDay);

    const handleDeleteExercise = async (id: number) => {
        try {
          await deleteExerciseRecord(id);
          // Удаляем упражнение локально
          const updatedDays = historyDays.map((day) => ({
            ...day,
            planExercises: day.exerciseRecords.filter((exercise) => exercise.id !== id),
          }));
          setHistoryDays(updatedDays);
        } catch (error) {
          console.error('Ошибка при удалении плана:', error);
        }
      };

    const exercises = currentDay?.exerciseRecords?.map((exercise, index) => (
        <ExerciseElement key={index} exercise={exercise} onDelete={handleDeleteExercise}/>
    ));
    return (
        <div className={styles.mainBlock}>
            <div className={styles.titleBlock}>
                <h1 className={styles.title}>История упражнений</h1>
            </div>
            <div className={styles.optionsBlock}>
                <Form.Select 
                    className={styles.select}
                    value={activeDay} 
                    onChange={(event) => setActiveDay(Number(event.target.value))}
                >
                    {options}
                </Form.Select>
            </div>
            <div className={styles.exerciseContainer}>
                {exercises}
            </div>
        </div>
    );
}