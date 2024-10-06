import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { HealthStreakResponseDto } from '@/shared/models';
import '../CreateTag.module.css';

interface PlayModalProps {
  show: boolean;
  handleClose: () => void;
}

export const CreateTag = ({ show, handleClose }: PlayModalProps) => {
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
        {/*<Button variant="primary" onClick={handleStreak} className='buttonModal'>
          {buttonText}
        </Button>*/}
      </Modal.Body>
    </Modal>
  );
};
