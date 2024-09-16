import { HealthRecordDto } from "@/shared/api";
import { useEffect, useState } from "react";
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from 'next/navigation';
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toClearDate, isDayInInterval } from "@/shared/lib";

 // Получение названия месяца
const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

/*const getCurrentDate = (searchParams: ReadonlyURLSearchParams | null) => {
  const date = searchParams?.get('date');
  return date ? new Date(date) : new Date();
}*/

const setCurrentDate = (router: AppRouterInstance, date: Date) => {
  router.push(`?date=${date.toJSON()}`);
}

export const useCalendar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentDate, setCurrentDateState] = useState(new Date());
  //getCurrentDate(searchParams);
  
  useEffect(()=>{
    setCurrentDate(router, currentDate);
  },[currentDate]);

  // Получение количества дней в месяце
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Переход на следующий месяц
  const handleNextMonth = () => {
    const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    setCurrentDateState(nextDate);
    //setCurrentDate(router, nextDate);
  };

  // Переход на предыдущий месяц
  const handlePrevMonth = () => {
    const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    setCurrentDateState(prevDate);
    //setCurrentDate(router, prevDate);
  };

  const getMonthName = (month: number): string => (monthNames[month]);

  const findShift = (date: Date) => {
    let shift = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    if (shift === 0) shift = 7;
    return shift;
  }

  const isDayGood = (currentDate: Date,records: HealthRecordDto[] | null, day: number) => {
    if (!records) return false;
    
    const dateToCheck = new Date(currentDate); 
    dateToCheck.setDate(day);

    return records.some(record => 
      isDayInInterval(
        toClearDate(record.streakBegin), 
        toClearDate(record.streakEnd), 
        toClearDate(dateToCheck)
      )
    );
  }

  // Получаем дни текущего месяца
  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());

  // Генерация массива с днями
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const shift = findShift(currentDate);

  return {currentDate, shift, daysArray, isDayGood, handlePrevMonth, handleNextMonth, getMonthName };
}