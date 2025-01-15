import { getAllExercises, getAllPlanExerciseDays } from '@/entities/sport';
import { getAllExerciseDays } from '@/entities/sport/api/exerciseDay';
import { SportExerciseRecordPage } from '@/cpages/sport/ui/SportExerciseRecordPage';

export default async function Page() {
  let planDays = null;
  let historyDays = null;
  let exercises = null;
  try {
    planDays = await getAllPlanExerciseDays();
    historyDays = await getAllExerciseDays();
    exercises = await getAllExercises();
  } catch (error) {
    console.log(error);
  }  
  return(
    <SportExerciseRecordPage 
      planDays={planDays}
      historyDays={historyDays as any}
      exercises={exercises!}
    />
  );
}