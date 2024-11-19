import { HistoryExerciseElement } from './HistoryExerciseElement';
import { Form } from 'react-bootstrap';
import { RoundButton } from '@/shared';

import styles from '../history.module.css';

export const ExerciseHistory = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.titleBlock}>
                <h1 className={styles.title}>История упражнений</h1>
            </div>
            <div className={styles.optionsBlock}>
                <Form.Select className={styles.select}>
                    <option value="1">12 Ноября</option>
                    <option value="2">10 Ноября</option>
                    <option value="3">8 Ноября</option>
                    <option value="4">31 Октября</option>
                </Form.Select>
            </div>
            <div className={styles.exerciseContainer}>
                <HistoryExerciseElement
                    title='Жим груди'
                    muscle='грудь'
                />
                <HistoryExerciseElement
                    title='Жим груди'
                    muscle='грудь'
                />
                <HistoryExerciseElement
                    title='Жим груди'
                    muscle='грудь'
                />
                <HistoryExerciseElement
                    title='Жим груди'
                    muscle='грудь'
                />
            </div>
        </div>
    );
}