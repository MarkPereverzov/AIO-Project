import { SportanalysisPage } from '@/cpages/sportAnalysis/ui/SportAnalysisPage';
import { getAllExercises } from '@/entities/sport';

export default async function Page() {
  let exercises = null;

  try {
    exercises = await getAllExercises();
  } catch (error) {
    console.log(error);
  } 

  return(
    <SportanalysisPage 
      exercises={exercises!}
    />
  );
}