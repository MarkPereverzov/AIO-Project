import React, { useState } from 'react';
import { useCalendar } from '../model';
import { CalendarElement } from './CalendarElement';
import styles from '../Calendar.module.css';

export const Calendar = () => {
  const {currentDate, shift, daysArray, handlePrevMonth, handleNextMonth, getMonthName } = useCalendar();

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        {/* Заменяем двойные стрелки на одинарные */}
        <button className={styles.prevButton} onClick={handlePrevMonth}>‹</button>
        <h3 className={styles.calendarTitle}>{getMonthName(currentDate.getMonth())}</h3>
        <button className={styles.nextButton} onClick={handleNextMonth}>›</button>
      </div>
      <div className={styles.calendarGrid}>
        {
        daysArray.map(day => (
          <CalendarElement day={day} shift={shift} />
        ))}
      </div>
    </div>
  );  
};
