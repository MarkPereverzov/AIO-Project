import React from 'react';
import { StatisticElement } from './StatisticElement';
import styles from '../Statistic.module.css';
import { CompleteStatDto } from '@/shared/models';
import { prepareStatistic } from '../model/prepareStatistic';

export const Statistic = ({completeStatistic}: {completeStatistic: CompleteStatDto | null
}) => {
  completeStatistic = prepareStatistic(completeStatistic);

  const statistic = [
    { title: 'Не курю с', subtitle: `${completeStatistic?.lastBadDay} дней` },
    { title: 'Не курил уже', subtitle: `${completeStatistic?.lastStreakDays ?? 0} дней` },
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
          <StatisticElement title={achievement.title} subtitle={achievement.subtitle} key={index} index={index}/>
        ))}
      </div>
    </div>
  );
};