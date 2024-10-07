import React from 'react';
import { Modal } from 'react-bootstrap';
import { BiSolidCustomize } from "react-icons/bi";
import { useModalButton } from '@/shared/hooks';
import '../CreateTag.module.css';


export const CreateTag = () => {
  const { show, handleClose, handleOpen } = useModalButton();

  return (
    <>
    <button className='footerButton' onClick={handleOpen}>
      <BiSolidCustomize/>
    </button>
      { show &&
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
      }
    </>
    
  );
};
