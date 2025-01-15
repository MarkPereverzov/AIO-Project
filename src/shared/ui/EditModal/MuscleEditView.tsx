import { Form } from 'react-bootstrap';
import { DeleteButton } from '../Buttons/DeleteButton';
import { DropDownInput } from '../DefaultInput';
import styles from './RepW.module.css';

interface MuscleEditViewProps {
    muscleGroups: {
        id: number,
        name: string
    }[],
    allMuscleGroups: {
        id: number,
        name: string
    }[],
    id: number,
    onDelete: (id: number) => Promise<void>;
    onChange: (id: number, field: string, value: string | number) => void;
}

export const MuscleEditView = ({muscleGroups, id, allMuscleGroups, onDelete, onChange}: MuscleEditViewProps) => {
    return (
        <div className={`${styles.controllerContainer}`}>
            <DropDownInput
                value={muscleGroups.find(x => x.id === id)?.name}
                suggestions={allMuscleGroups.map(x => x.name)}
                onEnter={(muscle: string) => onChange(id, 'name', muscle)}
            />
            <DeleteButton 
                size='md'
                onDelete={async () => await onDelete(id)}
            />
        </div>
    );
}