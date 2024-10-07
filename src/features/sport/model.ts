'use client';
import { useState } from 'react';
import { createExerciseRecord } from '@/entities/sport/';

export const useCreateExerciseRecord = () => {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createExerciseRecord({
      exercise: exercise,
      weight: parseFloat(weight),
      reps: parseInt(reps),
    });
  };

	return { exercise, weight, reps, setExercise, setWeight, setReps, handleSubmit };

}