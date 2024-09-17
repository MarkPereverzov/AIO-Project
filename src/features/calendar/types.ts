import { HealthRecordDto } from "@/shared/api";

export interface CalendarState {
  currentDate: Date,
  shift: number,
  daysArray: number[],
  isDayGood: (currentDate: Date, records: HealthRecordDto[] | null, day: number) => boolean,
  handlePrevMonth: () => void,
  handleNextMonth: () => void,
  getMonthName: (month: number) => string,
}