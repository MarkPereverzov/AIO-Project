import React, { useState } from 'react';
import { CreateExerciseRecordDto, ExerciseDayDto, ResponseExerciseRecordDto, UpdateExerciseRecordDto } from '@/shared/models';
import { updateExerciseRecord, deleteExerciseRecord, createExerciseRecord } from '@/entities/sport'; 
import { toClearDate, compareDate } from '@/shared/lib';
import { createExerciseDayModel, sortExerciseDays } from '@/entities/sport';

interface ExerciseState {
  historyDays: ExerciseDayDto[];
  addExercise: (dayIndex: number, exercise: CreateExerciseRecordDto) => Promise<any>;
  updateExercise: (id: number, values: Partial<UpdateExerciseRecordDto> ) => Promise<void>;
  deleteExercise: (id: number) => Promise<void>;
}

export const ExerciseStateProvider: React.FC<{ children: (state: ExerciseState) => React.ReactNode, init: ExerciseDayDto[] }> = ({ children, init }) => {
  const sortedInit = sortExerciseDays(init);
  const [historyDays, setHistoryDays] = useState<ExerciseDayDto[]>(sortedInit);

  const addExercise = async (dayIndex: number, exercise: CreateExerciseRecordDto) => {
    if(exercise.exercise === '' || exercise.reps === undefined || exercise.weight === undefined) return {error: true};

    let createdExerciseRecord = null;
    try {
        createdExerciseRecord = await createExerciseRecord(exercise);
    } 
    catch (error) {
          console.error('Ошибка при добавлении результата упражнения:', error);
    }
    finally {
      const updatedDays = [...historyDays!];
      let day = updatedDays.find(x => compareDate(x.date, new Date()) == 0);

      if(day === undefined) {
        day = createExerciseDayModel(historyDays);
        updatedDays.push(day);
      }

      day.exerciseRecords.push(createdExerciseRecord?.data!);
  
      setHistoryDays(updatedDays!);
      return createdExerciseRecord;
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
