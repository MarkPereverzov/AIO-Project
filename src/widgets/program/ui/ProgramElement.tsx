import styles from '../Program.module.css';

interface ProgramElementProps {
  title: string;
  exercise?: string;
  pastExercise?: string;
}

export const ProgramElement = ({ title, exercise, pastExercise }: ProgramElementProps) => (
  <div className={styles.transactionBlock}>

    <div className={styles.transactionElement}>
      <div className={styles.transactionTitle}>{title}</div>

    </div>

    <div className={styles.baba}>
      <div>
        <div className={styles.transactionSubtitle}>{exercise}</div>
        <div className={styles.transactionSecondSubtitle}>{pastExercise}</div>
      </div>

      <div>
        <div className={styles.transactionSubtitle}>{exercise}</div>
        <div className={styles.transactionSecondSubtitle}>{pastExercise}</div>
      </div>
      
      <div>
        <div className={styles.transactionSubtitle}>{exercise}</div>
        <div className={styles.transactionSecondSubtitle}>{pastExercise}</div>
      </div>
    </div>

  </div>
);