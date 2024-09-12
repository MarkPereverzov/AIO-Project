import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import Notifications from '../Notifications/Notifications';
import Autorization from '../Autorization/Autorization';
import Menu from '../Menu/Menu';
import './Header.css';

export default function Header(props) {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const handleShowRegisterModal = () => setShowRegisterModal(true);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);

  return (
    <header className="header">
      <Menu /> {/* кнопка меню */}
      <h1 className="page-title">{props.namePage}</h1> {/* название страницы */}
      <Notifications /> {/* кнопка уведомлений */}
      <Button className="avatar-button" onClick={handleShowRegisterModal}> {/* кнопка регистрации */}
        <FaUserCircle className="avatar-icon" />
      </Button>
      <Autorization show={showRegisterModal} handleClose={handleCloseRegisterModal} /> {/* окно регистрации */}
    </header>
  );
}