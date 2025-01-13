import { ResponsePlanExerciseDayDto } from "@/shared/models";
import { toClearDate } from "@/shared/lib";

export const createPlanDayModel = (planDays: ResponsePlanExerciseDayDto & {id: number}[]) => {
  const newId = planDays.reduce((max, x) => (x.id > max.id ? x : max)).id! + 1;

  const day = {
    id: newId,
    weekDay: '',
    planExercises: [],
    userId: '',
  }

  return day;
}