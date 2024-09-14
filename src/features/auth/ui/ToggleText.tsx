import styles from '../Auth.module.css';

interface ToggleTextProps {
  isLogin: boolean,
  toggleLoginRegister: () => void,
}

export const ToggleText = ({ isLogin, toggleLoginRegister }: ToggleTextProps) => (
  <div className={styles.toggleText}>
    <p onClick={toggleLoginRegister}>
      {isLogin ? (
        <>
          У меня нет аккаунта, хочу <strong>зарегистрироваться</strong>
        </>
      ) : (
        <>
          У меня уже есть аккаунт, хочу <strong>войти</strong>
        </>
      )}
    </p>
  </div>
);