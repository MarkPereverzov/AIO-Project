import { GET, POST, PUT, DELETE } from "@/shared/api";
import { CreatePlanExerciseDayDto, ResponsePlanExerciseDayDto, UpdatePlanExerciseDayDto } from "@/shared/models"; 
import { throwAnyErrors } from "@/shared/lib";

// Get all plan exercise days
export const getAllPlanExerciseDays = async (): Promise<ResponsePlanExerciseDayDto[]> => {
  return await throwAnyErrors(GET('/sport/plan-exercise-days'));
};

// Create a new plan exercise day
export const createPlanExerciseDay = async (body: CreatePlanExerciseDayDto): Promise<CreatePlanExerciseDayDto> => {
  return await throwAnyErrors(POST('/sport/plan-exercise-days', { body }));
};

// Update an existing plan exercise day
export const updatePlanExerciseDay = async (id: number, body: UpdatePlanExerciseDayDto): Promise<UpdatePlanExerciseDayDto> => {
  return await throwAnyErrors(PUT(`/sport/plan-exercise-days/{id}`, {params:{path: {id: id}}, body}));
};

// Delete a plan exercise day
export const deletePlanExerciseDay = async (id: number): Promise<void> => {
  await throwAnyErrors(DELETE(`/sport/plan-exercise-days/{id}`, {params:{path: {id: id}}}));
};