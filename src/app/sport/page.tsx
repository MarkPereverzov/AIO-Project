import { getAllExercises, getAllPlanExerciseDays } from '@/entities/sport';
import { getAllExerciseDays } from '@/entities/sport/api/exerciseDay';
import { SportPage } from '@/cpages/sport/ui/SportPage';

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
    <SportPage 
      planDays={planDays}
      historyDays={historyDays as any}
      exercises={exercises!}
    />
  );
}