import { getAllPlanExerciseDays } from '@/entities/sport';
import { getAllExerciseDays } from '@/entities/sport/api/exerciseDay';
import { SportPage } from '@/cpages/sport/ui/SportPage';

export default async function Page() {
  let planDays = null;
  let historyDays = null;
  try {
    planDays = await getAllPlanExerciseDays();
    historyDays = await getAllExerciseDays();
  } catch (error) {
    console.log(error);
  }  
  return(
    <SportPage 
      planDays={planDays}
      historyDays={historyDays as any}
    />
  );
}