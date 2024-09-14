
import styles from '../Achivments.module.css';

interface AchievementsElementProps {
  title: string,
  subtitle: string,
  index: number
};

export const AchivmentsElement = ({title, subtitle, index}: AchievementsElementProps) => (
  <div key={index} className={styles.achievementBlock}>
    <div className={styles.achievementTitle}>{title}</div>
    <div className={styles.achievementSubtitle}>{subtitle}</div>
  </div>
);