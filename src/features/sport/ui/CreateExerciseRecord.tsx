import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { BiSolidBomb } from "react-icons/bi";
import { useModalButton } from '@/shared/hooks';
import { useCreateExerciseRecord } from '../model';
import styles from '../CreateExerciseRecord.module.css';

export const CreateExerciseRecord = () => {
  const { show, handleClose, handleOpen } = useModalButton();
  const { exercise, weight, reps, setExercise, setWeight, setReps, handleSubmit } = useCreateExerciseRecord();
  
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
