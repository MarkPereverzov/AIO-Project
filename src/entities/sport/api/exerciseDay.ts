import { GET, POST, PUT, DELETE } from "@/shared/api";
import { CreateExerciseDayDto, UpdateExerciseDayDto, ExerciseDayDto } from "@/shared/models"; 
import { throwAnyErrors } from "@/shared/lib";

// Get all exercise days
export const getAllExerciseDays = async (): Promise<ExerciseDayDto[]> => {
  const res = await throwAnyErrors(GET('/sport/exercise-days'));
  return res;
};

// Create a new exercise day
export const createExerciseDay = async (): Promise<CreateExerciseDayDto> => {
  return await throwAnyErrors(POST('/sport/exercise-days'));
};

// Update an existing exercise day
export const updateExerciseDay = async (id: number, body: UpdateExerciseDayDto): Promise<UpdateExerciseDayDto> => {
  return await throwAnyErrors(PUT(`/sport/exercise-days/{id}`, {params:{path: {id: id}}, body}));
};

// Delete an exercise day
export const deleteExerciseDay = async (id: number): Promise<void> => {
  await throwAnyErrors(DELETE(`/sport/exercise-days/{id}`, {params:{path: {id: id}}}));
};
