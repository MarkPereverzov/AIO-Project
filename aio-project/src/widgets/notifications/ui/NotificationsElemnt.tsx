import { ListGroup } from 'react-bootstrap';
import { FaInfoCircle, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import styles from '../Notifications.module.css';

interface NotificationsElementProps {
  icon: string,
  title: string,
  subtitle: string
};

export const NotificationsElement = ({icon, title, subtitle}: NotificationsElementProps) => {
  const renderIcon = () => {
    switch (icon) {
      case 'info':
        return <FaInfoCircle className={styles.notificationIcon} />;
      case 'warning':
        return <FaExclamationTriangle className={styles.notificationIcon} />;
      case 'success':
      default:
        return <FaCheckCircle className={styles.notificationIcon} />;
    }
  };

  return (
    <ListGroup.Item className={styles.listGroupItem}>
      {renderIcon()} {/* Динамическая иконка */}
      <div className={styles.notificationContent}>
        <h5 className={styles.notificationTitle}>{title}</h5>
        <p className={styles.notificationSubtitle}>{subtitle}</p>
      </div>
    </ListGroup.Item>
  );
}