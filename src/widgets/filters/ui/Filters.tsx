'use client';
import styles from '../Filters.module.css'; 
import React from 'react';
import { useUrlParams } from '@/shared/hooks';
import { CategoryDtoResponse, TagDtoResponse } from '@/shared/models';

interface FiltersProps {
  tags: TagDtoResponse[],
  categories: CategoryDtoResponse[]
}

export const Filters = ({tags, categories}: FiltersProps) => {
  const { paramValue: activeCategory, updateParamValue: setActiveCategory } = useUrlParams('category');
  const { paramValue: activeTags, toggleParamValue: addTag, removeParam: clearAll } = useUrlParams('tags');

  const categories_uf = [
    { name: 'Продукты', id: 1 },
    { name: 'Здоровье', id: 2 },
    { name: 'Спорт', id: 3 },
    { name: 'Одежда', id: 4 },
    { name: 'Кафе и рестораны', id: 5 },
    { name: 'Путешествия', id: 6 },
    { name: 'Книги', id: 7 },
    { name: 'Такси', id: 8 }
  ]
  

  const tags_uf = [
    { name: 'член', id: 1 },
    { name: 'пенис', id: 2 },
    { name: 'залупа', id: 3 },
    { name: 'попа', id: 4 },
    { name: 'какашка', id: 5 },
    { name: 'ствол', id: 6 },
    { name: 'легенда', id: 7 },
    { name: 'танк', id: 8 },
    { name: 'емае', id: 9 }
  ];

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterItem}>
        <input type="text" placeholder="Поиск" className={styles.searchInput} />
      </div>


      <div className={styles.filterItem}>
        <div>
          <select value={activeCategory?.at(0)} onChange={(event) => setActiveCategory(event.target.value)} className={styles.selectInput}>
            <option value="">Категория</option>
            { categories
              ? categories?.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              )) 
              : categories_uf.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              )) 
            }
          </select>
          {activeCategory && <p>Вы выбрали: {activeCategory}</p>}
        </div>
      </div>

      <div className={styles.filterItem}>
        <div className={styles.tagContainer}>
          { tags
            ? tags?.map((tag) => (
              <span key={tag.id} className={`${styles.tag} ${activeTags.includes(tag.name) ? styles.activeTag : ''}`} onClick={() => addTag(tag.id.toString())}>
                {tag.name}
              </span>
            ))
            : tags_uf.map((tag) => (
              <span key={tag.id} className={`${styles.tag} ${activeTags.includes(tag.name) ? styles.activeTag : ''}`} onClick={() => addTag(tag.id.toString())}>
                {tag.name}
              </span>
            ))
          }
          {/*TEMPORARY CHANGE PLS*/}
          <span key={999} className={`${styles.tag}`} onClick={clearAll}>
              {"CLEAR"}
          </span>
        </div>
      </div>
    </div>
  );
};
