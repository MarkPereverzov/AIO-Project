import { Button } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';
import styles from '../Notifications.module.css';

export const NotificationsButton = ({onClick}: {onClick: () => void}) => {
  return (
    <>
      {/* Кнопка для открытия меню уведомлений */}
      <Button className={styles.notificationsButton} onClick={onClick}>
        <FaBell />
      </Button>
    </>
  );
}