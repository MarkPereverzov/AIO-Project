import { SportExercisePage } from '@/cpages/sport/ui/SportExercisePage';
import { getAllExercises } from '@/entities/sport';

export default async function Page() {
  let exercises = null;

  try {
    exercises = await getAllExercises();
  } catch (error) {
    console.log(error);
  } 

  return(
    <SportExercisePage 
      exercises={exercises!}
    />
  );
}