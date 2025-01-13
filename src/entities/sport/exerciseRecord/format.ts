import { ResponseExerciseRecordDto } from "@/shared/models";


export const formatExerciseRecord = (exerciseRecord: ResponseExerciseRecordDto) => {
    return {
        ...exerciseRecord,
        weight: Math.floor(exerciseRecord.weight)
    }
}