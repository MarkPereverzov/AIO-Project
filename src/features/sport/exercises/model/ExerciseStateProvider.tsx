import React, { useState } from 'react';
import { CreateExerciseDto } from '@/shared/models';
import { createExercise, updateExercise, deleteExercise } from '@/entities/sport';

interface ExerciseState {
  exercises: CreateExerciseDto[];
  addExercise: (exercise: CreateExerciseDto) => Promise<any>;
  changeExercise: (id: number, exercise: CreateExerciseDto ) => Promise<void>;
  delExercise: (id: number) => Promise<void>;
}

export const ExerciseStateProvider: React.FC<{ children: (state: ExerciseState) => React.ReactNode, init: CreateExerciseDto[] }> = ({ children, init }) => {
  const [exercises, setExercises] = useState<CreateExerciseDto[]>(init);

  const addExercise = async (exercise: CreateExerciseDto) => {
    if(exercise.name === '') return {error: true};

    let createdExercise = null;
    try {
      createdExercise = await createExercise(exercise);
    } 
    catch (error) {
      console.error('Ошибка при добавлении упражнения:', error);
    }
    finally {
      const updatedExercises = [...exercises!, createdExercise as any];
      setExercises(updatedExercises!);
      return createdExercise;
    }
  };

  const changeExercise = async (id: number, exercise: CreateExerciseDto ) => {
    if(exercise.name === '') return {error: true};
    
    let updatedExercise: any = null;
    try {
      updatedExercise = await updateExercise(id, exercise as any);
    } 
    catch (error) {
      console.error('Ошибка при обновлении упражнения:', error);
    }
    finally {
      const updatedExercises = exercises.map((x: any) => {
        return x.id !== id ? x : updatedExercise;
      } );
      
      setExercises(updatedExercises!);

      return updatedExercise;
    }
  };

  const delExercise =  async (id: number) => {
    try {
        await deleteExercise(id);

        const updatedExercises = exercises.map((x: any) => {
          if (x.id !== id) return x;
        });

        setExercises(updatedExercises!);
    } catch (error) {
        console.error('Ошибка при удалении упражнения:', error);
    }
  };

  return (
    <>
      {children({
        exercises,
        addExercise,
        changeExercise,
        delExercise,
      })}
    </>
  );
};
