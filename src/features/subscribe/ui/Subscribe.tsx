import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useSubscribe } from '../model';
import styles from '../Subscribe.module.css';

interface SubscribeProps {
  show: boolean,
  handleClose: () => void,
}

export const Subscribe = ({ show, handleClose }: SubscribeProps) => {
  const { pricePerPack, cigarettesPerDay, setPricePerPack,  setCigarettesPerDay, handleSubmit } = useSubscribe(handleClose);

  return (
  <Modal show={show} onHide={handleClose} centered contentClassName={styles.modalContent}>
    <Modal.Header closeButton className={styles.modalHeader}>
      <Modal.Title className={styles.modalTitle} >Параметры счета</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="pricePerPack">
          <Form.Label>Цена за пачку</Form.Label>
          <Form.Control
            type="number"
            placeholder="Введите цену за пачку"
            value={pricePerPack}
            onChange={(e) => setPricePerPack(e.target.value)}
            className={styles.formControl}
          />
        </Form.Group>

        <Form.Group controlId="cigarettesPerDay">
          <Form.Label>Количество сигарет в день</Form.Label>
          <Form.Control
            type="number"
            placeholder="Введите количество сигарет"
            value={cigarettesPerDay}
            onChange={(e) => setCigarettesPerDay(e.target.value)}
            className={styles.formControl}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className={`w-100 mt-3 ${styles.submitButton}`}>
          Сохранить параметры
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
  );
}
