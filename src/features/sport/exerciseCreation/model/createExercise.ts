'use client';
import { useState } from 'react';
import { CreateExerciseDto } from '@/shared/models';

interface States {
  name: string;
  muscleGroup: string[];
}

interface Props {
  initStates?: States;
  onSave: (values: CreateExerciseDto) => Promise<any>;
}

export const useCreateExercise = ({initStates, onSave}: Props) => {
  const [states, setStates] = useState<States>({ 
    name: initStates?.name ?? '', 
    muscleGroup: initStates?.muscleGroup ?? [],
  });
  
  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement> | undefined) => {
    e?.preventDefault();

    const result =  await onSave({
      name: states.name,
      muscleGroups: states.muscleGroup
    });
        
    return result;
  };

	return { states, setStates, handleSubmit };

}