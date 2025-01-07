import styles from './WeightElement.module.css';

interface WeightElementProps {
    weight: number,
    reps: number
}

export const WeightElement = ({weight, reps}: WeightElementProps) => {
    return (
        <div className={styles.weightReps}>
            <div className={styles.weightRepsBlock}>
                <h1 className={`${styles.weightNumber} ${styles.wrNumber} ctext-primary`}>{weight}</h1>
            </div>
            <div>
                <h1 className={`${styles.repsNumber} ${styles.wrNumber} ctext-primary`}>{reps}</h1>
            </div>
        </div>
    );
}