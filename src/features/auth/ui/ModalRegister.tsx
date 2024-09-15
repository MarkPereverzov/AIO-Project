import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useAuth } from '../model/auth';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm'
import { ToggleText } from './ToggleText';
import { OAuthButtons } from './OAuthButtons';
import styles from '../Auth.module.css';

interface ModalRegisterProps {
  show: boolean,
  handleClose: () => void
}

export const ModalRegister = ({ show, handleClose }: ModalRegisterProps) => {
  const { isLogin, toggleLoginRegister } = useAuth();
  
  return (
    <Modal show={show} onHide={handleClose} centered contentClassName={styles.modalContent}>
      <Modal.Header closeButton>
        <Modal.Title>{isLogin ? 'Вход' : 'Регистрация'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {isLogin && <LoginForm/>}
          {!isLogin && <RegisterForm/>}
        </Form>
        <ToggleText isLogin={isLogin} toggleLoginRegister={toggleLoginRegister} />
        <hr />
        <OAuthButtons/>
      </Modal.Body>
    </Modal>
  );
}
