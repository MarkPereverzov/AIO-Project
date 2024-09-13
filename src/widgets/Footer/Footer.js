import './Footer.css'; // Стили для avatar-button
import React, { useState } from 'react';
import { FaCog, FaMapPin, FaRegWindowMaximize } from 'react-icons/fa';
import { Parameters } from '../index'; // Убедитесь, что путь корректный

export default function Footer(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <footer className="footer">
      <button className="footer-button" onClick={handleShow}>
        <FaCog />
      </button>
      {/* Модальное окно */}
      <Parameters show={showModal} handleClose={handleClose} />
    </footer>
  );
}
