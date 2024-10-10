import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useSubscribe } from '../model';
import styles from '../Exercise.module.css';
import { HiAdjustments } from "react-icons/hi";
import { useModalButton } from '@/shared/hooks';

export const Exercise = () => {
  const { show, handleClose, handleOpen } = useModalButton();
  const { exerciseName, setExerciseName, handleSubmit } = useSubscribe(handleClose);

  return (
    <>
      <button className='footerButton' onClick={handleOpen}>
        <HiAdjustments />
      </button>
      {show && (
        <Modal show={show} onHide={handleClose} centered contentClassName={styles.modalContent}>
          <Modal.Header closeButton className={styles.modalHeader}>
            <Modal.Title className={styles.modalTitle}>Добавить упражнение</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="exerciseName">
                <Form.Label>Название упражнения</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите название упражнения"
                  value={exerciseName}
                  onChange={(e) => setExerciseName(e.target.value)}
                  className={styles.formControl}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className={`w-100 mt-3 ${styles.submitButton}`}>
                Добавить
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
