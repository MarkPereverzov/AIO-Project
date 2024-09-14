import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useTags } from '../model';
import styles from '../Tags.module.css';

interface TagsProps {
  show: boolean,
  handleClose: () => void;
  handleAddTag: (arg0: string) => void;
};

export const Tags = ({ show, handleClose, handleAddTag }: TagsProps) => {
  const { tagName, handleSubmit, setTagName } = useTags({handleAddTag, handleClose});
  return (
    <Modal show={show} onHide={handleClose} centered contentClassName={styles.modalContent}>
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
              className={styles.formControl}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className={`w-100 mt-3 ${styles.submitButton}`}>
            Добавить тег
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}