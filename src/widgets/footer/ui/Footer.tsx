import React from 'react';
import { FaCog, FaPlay } from 'react-icons/fa';
import { useFooter } from '../model';
import { Subscribe } from '@/features/subscribe';
import { PlayModal } from '@/features/playModal'; 
import styles from '../Footer.module.css';

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  const {
    showModal,
    handleShow,
    handleClose,
    showPlayModal,
    handleShowPlayModal,
    handleClosePlayModal,
  } = useFooter();

  return (
    <footer className={styles.footer}>
      {/* Кнопка с иконкой FaCog для открытия первой модалки */}
      <button className={styles.footerButton} onClick={handleShow}>
        <FaCog />
      </button>

      {/* Кнопка с иконкой FaPlay для открытия второй модалки */}
      <button className={styles.footerButton} onClick={handleShowPlayModal}>
        <FaPlay />
      </button>

      {/* Первое модальное окно */}
      <Subscribe show={showModal} handleClose={handleClose} />

      {/* Второе модальное окно с другим текстом */}
      <PlayModal show={showPlayModal} handleClose={handleClosePlayModal} />
    </footer>
  );
};
