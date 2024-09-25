import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { HealthStreakResponseDto } from '@/shared/models';
import '../PlayModal.module.css';

interface PlayModalProps {
  show: boolean;
  status: HealthStreakResponseDto | null;
  isLoading: boolean;
  handleClose: () => void;
  handleStreak: () => void;
}

export const PlayModal = ({ show, status, handleClose, handleStreak }: PlayModalProps) => {
  const isStarted = status?.isExist;
  const buttonText = isStarted ? 'остановить' : 'начать';

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered // Этот проп делает модальное окно центрированным
    >
      <Modal.Header closeButton>
        <Modal.Title>Действие</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          
        }} className='bodyModal'>
        <Button variant="primary" onClick={handleStreak} className='buttonModal'>
          {buttonText}
        </Button>
      </Modal.Body>
    </Modal>
  );
};
