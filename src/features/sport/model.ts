'use client';
import { useState } from 'react';
import { createExerciseRecord } from '@/entities/sport/';

interface Props {
  setPopup: (n:number) => void; // 1 - success 2 - error
}

export const useCreateExerciseRecord = ({setPopup}: Props) => {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {error} = await createExerciseRecord({
      exercise: exercise,
      weight: parseFloat(weight),
      reps: parseInt(reps),
    });
    if (error != undefined) setPopup(2);
    else setPopup(1);
  };

	return { exercise, weight, reps, setExercise, setWeight, setReps, handleSubmit };

}