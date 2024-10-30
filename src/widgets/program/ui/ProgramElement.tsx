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
      <a>Последняя тренировка</a>
      <div className={styles.row}>
        <div className={styles.transactionSubtitle}>{exercise}</div>
        <div className={styles.transactionSubtitle}>{exercise}</div>
        <div className={styles.transactionSubtitle}>{exercise}</div>
        <div className={styles.transactionSubtitle}>{exercise}</div>
        <div className={styles.transactionSubtitle}>{exercise}</div>
      </div>

      <a>Предыдущая тренировка</a>
      <div className={styles.row}>
        <div className={styles.transactionSubtitle}>{exercise}</div>
        <div className={styles.transactionSubtitle}>{exercise}</div>
        <div className={styles.transactionSubtitle}>{exercise}</div>
        <div className={styles.transactionSubtitle}>{exercise}</div>
        <div className={styles.transactionSubtitle}>{exercise}</div>
      </div>
    </div>

  </div>
);