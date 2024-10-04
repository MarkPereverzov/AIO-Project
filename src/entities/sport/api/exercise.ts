import { GET, POST, PUT, DELETE } from "@/shared/api";
import { CreateExerciseDto, UpdateExerciseDto } from "@/shared/models"; 
import { throwAnyErrors } from "@/shared/lib";

// Get all exercises
export const getAllExercises = async (): Promise<CreateExerciseDto[]> => {
  return await throwAnyErrors(GET('/sport/exercises'));
};

// Create a new exercise
export const createExercise = async (body: CreateExerciseDto): Promise<CreateExerciseDto> => {
  return await throwAnyErrors(POST('/sport/exercises', { body }));
};

// Update an existing exercise
export const updateExercise = async (id: number, body: UpdateExerciseDto): Promise<UpdateExerciseDto> => {
  return await throwAnyErrors(PUT(`/sport/exercises/{id}`, {params:{path: {id: id}}, body}));
};

// Delete an exercise
export const deleteExercise = async (id: number): Promise<void> => {
  await throwAnyErrors(DELETE(`/sport/exercises/{id}`, {params:{path: {id: id}}}));
};
