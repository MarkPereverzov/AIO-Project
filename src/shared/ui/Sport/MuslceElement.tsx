import styles from "./MuscleElement.module.css";

interface MuscleElementProps {
  muscleGroup: any;
  onClick: () => void;
};

export const MuscleElement = ({muscleGroup, onClick}: MuscleElementProps) => {
  const title = muscleGroup?.name;

  return (
    <div className={styles.tagContainer} onClick={onClick} style={{border: `1px solid #808080`}}>
        <h1 className={`${styles.tagTitle} ctext-button`}>{title}</h1>
    </div>
  );
};