import React, { useEffect, useState } from 'react';
import { CalendarElement } from './CalendarElement';
import styles from '../Calendar.module.css';
import { HealthRecordDto } from '@/shared/api';
import { CalendarState, useCalendar } from '@/features/calendar';

interface CalendarProps {
  records: HealthRecordDto[] | null,
}

export const Calendar = ({records}: CalendarProps) => {
  const {currentDate, shift, daysArray, isDayGood, handlePrevMonth, handleNextMonth, getMonthName } = useCalendar();

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
        daysArray.map((day, index) => (
          <CalendarElement 
            key={index}
            day={day} 
            shift={shift}
            isGood={isDayGood(currentDate, records, day)}
          />
        ))}
      </div>
    </div>
  );  
};
