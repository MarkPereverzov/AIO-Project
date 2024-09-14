import React from 'react';
import { AchivmentsElement } from './AchivmentsElement';
import styles from '../Achivments.module.css';

const achievements = [
  { title: 'Не курю с', subtitle: '01.09.2024' },
  { title: 'Не курил уже', subtitle: '15 дней' },
  { title: 'Не курил всего', subtitle: '45 дней' },
  { title: 'Рекорд', subtitle: '30 дней' },
  { title: 'Сигарет не выкурено', subtitle: '0 сигарет' },
  { title: 'Сэкономленные деньги', subtitle: '0 $' },
  { title: 'Не получено смол', subtitle: '0 грамм' },
  { title: 'Не получено никотина', subtitle: '0 миллиграмм' },
];

export const Achievements = () => {
  return (
    <div className={styles.achievementsContainer}>
      <div className={styles.achievementsList}>
        {achievements.map((achievement, index) => (
          <AchivmentsElement title={achievement.title}subtitle={achievement.subtitle} index={index}/>
        ))}
      </div>
    </div>
  );
};