import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { BiSolidCustomize } from "react-icons/bi";
import { useModalButton } from '@/shared/hooks';
import styles from '../CreateTag.module.css';
import { CategoryDtoResponse } from '@/shared/models';
import { createTag } from '@/entities/budget';
import { useState } from "react";

export const CreateTag = ({categories}: {categories: CategoryDtoResponse[] | null}) => {
  const { show, handleClose, handleOpen } = useModalButton();
  const [tagName, setTagName] = useState('');
  const [tagColor, setTagColor] = useState('');
  const [tagCategory, setTagCategory] = useState('');

  const handleSubmit = async (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tagName.trim()) {
      let categoryId = parseInt(tagCategory);
      //TODO
      console.log(tagName);
      console.log(tagColor);
      console.log(tagCategory);

      await createTag({
        name: tagName,
        color: tagColor,
        categoryId,
        userId: ''
      });

      setTagName(''); // Очищаем поле ввода
      handleClose(); // Закрываем модальное окно
    }
  };

  const list_categories = (categories: {name: string, id: number}[] | null) => (
    categories?.map((category, index) => (
      <option key={index} value={category.id}>
        {category.name}
      </option>
    ))
  )

  return (
    <>
    <button className='footerButton' onClick={handleOpen}>
      <BiSolidCustomize/>
    </button>
      { show &&
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
              <Form.Label>Цвет тега</Form.Label>
              <Form.Control
                type="color"
                value={tagColor}
                onChange={(e) => setTagColor(e.target.value)}
                className={styles.formControl}
              />
              <Form.Label>Категория тега</Form.Label>
              <Form.Select 
                aria-label="Default select example"
                onChange={(e) => setTagCategory(e.target.value)}
                value={tagCategory}
              >
                <option>Выберете категорию</option>
                {list_categories(categories)}
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" className={`w-100 mt-3 ${styles.submitButton}`}>
              Добавить тег
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      }
    </>
    
  );
};
