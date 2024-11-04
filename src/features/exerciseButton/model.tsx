'use client';
import { useState } from 'react';

export const useExercise = (handleClose: () => void) => {
  const [exerciseName, setExerciseName] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Обработка отправки данных формы
    //TODO
    /*
    await subscribe({
      exerciseName: exerciseName,
      healthId: 1
    });*/

    console.log('Название упражнения:', exerciseName);
    handleClose();
  };

	return { exerciseName, setExerciseName, handleSubmit };

}