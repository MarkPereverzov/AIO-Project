import styles from '../Calendar.module.css';

interface CalendarElementProps {
  day: number,
  shift: number,
}

export const CalendarElement = ({day, shift}: CalendarElementProps) => (
  <div key={day} className={styles.calendarDay} style={{gridColumnStart:(day+shift-2)%7+1}}>{day}</div>
);
