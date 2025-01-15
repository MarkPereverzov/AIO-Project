'use client';
import React from 'react';
import { useUrlParams } from '@/shared/hooks';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { CategoryDtoResponse, ProductDtoResponse, TagDtoResponse } from '@/shared/models';
import { Tag } from './Tag';
import { Select } from '@/shared/ui/DefaultInput/Select'; // Переиспользуемый селектор
import styles from '../Filters.module.css'; // Подключаем стили

interface FiltersProps {
  tags: TagDtoResponse[] | null;
  categories: CategoryDtoResponse[] | null;
}

export const Filters = ({ tags, categories }: FiltersProps) => {
  const { paramValue: activeCategory, updateParamValue: setActiveCategory } = useUrlParams('category');
  const { paramValue: inputValue, updateParamValue: setName } = useUrlParams('name');
  const { paramValue: activeTags, toggleParamValue: addTag, removeParam: clearAll } = useUrlParams('tags');

  const list_tags =
    tags?.map((tag, index) => (
      <Tag 
        key={index}
        id={tag.id}
        name={tag.name}
        color={tag.color ?? '#fff'}
        isActive={activeTags.includes(tag.id.toString())}
        addTag={addTag}
      />
    ));

  const list_categories = 
    categories?.map((category, index) => (
      { value: category.id, label: category.name }
    ));

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

      <Select
        value={activeCategory?.at(0)}
        onChange={(event) => setActiveCategory(event.target.value)}
        options={list_categories}
      >
      </Select>

      <div className="separator-line"></div>

      {/* Контейнер для тегов */}
      <div className={styles.filterItem}>
        <div className={styles.tagContainer}>
          { list_tags }
          <Button variant="danger" className={styles.clear} onClick={clearAll}>
            Сбросить фильтры
          </Button>
        </div>
      </div>
    </div>
  );
};
