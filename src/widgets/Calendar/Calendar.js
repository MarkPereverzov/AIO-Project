import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Получение названия месяца
  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  // Получение количества дней в месяце
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Переход на следующий месяц
  const handleNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
      return newDate;
    });
  };

  // Переход на предыдущий месяц
  const handlePrevMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
      return newDate;
    });
  };

  // Получаем дни текущего месяца
  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  
  // Генерация массива с днями
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        {/* Заменяем двойные стрелки на одинарные */}
        <button className="prev-button" onClick={handlePrevMonth}>‹</button>
        <h3 className="carousel-title">{monthNames[currentDate.getMonth()]}</h3>
        <button className="next-button" onClick={handleNextMonth}>›</button>
      </div>
      <div className="calendar-grid">
        {daysArray.map(day => (
          <div key={day} className="calendar-day">{day}</div>
        ))}
      </div>
    </div>
  );  
};

export default Calendar;
