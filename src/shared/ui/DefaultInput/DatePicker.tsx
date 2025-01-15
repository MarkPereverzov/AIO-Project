import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Input.module.css';
import { toClearDate } from '@/shared/lib';

interface DatePickerProps {
  value: Date | string | null | undefined; // Текущее значение (может быть null)
  onChange: (date: Date | null | undefined) => void; // Обработчик изменения даты
  minDate?: Date; // Минимальная дата
  maxDate?: Date; // Максимальная дата
  placeholder?: string; // Плейсхолдер, если дата не выбрана
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  placeholder = 'Выберите дату',
}) => {
  return (
    <div className={styles.datePicker}>
      <ReactDatePicker
        selected={toClearDate(value!)}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        placeholderText={placeholder}
        dateFormat="dd.MM.yyyy"
        className={styles.input} // Стили для кастомизации
      />
    </div>
  );
};
