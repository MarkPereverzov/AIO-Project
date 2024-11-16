import { Button } from 'react-bootstrap';
import { RoundButton } from '@/shared';
import { FaRegBell } from "react-icons/fa";
import styles from '../Notifications.module.css';

export const NotificationsButton = ({onClick}: {onClick: () => void}) => {
  return (
    <>
      <RoundButton 
        className={styles.notificationsButton}
        size={64}
        onClick={onClick}
        content={<FaRegBell size={30} />} 
      /> 
    </>
  );
}