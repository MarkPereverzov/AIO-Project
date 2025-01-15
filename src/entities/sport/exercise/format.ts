

export const formatExercise = (exercise: any) => {
  console.log(exercise);

  return ({
        name: exercise.name,
        muscleGroups: exercise.muscleGroups.map((mg: any) => mg.name)
    });
};