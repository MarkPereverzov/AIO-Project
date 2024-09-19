import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { HealthStreakResponseDto } from '@/shared/api';

interface PlayModalProps {
  show: boolean;
  status: HealthStreakResponseDto | null;
  isLoading: boolean;
  handleClose: () => void;
  handleStreak: () => void;
}

//Пометка для Марка: Мы так не делаем, проверять кнопку на её текст это полный бред
export const PlayModal = ({ show, status, isLoading, handleClose, handleStreak }: PlayModalProps) => {
  const isStarted = status?.isExist;
  const buttonText = isStarted ? 'остановить' : 'начать';

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Действие</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Это второе модальное окно с другим содержимым.</p>
        <Button variant="primary" onClick={handleStreak} disabled={isLoading}>
          {isLoading ? 'Loading' : buttonText }
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
