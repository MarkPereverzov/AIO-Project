import type { components } from "@/shared/api/v1";

//User Dto's
export type UserResponseDto = components["schemas"]["UserResponseDto"];

//Health Dto's
export type HealthRecordDto = components["schemas"]["HealthRecordDto"];
export type CompleteStatDto = components["schemas"]["CompleteStatDto"];
export type HealthStreakDto = components["schemas"]["HealthStreakDto"];
export type HealthStreakResponseDto = components["schemas"]["HealthStreakResponseDto"];
export type SubscribeDto = components["schemas"]["SubscribeDto"];

//Budget Dto
export type CategoryDtoResponse = components["schemas"]["CategoryDtoResponse"];
export type CategoryDtoRequest = components["schemas"]["CategoryDtoRequest"];
export type TagDtoResponse = components["schemas"]["TagDtoResponse"];
export type TagDtoRequest = components["schemas"]["TagDtoRequest"];
export type TagDtoUpdateRequest = components["schemas"]["TagDtoUpdateRequest"];
export type ProductDtoCreateRequest = components["schemas"]["ProductDtoCreateRequest"];
export type ProductDtoResponse = components["schemas"]["ProductDtoResponse"];
export type ProductUpdateDtoRequest = components["schemas"]["ProductUpdateDtoRequest"];
export type { ProductGetParams } from './product';

//Sport Dto 
export type ResponseExerciseRecordDto = components["schemas"]["ResponseExerciseRecordDto"];
export type ResponsePlanExerciseDto = components["schemas"]["ResponsePlanExerciseDto"];

export type { CreatePlanExerciseSetDto } from './create-plan-exercise-set.dto';

export type CreateExerciseDto = components["schemas"]["CreateExerciseDto"];
export type UpdateExerciseDto = components["schemas"]["UpdateExerciseDto"];
export type ExerciseDayDto = components["schemas"]["ResponseExerciseDay"];
export type CreateExerciseDayDto = components["schemas"]["CreateExerciseDayDto"];
export type UpdateExerciseDayDto = components["schemas"]["UpdateExerciseDayDto"];
export type CreateExerciseRecordDto = components["schemas"]["CreateExerciseRecordDto"];
export type UpdateExerciseRecordDto = components["schemas"]["UpdateExerciseRecordDto"];
export type CreatePlanExerciseDto = components["schemas"]["CreatePlanExerciseDto"];
export type UpdatePlanExerciseDto = components["schemas"]["UpdatePlanExerciseDto"];
export type CreatePlanExerciseDayDto = components["schemas"]["CreatePlanExerciseDayDto"];
export type UpdatePlanExerciseDayDto = components["schemas"]["UpdatePlanExerciseDayDto"];
export type { ResponseAnalysisExerciseDto } from './response-analysis-exercise.dto';
export type { ResponseAnalysisDayDto } from './response-analysis-day.dto';
export type { RequestExerciseRecordDto } from './request-exercise-record.dto';

export type ResponsePlanExerciseDayDto = {
    weekDay: number | string,
    planExercises: ResponsePlanExerciseDto[]
}