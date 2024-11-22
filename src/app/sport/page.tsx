import { getAllPlanExerciseDays, getAnalyseExerciseDay } from '@/entities/sport';
import { getAllExerciseDays } from '@/entities/sport/api/exerciseDay';
import { GetServerSideProps } from 'next';
import { ResponsePlanExerciseDayDto } from '@/shared/models';
import { SportPage } from '@/cpages/sport/ui/SportPage';

export default async function Page() {
  let planDays = null;
  try {
    planDays = await getAllPlanExerciseDays();
  } catch (error) {
    console.log(error);
  }  
  return(
    <SportPage 
      planDays={planDays}
    />
  );
}