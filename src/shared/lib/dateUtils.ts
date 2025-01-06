export function daysBetween(first: Date, second: Date) {
  return Math.ceil(Math.abs(first.getTime() - second.getTime()) / (1000 * 3600 * 24));
}

export const toClearDate = (date: string | Date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}

export const isDayInInterval = (begin: Date, end: Date, day: Date) => {
  const dayTime = day.getTime();
  return begin.getTime() <= dayTime && end.getTime() >= dayTime;
} 

export const toLocaleDateString = (
  date: string | Date,
  separator: string = '-',
  monthSecond: boolean = false,
  includeYear: boolean = true
): string => {
  // Преобразуем строку в объект Date, если нужно
  const newDate = new Date(date);

  // Проверяем корректность даты
  if (isNaN(newDate.getTime())) { 
    throw new Error(`Invalid date provided'`);
  }

  const day = newDate.getDate().toString().padStart(2, '0');
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const year = newDate.getFullYear();

  // Собираем дату в зависимости от параметров
  let formattedDate = monthSecond
    ? `${month}${separator}${day}`
    : `${day}${separator}${month}`;
  
  if (includeYear) {
    formattedDate += `${separator}${year}`;
  }

  return formattedDate;
};