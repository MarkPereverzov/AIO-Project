import { GET, POST, PUT, DELETE } from "@/shared/api";
import { CreatePlanExerciseDto, ResponsePlanExerciseDto, UpdatePlanExerciseDto } from "@/shared/models"; 
import { throwAnyErrors } from "@/shared/lib";

// Get all plan exercises
export const getAllPlanExercises = async (): Promise<ResponsePlanExerciseDto[]> => {
  return await throwAnyErrors(GET('/sport/plan-exercises'));
};

// Create a new plan exercise
export const createPlanExercise = async (body: CreatePlanExerciseDto): Promise<ResponsePlanExerciseDto> => {
  return await throwAnyErrors(POST('/sport/plan-exercises', { body }));
};

// Update an existing plan exercise
export const updatePlanExercise = async (id: number, body: UpdatePlanExerciseDto): Promise<ResponsePlanExerciseDto> => {
  return await throwAnyErrors(PUT(`/sport/plan-exercises/{id}`, {params:{path: {id: id}}, body}));
};

// Delete a plan exercise
export const deletePlanExercise = async (id: number): Promise<void> => {
  await throwAnyErrors(DELETE(`/sport/plan-exercises/{id}`, {params:{path: {id: id}}}));
};
