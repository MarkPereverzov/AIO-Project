import styles from '../Statistic.module.css';

interface StatisticElementProps {
  title: string,
  subtitle: string | undefined,
  index: number
};

export const StatisticElement = ({title, subtitle, index}: StatisticElementProps) => (
  <div key={index} className={styles.achievementBlock}>
    <div className={styles.achievementTitle}>{title}</div>
    <div className={styles.achievementSubtitle}><p>{subtitle}</p></div>
  </div>
);