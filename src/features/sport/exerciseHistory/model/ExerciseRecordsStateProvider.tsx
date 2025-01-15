import React, { useState } from 'react';
import { CreateExerciseRecordDto, ExerciseDayDto, ResponseExerciseRecordDto, UpdateExerciseRecordDto } from '@/shared/models';
import { updateExerciseRecord, deleteExerciseRecord, createExerciseRecord } from '@/entities/sport'; 
import { toClearDate, compareDate } from '@/shared/lib';
import { createExerciseDayModel, sortExerciseDays } from '@/entities/sport';
import { formatExerciseRecord } from '@/entities/sport';

interface ExerciseRecordsStateProviderProps {
  historyDays: ExerciseDayDto[];
  addExerciseRecord: (dayIndex: number, exercise: CreateExerciseRecordDto) => Promise<any>;
  updateExercise: (id: number, exercise: CreateExerciseRecordDto ) => Promise<void>;
  deleteExercise: (id: number) => Promise<void>;
}

export const ExerciseRecordsStateProvider: React.FC<{ children: (state: ExerciseRecordsStateProviderProps) => React.ReactNode, init: ExerciseDayDto[] }> = ({ children, init }) => {
  const formatedInit = init.map(day => (
    {
      ...day,
      exerciseRecords: day.exerciseRecords.map(x => formatExerciseRecord(x))
    }
  ))
  const sortedInit = sortExerciseDays(formatedInit);
  const [historyDays, setHistoryDays] = useState<ExerciseDayDto[]>(sortedInit);

  const addExerciseRecord = async (dayIndex: number, exercise: CreateExerciseRecordDto) => {
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

  const updateExercise = async (id: number, exercise: CreateExerciseRecordDto ) => {
    if(exercise.exercise === '' || exercise.reps === undefined || exercise.weight === undefined) return {error: true};
    
    let updatedExerciseRecord: any = null;
    try {
      updatedExerciseRecord = await updateExerciseRecord(id, exercise);
    } 
    catch (error) {
      console.error('Ошибка при обновлении результата упражнения:', error);
    }
    finally {
      const updatedDays = historyDays!.map(day => {
        // Проверить, есть ли упражнение с нужным id в этом дне
        if (day.exerciseRecords.some(exercise => exercise.id === id)) {
          // Вернуть обновлённый день с обновлённым упражнением
          return {
            ...day,
            exerciseRecords: day.exerciseRecords.map(exercise =>
              exercise.id === id ? updatedExerciseRecord : exercise
            ),
          };
        }
        // Вернуть остальные дни без изменений
        return day;
      });
      
      // Обновить состояние
      setHistoryDays(updatedDays);

      return updatedExerciseRecord;
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
        addExerciseRecord,
        updateExercise,
        deleteExercise,
      })}
    </>
  );
};
