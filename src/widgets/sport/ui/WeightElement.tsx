import styles from '../planexercise.module.css';

interface WeightElementProps {
    weight: number,
    reps: number
}

export const WeightElement = ({weight, reps}: WeightElementProps) => {
    return (
        <div className={styles.weightReps}>
            <h1 className={`${styles.weightNumber} ${styles.wrNumber}`}>{weight}</h1>
            <h1 className={`${styles.repsNumber} ${styles.wrNumber}`}>{reps}</h1>
        </div>
    );
}