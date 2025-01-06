interface ResponseRepsToGroup
{
    muscleGroup: string;
    reps: number;
}

export type ResponseRepsByGroup = {
    pairs: ResponseRepsToGroup[];
}
