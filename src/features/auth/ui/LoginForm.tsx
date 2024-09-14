import { Form, Button } from 'react-bootstrap';
import styles from '../Auth.module.css';

export const LoginForm = () => (
	<>
		<Form.Group controlId="formBasicEmail">
			<Form.Label>Email</Form.Label>
			<Form.Control className={styles.formControl} type="email" placeholder="Введите email" />
		</Form.Group>

		<Form.Group controlId="formBasicPassword">
			<Form.Label>Пароль</Form.Label>
			<Form.Control className={styles.formControl} type="password" placeholder="Введите пароль" />
		</Form.Group>

		<Button variant="primary" type="submit" className={`sw-100 ${styles.submitButton}`}>
			Войти
		</Button>
	</>
);