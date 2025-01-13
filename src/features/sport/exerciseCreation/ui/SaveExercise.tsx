import { Select, Input, MuscleElement, DropDownInput } from "@/shared";
import { CreateExerciseDto, CreateExerciseRecordDto } from "@/shared/models";
import { useState } from 'react';
import { Button } from "react-bootstrap"; 
import { Container, Form, Dropdown } from "react-bootstrap";
import { useCreateExercise } from "../model/createExercise";
import styles from '../SaveExercise.module.css';

interface SaveExercise {
    exercises?: CreateExerciseDto[] | undefined;
    onSave: (values: CreateExerciseDto) => Promise<void>,
}

export const SaveExercise = ({exercises, onSave}: SaveExercise) => {
    const { states, setStates, handleSubmit: onSavePassed } = useCreateExercise({
        initStates: {name: '', muscleGroup: []},
        onSave: onSave,
    });

    const musclesInit = exercises?.reduce((acc, e) => {
        e.muscleGroups.forEach((mg: any) => acc.add(mg.name)); 
        return acc;
    }, new Set());

    const muscles = Array.from(musclesInit!) as string[];

    const handleDelete = (name: string) => {  
        setStates({...states, muscleGroup: states.muscleGroup.filter(x => x !== name)});
    }

    return (
        <div className={styles.Container}>
            <div className={styles.titleBlock}>
                <h1 className={styles.title}>Запись упражнений</h1>
            </div>
            <Input
                value={states.name}
                type="text"
                onChange={(e) => setStates({...states, name: e.target.value})}
                placeholder="Название упражнения"
            />
            <DropDownInput
                suggestions={muscles}
                onEnter={(value: string) => { setStates({...states, muscleGroup: [...states.muscleGroup, value]}); }}
            />
            <Container className={styles.muscleContainer}>
                {states.muscleGroup?.map((mg, i) => <MuscleElement key={i} muscleGroup={{name: mg}} onClick={()=>{handleDelete(mg)}}/>)}
            </Container>
            <Button
                className={styles.Button}    
                onClick={async () => {await onSavePassed()}}
            >
                Сохранить
            </Button>
        </div>
    );
}