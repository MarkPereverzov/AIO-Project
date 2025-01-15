import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from './RepW.module.css';
import { MuscleEditView } from './MuscleEditView';
import { DropDownInput } from '../DefaultInput';
import { useState } from 'react';

interface MuscleEditContainerProps {
    muscleGroups: {
        id: number,
        name: string
    }[],
    allMuscleGroups: {
        id: number,
        name: string
    }[],
    setValues: (prev: any) => any;
}

export const MuscleEditContainer = ({muscleGroups, allMuscleGroups, setValues}: MuscleEditContainerProps) => {
    const [newMuscleGroup, setNewMuscleGroup] = useState<string>("");

    const handleEditMuscle = (id: number, field: string, value: string | number) => {
        setValues((prev: any) => {
            const updatedMG = new Set([prev.muscleGroups]).add(value);
    
            const newState = {
                ...prev,
                muscleGroups: new Array(updatedMG),
            };
            return newState;
        });
    };
    
    const handleDeleteMuscle = async (id: number) => {
        setValues((prev: any) => {
            const updatedMG = prev.muscleGroups.filter((muscleGroups: any) => muscleGroups?.id !== id);
        
            const newState = {
            ...prev,
            muscleGroups: updatedMG,
            };
        
            return newState;
        });
    }
    
    const handleAddMuscle = () => {
        setValues((prev: any) => {
            const newId = prev.muscleGroups.reduce((max: any, x: any) => (x.id > max.id ? x : max)).id+1;
            const findId = allMuscleGroups.reduce((finId: any, x: any) => {
                if(x.name === newMuscleGroup) {
                    finId = x.id; 
                    return finId;
                }
            }, 0);

            const MG = {
                id: findId ? findId : newId,
                name: newMuscleGroup
            }

            setNewMuscleGroup("");

            const updatedMG = new Set([...prev.muscleGroups]);
            updatedMG.add(MG);

            const newState = {
                ...prev,
                muscleGroups: new Array(updatedMG),
            };
            return newState;
        });
    }

    const muscleEditView = muscleGroups?.map((muscle, index) => 
        <MuscleEditView 
            key={index} 
            allMuscleGroups={allMuscleGroups as any}
            muscleGroups={muscleGroups}
            id={muscle.id} 
            onDelete={handleDeleteMuscle} 
            onChange={handleEditMuscle}
        />
    );

    return (
        <Form.Group key={'medit'} className={`${styles.group} mb-3`}>
            <div className={`${styles.labelContainer}`}>
                <Form.Label><h4>Мышечная группа</h4></Form.Label>
            </div>
            <DropDownInput
                value={newMuscleGroup}
                suggestions={allMuscleGroups.map(x => x.name)}
                onEnter={(muscle: string) => { setNewMuscleGroup(muscle); handleAddMuscle() }}
            />
            <Button onClick={handleAddMuscle}><h1 className={`ctext-button`}>Добавить</h1></Button>
            {muscleEditView}
            
        </Form.Group>
    );
}