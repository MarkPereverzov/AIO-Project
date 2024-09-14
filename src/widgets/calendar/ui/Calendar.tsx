import React, { useState } from 'react';
import { useCalendar } from '../model';
import styles from '../Calendar.module.css';

export const Calendar = () => {
  const {currentDate, daysArray, handlePrevMonth, handleNextMonth, getMonthName } = useCalendar();

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        {/* Заменяем двойные стрелки на одинарные */}
        <button className={styles.prevButton} onClick={handlePrevMonth}>‹</button>
        <h3 className={styles.calendarTitle}>{getMonthName(currentDate.getMonth())}</h3>
        <button className={styles.nextButton} onClick={handleNextMonth}>›</button>
      </div>
      <div className={styles.calendarGrid}>
        {daysArray.map(day => (
          <div key={day} className={styles.calendarDay}>{day}</div>
        ))}
      </div>
    </div>
  );  
};
