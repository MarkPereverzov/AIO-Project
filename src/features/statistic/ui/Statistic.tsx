import React from 'react';
import { StatisticElement } from './StatisticElement';
import styles from '../Statistic.module.css';
import { HealthCompleteStatistic } from '@/features/statistic';

export const Statistic = ({completeStatistic}: {completeStatistic: HealthCompleteStatistic}) => {
  const statistic = [
    { title: 'Не курю с', subtitle: completeStatistic?.lastBadDay?.toLocaleDateString() },
    { title: 'Не курил уже', subtitle: `${completeStatistic?.lastStreakDays} дней` },
    { title: 'Не курил всего', subtitle: `${completeStatistic?.totalDays} дней` },
    { title: 'Рекорд', subtitle: `${completeStatistic?.longestStreak} дней` },
    { title: 'Сигарет не выкурено', subtitle: `${completeStatistic?.badThingCount} сигарет` },
    { title: 'Сэкономленные деньги', subtitle: `${completeStatistic?.moneySaved} $` },
    { title: 'Не получено смол', subtitle: '0 грамм' },
    { title: 'Не получено никотина', subtitle: '0 миллиграмм' },
  ];

  return (
    <div className={styles.achievementsContainer}>
      <div className={styles.achievementsList}>
        {statistic.map((achievement, index) => (
          <StatisticElement title={achievement.title}subtitle={achievement.subtitle} index={index}/>
        ))}
      </div>
    </div>
  );
};