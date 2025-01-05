import { Form, Button, InputGroup } from 'react-bootstrap';
import { ChangeEventHandler, OptionHTMLAttributes } from 'react';
import styles from './Select.module.css';

interface SelectProps {
    value: string | number | readonly string[] | undefined;
    onChange: ChangeEventHandler<HTMLSelectElement> | undefined;
    options?: Array<OptionHTMLAttributes<HTMLOptionElement> & { label: string }> | undefined;
}

export const Select = ({value, onChange, options}: SelectProps) => (
    <Form.Group className={styles.filterItem}>
        <Form.Select
            value={value}
            onChange={onChange}
            className={styles.selectInput}
        >
            {options?.map((option, index) => (
                <option key={index} value={option.value} {...option}>
                    {option.label}
                </option>
            ))}
        </Form.Select>
    </Form.Group>
)