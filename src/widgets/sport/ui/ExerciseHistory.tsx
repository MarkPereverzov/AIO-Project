import { ExerciseElement } from './ExerciseElement';
import { ResponseAnalysisExerciseDto } from '@/shared/models';
import { Form } from 'react-bootstrap';
import { RoundButton } from '@/shared';
import { useState } from 'react';
import { toLocaleDateString } from '@/shared/lib';

import styles from '../history.module.css';

interface ExerciseHistoryProps { 
    historyDays: [{
        date: Date,
        planExercises: ResponseAnalysisExerciseDto[],
    }]
}

export const ExerciseHistory = ({historyDays}:ExerciseHistoryProps) => {
    const [activeDay, setActiveDay] = useState(0); 
    const options = historyDays?.map((day, index) => <option key={index} value={index}>{toLocaleDateString(day.date)}</option>)
    const currentDay = historyDays?.at(activeDay);
    const exercises = currentDay?.planExercises?.map((exercise, index) => (
        <ExerciseElement key={index} exercise={[exercise]} />
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