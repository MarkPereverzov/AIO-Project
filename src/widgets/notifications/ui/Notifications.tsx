import { useNotification } from "../model";
import { NotificationsButton } from "./NotificationsButton";
import { NotificationsElement } from "./NotificationsElemnt";
import { OffcanvasNotifications } from "./OffcanvasNotifications";
import '../Notifications.module.css';

const notifications = [{
  title: 'Уведомление 1',
  subtitle: 'Подпись к уведомлению 1',
  icon: 'info'
}, {
  title: 'Уведомление 2',
  subtitle: 'Подпись к уведомлению 2',
  icon: 'warning'
}, {
  title: 'Уведомление 3',
  subtitle: 'Подпись к уведомлению 3',
  icon: 'success'
}];

interface Notifications {
  notifications: {
    title: string,
    subtitle: string,
    icon: string,
  }[]
};

//export const Notifications = ({notifications}: Notifications) => {
export const Notifications = () => {
  const { showNotifications, handleShow, handleClose } = useNotification();
  const notificationsElements = notifications.map((notification, index) => (
    <NotificationsElement 
      key={index} 
      title={notification.title} 
      subtitle={notification.subtitle} 
      icon={notification.icon}
    />
  ));
  return (
    <>
      <NotificationsButton onClick={handleShow}/>
      <OffcanvasNotifications 
        showNotifications={showNotifications} 
        handleClose={handleClose} 
        notificationsElements={notificationsElements}
      />
    </>
  );
}