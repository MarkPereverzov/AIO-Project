import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import './Parameters.css';

export default function Parameters({ show, handleClose }) {
  const [pricePerPack, setPricePerPack] = useState('');
  const [cigarettesPerDay, setCigarettesPerDay] = useState('');
  const [additionalParameter, setAdditionalParameter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка отправки данных формы
    console.log('Цена за пачку:', pricePerPack);
    console.log('Количество сигарет в день:', cigarettesPerDay);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Параметры счета</Modal.Title>
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
            />
          </Form.Group>

          <Form.Group controlId="cigarettesPerDay">
            <Form.Label>Количество сигарет в день</Form.Label>
            <Form.Control
              type="number"
              placeholder="Введите количество сигарет"
              value={cigarettesPerDay}
              onChange={(e) => setCigarettesPerDay(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Сохранить параметры
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
