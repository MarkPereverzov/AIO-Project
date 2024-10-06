import { getAllPlanExerciseDays, getAnalyseExerciseDay } from '@/entities/sport';
import { getAllExerciseDays } from '@/entities/sport/api/exerciseDay';
import { SportPage } from '@/cpages/sport/ui/SportPage';

export default async function Page() {
  let analysedExercises = null;
  let planExercises = null;
  let exerciseRecords = null;
  try {
    analysedExercises = await getAnalyseExerciseDay({weekDay: 2});
    //planExercises = await getAllPlanExerciseDays();
    exerciseRecords = await getAllExerciseDays();
    console.log(analysedExercises, planExercises, exerciseRecords);
  } catch (error) {
    console.log(error);
  }  
  return(
    <SportPage 
      analysedExercises={analysedExercises}
      planExercises={null}
      exerciseRecordDays={exerciseRecords}
    />
  );
}