import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface PlayModalProps {
  show: boolean;
  handleClose: () => void;
}

export const PlayModal = ({ show, handleClose }: PlayModalProps) => {
  const [buttonText, setButtonText] = useState('начать');

  const handleClick = () => {
    if (buttonText === 'начать') {
      setButtonText('остановить');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Действие</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Это второе модальное окно с другим содержимым.</p>
        <Button variant="primary" onClick={handleClick}>
          {buttonText}
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
