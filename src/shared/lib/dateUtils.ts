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

export const toLocaleDateString = (date: string | Date, separator?: string | null): string => {
  const newDate = new Date(date);
  const sep = separator ? separator : '-';
  
  const day = newDate.getDate();
  const month = newDate.getMonth()+1;

  const strDay = day > 9 ? `${day}` : `0${day}`;
  const strMonth = month > 9 ? `${month}` : `0${newDate.getMonth()+1}`;

  return `${strDay}${sep}${strMonth}${sep}${newDate.getFullYear()}`;
}