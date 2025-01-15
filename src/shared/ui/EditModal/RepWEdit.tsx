import { Form } from 'react-bootstrap';
import { DeleteButton } from '../Buttons/DeleteButton';
import styles from './RepW.module.css';

interface RepWEditProps {
    set: {
        id: number;
        weight: number;
        reps: number;
    }
    onDelete: (id: number) => Promise<void>;
    onChange: (id: number, field: string, value: string | number) => void;
}

export const RepWEdit = ({set, onDelete, onChange}: RepWEditProps) => {
    return (
        <div className={`${styles.controllerContainer}`}>
            <Form.Control
                className={`${styles.controller}`}
                type="text"
                value={set.weight}
                onChange={(e) => onChange(set.id, 'weight', +e.target.value)}
            />
            <Form.Control
                className={`${styles.controller}`}
                type="text"
                value={set.reps}
                onChange={(e) => onChange(set.id, 'reps', +e.target.value)}
            />
            <DeleteButton 
                size='md'
                onDelete={async () => await onDelete(set.id)}
            />
        </div>
    );
}