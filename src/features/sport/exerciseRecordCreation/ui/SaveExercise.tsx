import { Select, Input } from "@/shared";
import { CreateExerciseDto, CreateExerciseRecordDto } from "@/shared/models";
import { useState } from 'react';
import { Button } from "react-bootstrap"; 
import { useCreateExerciseRecord } from "@/features/sport/exerciseRecordCreation";
import styles from '../SaveExercise.module.css';

interface States {
    exercise: string;
    weight?: number;
    reps?: number;
}

interface SaveExercise {
    exercises?: CreateExerciseDto[] | undefined;
    onSave: (values: CreateExerciseRecordDto) => Promise<void>,
}

export const SaveExercise = ({exercises, onSave}: SaveExercise) => {
    const { states, setStates, handleSubmit: onSavePassed } = useCreateExerciseRecord({
        initStates: {exercise: exercises?.at(0)?.name ?? ''},
        onSave: onSave,
    });

    return (
        <div className={styles.Container}>
            <div className={styles.titleBlock}>
                <h1 className={styles.title}>Запись выполненных упражнений</h1>
            </div>
            <Select
                value={states.exercise}
                onChange={(e) => setStates({ ...states, exercise: e.target.value })}
                options={
                    exercises?.map((exercise) => (
                        {value: exercise.name, label: exercise.name}
                    ))
                }
            />
            <Input
                value={states.weight}
                type="number"
                onChange={(e) => setStates({...states, weight: parseInt(e.target.value)})}
                placeholder="Вес"
            />
            <Input
                value={states.reps}
                type="number"
                onChange={(e) => setStates({...states, reps: parseInt(e.target.value)})}
                placeholder="Повторения"
            />
            <Button
                className={styles.Button}    
                onClick={async () => {await onSavePassed()}}
            >
                Сохранить
            </Button>
        </div>
    );
}