import { ExerciseDayDto } from "@/shared/models";

/**
 * Сортирует массив записей упражнений по дате в порядке возрастания (новые снизу).
 * @param records - Массив записей упражнений.
 * @returns Отсортированный массив записей.
 */
export const sortExerciseDays = (days: ExerciseDayDto[]): ExerciseDayDto[] => {
  return days?.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};
