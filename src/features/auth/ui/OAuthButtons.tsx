import { FaGoogle, FaApple } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import styles from '../Auth.module.css';

export const OAuthButtons = () => (
  <div className={styles.oauthLoginButtons}>
    <Button variant="outline-secondary" className={`w-100 mb-2 ${styles.btnOutlineSecondary}`}>
      <FaGoogle className="me-2" /> Войти через Google
    </Button>
    <Button variant="outline-secondary" className={`w-100 ${styles.btnOutlineSecondary}`}>
      <FaApple className="me-2" /> Войти через Apple
    </Button>
  </div>
);