import { Select, Input, MuscleElement } from "@/shared";
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
    const [currentMuscle, setCurrentMuscle] = useState<string>('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    const musclesInit = exercises?.reduce((acc, e) => {
        e.muscleGroups.forEach((mg: any) => acc.add(mg.name)); 
        return acc;
    }, new Set());

    const muscles = Array.from(musclesInit!) as string[];

    const handleDelete = (name: string) => {  
        setStates({...states, muscleGroup: states.muscleGroup.filter(x => x !== name)});
    }

    const handleInputChange = (e: any) => {
        const value = e.target.value;
        setCurrentMuscle(value);
        const filtered = muscles?.filter((item: string) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuggestions(filtered as any);
      };

    const handleSelect = (suggestion: string) => {
        setCurrentMuscle(suggestion); // Заполняем поле
        setFilteredSuggestions([]); // Скрываем подсказки
      };

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
            <div className={styles.InputListElement}>
                <Form.Control
                    type="text"
                    placeholder="Група мышц"
                    value={currentMuscle}
                    onChange={(e) => {handleInputChange(e)}}
                />
                 {filteredSuggestions?.length > 0 && (
                    <Dropdown show>
                    <div style={{ position: "absolute", width: "100%", zIndex: 10 }}>
                        {filteredSuggestions.map((suggestion, index) => (
                        <Dropdown.Item
                            key={index}
                            onClick={() => handleSelect(suggestion)}
                        >
                            {suggestion}
                        </Dropdown.Item>
                        ))}
                    </div>
                    </Dropdown>
                )}
                <Button
                    className={styles.Button}
                    onClick={() => { console.log(states); setStates({...states, muscleGroup: [...states.muscleGroup, currentMuscle]}); setCurrentMuscle(""); }}
                >
                    Сохранить
                </Button>
            </div>
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