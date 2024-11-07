import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { BiPlus  } from "react-icons/bi";
import { useModalButton } from '@/shared/hooks';
import { CategoryDtoResponse, TagDtoResponse } from '@/shared/models';
import { createProduct, createTag } from '@/entities/budget';
import styles from '../CreateProduct.module.css';
import { useState } from "react";


interface CreateProductProps {
    tags: TagDtoResponse[] | null,
    categories: CategoryDtoResponse[] | null
}

export const CreateProduct = ({tags, categories}: CreateProductProps) => {
  const { show, handleClose, handleOpen } = useModalButton();
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [tagsId, setTagsId] = useState<number[]>([]);

  const handleSubmit = async (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (productName.trim()) {
      let price_i = parseInt(price);
      //TODO
      console.log(productName);
      console.log(tagsId);
      console.log(price_i);

      await createProduct({
        name: productName,
        price: price_i,
        date: new Date().toDateString(),
        tags: tagsId,
        userId: ''
      });

      setProductName(''); // Очищаем поле ввода
      handleClose(); // Закрываем модальное окно
    }
  };

  const selectTag = (id: number) => {
    if (tagsId.includes(id)) {
        setTagsId(tagsId.filter(x => x !== id));
    } else {
        const newTagsId = tagsId.slice();
        newTagsId.push(id);
        setTagsId(newTagsId);
    }
    console.log(tagsId);
  }

  const list_tags= (tags: {name: string, id: number}[] | null) => (
    tags?.map((tag, index) => (
        <Form.Check
            type={'checkbox'}
            label={tag.name}
            id={tag.id.toString()}
            onClick={() => selectTag(tag.id)}
        />
    ))
  )

  return (
    <>
    <button className='footerButton' onClick={handleOpen}>
      <BiPlus />
    </button>
      { show &&
        <Modal show={show} onHide={handleClose} centered contentClassName={styles.modalContent}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить транзакции</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="tagName">
              <Form.Label>Название транзакции</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите название транзакции"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className={styles.formControl}
              />
              <Form.Label>Цена транзакции</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите цену транзакции"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={styles.formControl}
              />
              <Form.Label>Теги транзакции</Form.Label>
              <div key={`checkbox`} className="mb-3">
                {list_tags(tags)}
              </div>
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
