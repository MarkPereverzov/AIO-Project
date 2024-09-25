'use client';
import styles from '../Filters.module.css'; 
import React, { useState } from 'react';
import { useUrlParams } from '@/shared/hooks';

export const Filters = () => {
  const { paramValue: activeCategory, updateParamValue: setActiveCategory } = useUrlParams('category');
  const { paramValue: activeTags, toggleParamValue: addTag } = useUrlParams('tag');

  const categories = [
    'Продукты',
    'Здоровье',
    'Спорт',
    'Одежда',
    'Кафе и рестораны',
    'Путешествия',
    'Книги',
    'Такси',
  ];

  const tags = ['член', 'пенис', 'залупа', 'попа', 'какашка', 'ствол', 'легенда', 'танк', 'емае'];

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterItem}>
        <input type="text" placeholder="Поиск" className={styles.searchInput} />
      </div>


      <div className={styles.filterItem}>
        <div>
          <select value={activeCategory} onChange={(event) => setActiveCategory(event.target.value)} className={styles.selectInput}>
            <option value="">Категория</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {activeCategory && <p>Вы выбрали: {activeCategory}</p>}
        </div>
      </div>

      <div className={styles.filterItem}>
        <div className={styles.tagContainer}>
          {tags.map((tag) => (
            <span key={tag} className={`${styles.tag} ${activeTags.includes(tag) ? styles.activeTag : ''}`} onClick={() => addTag(tag)}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
