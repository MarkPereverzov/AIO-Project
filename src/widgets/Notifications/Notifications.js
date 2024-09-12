import React, { useState } from 'react';
import { Offcanvas, ListGroup, Button } from 'react-bootstrap';
import { FaBell, FaInfoCircle, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import './Notifications.css';

// Массив достижений с типами иконок
const achievements = [{
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

export default function Notifications() {
  // Маппинг достижений на компонент NotificationsElement
  const achievementsElements = achievements.map((ach, index) => (
    <NotificationsElement 
      key={index} 
      title={ach.title} 
      subtitle={ach.subtitle} 
      icon={ach.icon} // Передаем тип иконки
    />
  ));

  const [showNotifications, setShowNotifications] = useState(false);

  const handleShow = () => setShowNotifications(true);
  const handleClose = () => setShowNotifications(false);

  return (
    <>
      {/* Кнопка для открытия меню уведомлений */}
      <Button className="notifications-button" onClick={handleShow}>
        <FaBell />
      </Button>

      {/* Offcanvas для меню уведомлений */}
      <Offcanvas show={showNotifications} onHide={handleClose} placement="end" style={{ width: '300px' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Уведомления</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {achievementsElements}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// Компонент для отображения уведомления
function NotificationsElement(props) {
  // Функция для рендера нужной иконки
  const renderIcon = () => {
    switch (props.icon) {
      case 'info':
        return <FaInfoCircle className="notification-icon" />;
      case 'warning':
        return <FaExclamationTriangle className="notification-icon" />;
      case 'success':
      default:
        return <FaCheckCircle className="notification-icon" />;
    }
  };

  return (
    <ListGroup.Item className="notification-item">
      {renderIcon()} {/* Динамическая иконка */}
      <div className="notification-content">
        <h5 className="notification-title">{props.title}</h5>
        <p className="notification-subtitle">{props.subtitle}</p>
      </div>
    </ListGroup.Item>
  );
}
