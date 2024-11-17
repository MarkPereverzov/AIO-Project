import { PlanExerciseElement } from './PlanExerciseElement';
import styles from '../sport.module.css';

interface PlanProps {
  exercise: string,
  reps: number | string,
  sets: number | string,
};

export const Plan = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Программа</h1>
      </div>
      <div className={styles.optionsBlock}>
        <h1 className={styles.title}>Программа</h1>
      </div>
      <div className={styles.exerciseContainer}>
        <PlanExerciseElement
          title='Жим груди'
          muscle='грудь'
        />
        <PlanExerciseElement
          title='Жим груди'
          muscle='грудь'
        />
        <PlanExerciseElement
          title='Жим груди'
          muscle='грудь'
        />
        <PlanExerciseElement
          title='Жим груди'
          muscle='грудь'
        />
        <PlanExerciseElement
          title='Жим груди'
          muscle='грудь'
        />
        <PlanExerciseElement
          title='Жим груди'
          muscle='грудь'
        />

      </div>
    </div>
  );
}