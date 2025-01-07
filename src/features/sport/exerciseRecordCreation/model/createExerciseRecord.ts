'use client';
import { useState } from 'react';
import { createExerciseRecord } from '@/entities/sport/';
import { CreateExerciseRecordDto } from '@/shared/models';

interface States {
  exercise: string;
  weight?: number;
  reps?: number;
}

interface Props {
  initStates?: States;
  onSave: (values: CreateExerciseRecordDto) => Promise<any>;
}

export const useCreateExerciseRecord = ({initStates, onSave}: Props) => {
  const [states, setStates] = useState<States>({ 
    exercise: initStates?.exercise ?? '', 
    weight: initStates?.weight, 
    reps: initStates?.reps
  });
  
  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement> | undefined) => {
    e?.preventDefault();

    const result =  await onSave({
      exercise: states.exercise,
      weight: states.weight!,
      reps: states.reps! 
    });
        
    return result;
  };

	return { states, setStates, handleSubmit };

}