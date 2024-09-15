import React from 'react';
import { FaCog } from 'react-icons/fa';
import { useFooter } from '../model';
import { Subscribe } from '@/features/subscribe';
import styles from '../Footer.module.css';

interface FooterProps {

};

export const Footer = ({}: FooterProps) => {
  const { showModal, handleShow, handleClose } = useFooter();

  return (
    <footer className={styles.footer}>
      <button className={styles.footerButton} onClick={handleShow}>
        <FaCog />
      </button>
      {/* Модальное окно */}
      <Subscribe show={showModal} handleClose={handleClose} />
    </footer>
  );
}
