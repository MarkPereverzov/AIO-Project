import { Form, Button } from 'react-bootstrap';
import styles from '../Auth.module.css';

export const RegisterForm = () => (
	<>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control className={styles.formControl} type="email" placeholder="Введите email" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Пароль</Form.Label>
      <Form.Control className={styles.formControl} type="password" placeholder="Введите пароль" />
    </Form.Group>

    <Form.Group controlId="formBasicPasswordConfirm">
      <Form.Label>Подтверждение пароля</Form.Label>
      <Form.Control className={styles.formControl} type="password" placeholder="Подтвердите пароль" />
    </Form.Group>

    <Button variant="primary" type="submit" className={`w-100 ${styles.submitButton}`}>
      Зарегистрироваться
    </Button>
  </>
);