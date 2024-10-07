import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { BiSolidBomb } from "react-icons/bi";
import '../CreateExerciseRecord.module.css';

export const CreateExerciseRecord = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  
  return (
    <>
    { !show && 
      <button onClick={handleOpen}>
        <BiSolidBomb />
      </button>
    }
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
