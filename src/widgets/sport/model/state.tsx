import React, { useState } from 'react';
import { CreateExerciseRecordDto, ExerciseDayDto, ResponseExerciseRecordDto, UpdateExerciseRecordDto } from '@/shared/models';
import { updateExerciseRecord, deleteExerciseRecord, createExerciseRecord } from '@/entities/sport'; 

interface ExerciseState {
  historyDays: ExerciseDayDto[];
  addExercise: (dayIndex: number, exercise: CreateExerciseRecordDto) => Promise<void>;
  updateExercise: (id: number, values: Partial<UpdateExerciseRecordDto> ) => Promise<void>;
  deleteExercise: (id: number) => Promise<void>;
}

export const ExerciseStateProvider: React.FC<{ children: (state: ExerciseState) => React.ReactNode, init: ExerciseDayDto[] }> = ({ children, init }) => {
  const [historyDays, setHistoryDays] = useState<ExerciseDayDto[]>(init);

  const addExercise = async (dayIndex: number, exercise: CreateExerciseRecordDto) => {
    if(exercise.exercise === '' || exercise.reps === undefined || exercise.weight === undefined) return;
    try {
        const updatedDays = [...historyDays!];
        const day = updatedDays.at(updatedDays.length-1)
        day?.exerciseRecords.push({
            id: day?.exerciseRecords.reduce((max, x) => (x.id > max.id ? x : max)).id! + 1,
            exerciseDayId: undefined,
          ...exercise,
        });
  
        setHistoryDays(updatedDays!);

        await createExerciseRecord(exercise);
      } catch (error) {
          console.error('Ошибка при добавлении результата упражнения:', error);
      }

  };

  const updateExercise = async (id: number, values: Partial<UpdateExerciseRecordDto> ) => {
    try {
        await updateExerciseRecord(id, values as any);

        // Изменяем упражнение локально
        const updatedDays = historyDays.map((day) => ({
            ...day,
            exerciseRecords: day.exerciseRecords.map((exercise) =>
                exercise.id === id
                    ? { ...exercise, ...values } // Обновляем только нужное упражнение
                    : exercise // Оставляем остальные упражнения без изменений
            ),
        }));

        setHistoryDays(updatedDays);
    } catch (error) {
        console.error('Ошибка при редактировании упражнения:', error);
    }
  };

  const deleteExercise =  async (id: number) => {
    try {
        await deleteExerciseRecord(id);
        // Удаляем упражнение локально
        const updatedDays = historyDays.map((day) => ({
          ...day,
          exerciseRecords: day.exerciseRecords.filter((exercise) => exercise.id !== id),
        }));
        setHistoryDays(updatedDays);
    } catch (error) {
        console.error('Ошибка при удалении плана:', error);
    }
  };

  return (
    <>
      {children({
        historyDays,
        addExercise,
        updateExercise,
        deleteExercise,
      })}
    </>
  );
};
