import { ExerciseDayDto } from "@/shared/models";
import { toClearDate } from "@/shared/lib";

export const createExerciseDayModel = (historyDays: ExerciseDayDto[]) => {
  const newId = historyDays.reduce((max, x) => (x.id > max.id ? x : max)).id! + 1;

  const day = {
    id: newId,
    date: toClearDate(new Date()).toDateString(),
    exerciseRecords: [],
    userId: '',
  }

  return day;
}