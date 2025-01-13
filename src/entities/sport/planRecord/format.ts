import { ResponsePlanExerciseDto } from "@/shared/models";


export const formatPlanRecord = (planExercise: ResponsePlanExerciseDto) => {
    return {
        ...planExercise,
    }
}