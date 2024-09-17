'use client';
import { useHeader } from "../model";
import { Menu } from '@/widgets/menu';
import { Notifications } from '@/widgets/notifications';
import { AvatarButton } from "@/shared";
import { ModalRegister } from "@/features/auth";
import styles from '../Header.module.css';

export const Header = ({ pageName }: { pageName: string }) => {
  const { showRegisterModal, handleShowRegisterModal, handleCloseRegisterModal } = useHeader();

  return (
    <header className={styles.header}>
      <Menu /> {/* кнопка меню */}
      <h1 className={styles.pageTitle}>{pageName}</h1> {/* название страницы */}
      <Notifications /> {/* кнопка уведомлений */}
      <AvatarButton onClick={ handleShowRegisterModal }/>
      <ModalRegister show={showRegisterModal} handleClose={handleCloseRegisterModal} /> {/* окно регистрации */}
    </header>
  );
}