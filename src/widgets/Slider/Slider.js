import React from 'react';
import './Slider.css';

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
  
  const AchievementsList = () => {
    return (
      <div className="achievements-container">
        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-block">
              <div className="achievement-title">{achievement.title}</div>
              <div className="achievement-subtitle">{achievement.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AchievementsList;