import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { FaGoogle, FaApple } from 'react-icons/fa'; // Импортируем иконки Google и Apple
import './Autorization.css'; // Импортируем стили

function ModalRegister({ show, handleClose }) {
  const [isLogin, setIsLogin] = useState(true); // Состояние для переключения между входом и регистрацией

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin); // Переключаем форму
  };

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const handleShowRegisterModal = () => setShowRegisterModal(true);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);
  
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isLogin ? 'Вход' : 'Регистрация'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Форма для авторизации */}
          {isLogin && (
            <>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Введите email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите пароль" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Войти
              </Button>
            </>
          )}

          {/* Форма для регистрации */}
          {!isLogin && (
            <>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Введите email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите пароль" />
              </Form.Group>

              <Form.Group controlId="formBasicPasswordConfirm">
                <Form.Label>Подтверждение пароля</Form.Label>
                <Form.Control type="password" placeholder="Подтвердите пароль" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Зарегистрироваться
              </Button>
            </>
          )}
        </Form>
        <div className="toggle-text">
          <p onClick={toggleLoginRegister}>
            {isLogin ? (
              <>
                У меня нет аккаунта, хочу <strong>зарегистрироваться</strong>
              </>
            ) : (
              <>
                У меня уже есть аккаунт, хочу <strong>войти</strong>
              </>
            )}
          </p>
        </div>
        <hr />
        <div className="social-login-buttons">
          <Button variant="outline-secondary" className="w-100 mb-2">
            <FaGoogle className="me-2" /> Войти через Google
          </Button>
          <Button variant="outline-secondary" className="w-100">
            <FaApple className="me-2" /> Войти через Apple
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalRegister;
