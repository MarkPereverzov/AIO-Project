import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import styles from '../input.module.css';

export const ExerciseInput = () => {
    return (
        <Form className={styles.mainContainer}>
            <Form.Control className={`${styles.input}`} type="text" placeholder="Бицепс" />
            <Form.Control className={`${styles.numberInput} ${styles.input}`} type="number" placeholder="120" />
            <Form.Control className={`${styles.numberInput} ${styles.input}`} type="number" placeholder="12" />
            <Button className={styles.submit} variant="primary" type="submit">
                Сохранить
            </Button>
        </Form>
    );
}