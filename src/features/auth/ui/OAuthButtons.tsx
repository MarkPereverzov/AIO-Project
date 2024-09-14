import { FaGoogle, FaApple } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import styles from '../Auth.module.css';

export const OAuthButtons = () => (
  <div className={styles.oauthLoginButtons}>
    <Button 
      href={`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=169777967915-jemriuldqc87jhoar5gn51u2glm3tmca.apps.googleusercontent.com&scope=openid email profile&redirect_uri=http://localhost:3000/google/callback&state=1`}
      variant="outline-secondary" 
      className={`w-100 mb-2 ${styles.btnOutlineSecondary}`}
    >
      <FaGoogle className="me-2" /> Войти через Google
    </Button>
    <Button variant="outline-secondary" className={`w-100 ${styles.btnOutlineSecondary}`}>
      <FaApple className="me-2" /> Войти через Apple
    </Button>
  </div>
);