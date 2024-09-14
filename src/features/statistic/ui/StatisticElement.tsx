import styles from '../Statistic.module.css';

interface StatisticElementProps {
  title: string,
  subtitle: string,
  index: number
};

export const StatisticElement = ({title, subtitle, index}: StatisticElementProps) => (
  <div key={index} className={styles.achievementBlock}>
    <div className={styles.achievementTitle}>{title}</div>
    <div className={styles.achievementSubtitle}>{subtitle}</div>
  </div>
);