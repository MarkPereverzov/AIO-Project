import styles from '../planexercise.module.css';

export const WeightElement = () => {
    return (
        <div className={styles.weightReps}>
            <h1 className={`${styles.weightNumber} ${styles.wrNumber}`}>60</h1>
            <h1 className={`${styles.repsNumber} ${styles.wrNumber}`}>12</h1>
        </div>
    );
}