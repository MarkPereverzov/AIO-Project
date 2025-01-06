interface ResponseExerciseToReps 
{
    exercise: string;
    reps: number;
}

export type ResponseExercisePopularity = {
    pairs: ResponseExerciseToReps[];
}
