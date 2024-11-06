'use client';
import React from 'react';
import { useUrlParams } from '@/shared/hooks';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { CategoryDtoResponse, TagDtoResponse } from '@/shared/models';
import { Tag } from './Tag';
import styles from '../Filters.module.css'; // Подключаем стили

interface FiltersProps {
  tags: TagDtoResponse[] | null;
  categories: CategoryDtoResponse[] | null;
}

const list_categories = (categories: {name: string, id: number}[]) => (
  categories.map((category, index) => (
    <option key={index} value={category.id}>
      {category.name}
    </option>
  ))
)

const list_tags = (tags: {name: string, id: number, color?: string}[], activeTags: any, addTag: any) => (
  tags.map((tag) => (
    /*<Button
      key={tag.id}
      variant={'outline-secondary'}
      className={`${styles.tag} ${activeTags.includes(tag.id.toString()) ? styles.activeTag : ''}`}
      onClick={() => addTag(tag.id.toString())}
    >
      {tag.name}
    </Button>*/
    <Tag 
      id={tag.id}
      name={tag.name}
      color={tag.color ?? '#fff'}
      isActive={activeTags.includes(tag.id.toString())}
      addTag={addTag}
    />
  ))
)

export const Filters = ({ tags, categories }: FiltersProps) => {
  const { paramValue: activeCategory, updateParamValue: setActiveCategory } = useUrlParams('category');
  const { paramValue: inputValue, updateParamValue: setName } = useUrlParams('name');
  const { paramValue: activeTags, toggleParamValue: addTag, removeParam: clearAll } = useUrlParams('tags');

  const categories_uf = [
    { name: 'Продукты', id: 1 },
    { name: 'Здоровье', id: 2 },
    { name: 'Спорт', id: 3 },
    { name: 'Одежда', id: 4 },
    { name: 'Кафе и рестораны', id: 5 },
    { name: 'Путешествия', id: 6 },
    { name: 'Книги', id: 7 },
    { name: 'Такси', id: 8 },
  ];

  const tags_uf = [
    { name: 'член', id: 1 },
    { name: 'пенис', id: 2 },
    { name: 'залупа', id: 3 },
    { name: 'попа', id: 4 },
    { name: 'какашка', id: 5 },
    { name: 'ствол', id: 6 },
    { name: 'легенда', id: 7 },
    { name: 'танк', id: 8 },
    { name: 'емае', id: 9 },
  ];

  return (
    <div className={styles.filterContainer}>
      {/* Верхняя строка с поиском и выпадающим списком */}

      <InputGroup className={styles.filterItem}>
        <Form.Control
          type="text"
          placeholder="Поиск"
          value={inputValue}
          onChange={(event) => setName(event.target.value)}
          className={styles.searchInput}
        />
      </InputGroup>

      <Form.Group className={styles.filterItem}>
        <Form.Select
          value={activeCategory?.at(0)}
          onChange={(event) => setActiveCategory(event.target.value)}
          className={styles.selectInput}
        >
          <option value="">Категория</option>
          {categories
            ? list_categories(categories)
            : list_categories(categories_uf)
          }
        </Form.Select>
      </Form.Group>


      {/* Контейнер для тегов */}
      <div className={styles.filterItem}>
        <div className={styles.tagContainer}>
          {tags
            ? list_tags(tags, activeTags, addTag)
            : list_tags(tags_uf, activeTags, addTag)
          }
          <Button variant="danger" className={styles.clear} onClick={clearAll}>
            ОЧИСТИТЬ
          </Button>
        </div>
      </div>
    </div>
  );
};
