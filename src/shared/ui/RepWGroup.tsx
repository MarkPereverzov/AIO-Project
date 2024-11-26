import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { DeleteButton } from './DeleteButton';
import { Button } from 'react-bootstrap';
import styles from './RepW.module.css';
import { RepWEdit } from './RepWEdit';

interface RepWGroupProps {
    sets: {
        id: number;
        weight: number;
        reps: number;
    }[];
    onChange: (id: number, field: string, value: string | number) => void;
    onDelete: (id: number) => Promise<void>;
    onAdd: () => void;
}

export const RepWGroup = ({sets, onChange, onDelete, onAdd}: RepWGroupProps) => {
    const repWEdit = sets.map((set, index) => <RepWEdit key={index} set={set} onDelete={onDelete} onChange={onChange}/>)

    return (
        <Form.Group key={'redit'} className={`${styles.group} mb-3`}>
            <div className={`${styles.labelContainer}`}>
                <Form.Label><h4>Вес</h4></Form.Label>
                <Form.Label><h4>Повторения</h4></Form.Label>
            </div>
            {repWEdit}
            <Button onClick={onAdd}><h1 className={`ctext-button`}>Добавить</h1></Button>
        </Form.Group>
    );
}