import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { BiSolidBomb } from "react-icons/bi";
import '../CreateExerciseRecord.module.css';
import { useModalButton } from '@/shared/hooks';

export const CreateExerciseRecord = () => {
  const { show, handleClose, handleOpen } = useModalButton();
  
  return (
    <>
    <button onClick={handleOpen}>
      <BiSolidBomb />
    </button>
    { show && 
      <Modal
        show={show}
        onHide={handleClose}
        centered // Этот проп делает модальное окно центрированным
      >
        <Modal.Header closeButton onClick={handleClose}>
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
    }
    </>
  );
};
