import styles from '../Statistic.module.css';

interface StatisticElementProps {
  title: string,
  subtitle: string | undefined,
  index: number
};

export const StatisticElement = ({title, subtitle, index}: StatisticElementProps) => (
  <div key={index} className={styles.achievementBlock}>
    <h3 className={styles.achievementTitle}>{title}</h3>
    <div className={styles.achievementSubtitle}><p>{subtitle}</p></div>
  </div>
);