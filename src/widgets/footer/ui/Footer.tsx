import React from 'react';
import { useFooter } from '../model';
import { Subscribe } from '@/features/subscribe';
import { CreateTag } from '@/features/createTag';
import { PlayModal } from '@/features/playModal';
import { BiSolidCog, BiSolidCustomize, BiSolidRightArrow, BiSolidPin } from "react-icons/bi";
import styles from '../Footer.module.css';

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  const {
    showModal,
    handleShow,
    handleClose,
    showPlayModal,
    statusPlayModal,
    isLoadingPlayModal,
    showModalCreteTag,
    handleShowPlayModal,
    handleClosePlayModal,
    handleStreak,
    handleShowCreateTag,
    handleCloseCreateTag,
  } = useFooter();

  return (
    <footer className={styles.footer}>
      {/* Кнопка с иконкой FaCog для открытия первой модалки */}
      <button className={styles.footerButton} onClick={handleShow}>
        <BiSolidCog />
      </button>

      {/* Кнопка с иконкой FaPlay для открытия второй модалки */}
      <button className={styles.footerButton} onClick={handleShowPlayModal}>
        <BiSolidRightArrow />
      </button>

      {/* Кнопка с иконкой FaPlay для открытия второй модалки */}
      <button className={styles.footerButton} onClick={handleShowCreateTag}>
        <BiSolidCustomize  />
      </button>

      {/* Первое модальное окно */}
      <Subscribe
        show={showModal}
        handleClose={handleClose}
      />

      {/* Второе модальное окно с другим текстом */}
      <PlayModal 
        show={showPlayModal} 
        handleClose={handleClosePlayModal} 
        status={statusPlayModal} 
        handleStreak={handleStreak} 
        isLoading={isLoadingPlayModal}
      />

      <CreateTag
        show={showModalCreteTag}
        handleClose={handleCloseCreateTag}
      />
    </footer>
  );
};
