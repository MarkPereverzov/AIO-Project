import { Form, Button, InputGroup } from 'react-bootstrap';
import styles from './Input.module.css';

interface InputProps {
    value: string | number | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    placeholder?: string | undefined;
    type?: "text" | "number";
}

export const Input = ({value, onChange, placeholder, type }: InputProps) => (
    <InputGroup className={styles.filterItem}>
        <Form.Control
          type={type ?? 'text'}
          placeholder={placeholder ?? ''}
          value={value ?? ''}
          onChange={onChange}
          className={styles.input}
        />
    </InputGroup>
)