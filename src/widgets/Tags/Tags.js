import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import './Tags.css'; // Импортируем стили

export default function TagsModal({ show, handleClose, handleAddTag }) {
  const [tagName, setTagName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tagName.trim()) {
      handleAddTag(tagName.trim()); // Передаем тег родительскому компоненту
      setTagName(''); // Очищаем поле ввода
      handleClose(); // Закрываем модальное окно
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Добавить тег</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="tagName">
            <Form.Label>Название тега</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите название тега"
              value={tagName}
              onChange={(e) => setTagName(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Добавить тег
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}