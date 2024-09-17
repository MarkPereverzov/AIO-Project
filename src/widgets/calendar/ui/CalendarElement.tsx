import styles from '../Calendar.module.css';

interface CalendarElementProps {
  day: number,
  shift: number,
  isGood: boolean,
}

export const CalendarElement = ({day, shift, isGood}: CalendarElementProps) => {
  const placeInGrid = (day + shift - 2) % 7 + 1;
  return (
    <div 
      key={day}
      className={`${isGood ? styles.good : ''} ${styles.calendarDay}`} 
      style={{gridColumnStart: placeInGrid}}
    >
      {day}
    </div>
  );
}
