'use client';
import { useHeader } from "../model";
import { Menu } from '@/widgets/menu';
import { Notifications } from '@/widgets/notifications';
import { AvatarButton } from "@/shared";
import { ModalRegister } from "@/features/auth";
import styles from '../Header.module.css';
import { useUser } from "@/entities/user";

export const Header = ({ pageName }: { pageName: string }) => {
  const { showRegisterModal, handleShowRegisterModal, handleCloseRegisterModal } = useHeader();
  const { user } = useUser();
  
  //console.log(user);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Menu /> {/* кнопка меню */}
        <h1 className={styles.pageTitle}>{pageName}</h1> {/* название страницы */}
        <Notifications /> {/* кнопка уведомлений */}
        <AvatarButton userAvatar={ user?.userLogo } onClick={ handleShowRegisterModal }/>
        <ModalRegister show={showRegisterModal} handleClose={handleCloseRegisterModal} /> {/* окно регистрации */}
      </div>
    </header>
  );
}