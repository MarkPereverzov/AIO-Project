import { useState } from "react";

 // Получение названия месяца
 const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Получение количества дней в месяце
  const getDaysInMonth = (year: number, month: number) => {
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

  const getMonthName = (month: number): string => (monthNames[month]);

  // Получаем дни текущего месяца
  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());

  // Генерация массива с днями
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  return {currentDate, daysArray, handlePrevMonth, handleNextMonth, getMonthName };
}