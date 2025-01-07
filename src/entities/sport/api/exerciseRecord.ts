import { GET, POST, PUT, DELETE } from "@/shared/api";
import { CreateExerciseRecordDto, ResponseExerciseRecordDto, UpdateExerciseRecordDto } from "@/shared/models"; 
import { throwAnyErrors } from "@/shared/lib";

// Get all exercise records
export const getAllExerciseRecords = async (): Promise<ResponseExerciseRecordDto[]> => {
  return await throwAnyErrors(GET('/sport/exercise-records'));
};

// Create a new exercise record
// Promise<ResponseExerciseRecordDto>
export const createExerciseRecord = async (body: CreateExerciseRecordDto) => {
  return await (POST('/sport/exercise-records', { body }));
};

// Update an existing exercise record
export const updateExerciseRecord = async (id: number, body: CreateExerciseRecordDto) => {
  return await throwAnyErrors(PUT(`/sport/exercise-records/{id}`, {params:{path: {id: id}}, body: (body as any) }));
};

// Delete an exercise record
export const deleteExerciseRecord = async (id: number): Promise<void> => {
  await throwAnyErrors(DELETE(`/sport/exercise-records/{id}`, {params:{path: {id: id}}}));
};