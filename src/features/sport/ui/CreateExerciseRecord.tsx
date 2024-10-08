import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { BiSolidBomb } from "react-icons/bi";
import { useModalButton } from '@/shared/hooks';
import { useCreateExerciseRecord } from '../model';
import styles from '../CreateExerciseRecord.module.css';
import { PopupHint } from '@/shared';
import { usePopupHints } from '@/shared/hooks';

export const CreateExerciseRecord = () => {
  const { show, handleClose, handleOpen } = useModalButton();
  const { show: popupState, setShow: setPopup} = usePopupHints();
  const { exercise, weight, reps, setExercise, setWeight, setReps, handleSubmit } = useCreateExerciseRecord({setPopup});

  const successMessage = "Succesfully saved";
  const errorMessage = "Error occured";

  return (
    <>
    <button className='footerButton' onClick={handleOpen}>
      <BiSolidBomb />
    </button>
    { show && 
      <Modal
        show={show}
        onHide={handleClose}
        centered // Этот проп делает модальное окно центрированным
      >
        { popupState == 1 &&
          <PopupHint message={successMessage} variant='success' closeAfter={2000} setState={setPopup}/>
        }
        { popupState == 2 &&
          <PopupHint message={errorMessage} variant='danger' closeAfter={2000} setState={setPopup}/>
        }
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Действие</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{}} className='bodyModal'>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="pricePerPack">
              <Form.Label>Название упражнения</Form.Label>
              <Form.Control
                type="string"
                placeholder="Введите название упражнения"
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
                className={styles.formControl}
              />
              <Form.Label>Вес</Form.Label>
              <Form.Control
                type="number"
                placeholder="Введите вес"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className={styles.formControl}
              />
              <Form.Label>Кол-во повторений</Form.Label>
              <Form.Control
                type="number"
                placeholder="Введите кол-во повторения"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className={styles.formControl}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className={`w-100 mt-3 ${styles.submitButton}`}>
              Сохранить запись
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    }
    </>
  );
};
