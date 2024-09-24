import styles from '../Filters.module.css'; 
import React, { useState } from 'react';

export const Filters = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [activeTags, setActiveTags] = useState<string[]>([]); // Для отслеживания активных тегов

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

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleTagClick = (tag: string) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag)); // Убираем активный тег
    } else {
      setActiveTags([...activeTags, tag]); // Добавляем активный тег
    }
  };


return (
  <div className={styles.filterContainer}>
    <div className={styles.filterItem}>
      <input type="text" placeholder="Поиск" className={styles.searchInput} />
    </div>


    <div className={styles.filterItem}>
      <div>
        <select value={selectedCategory} onChange={handleCategoryChange} className={styles.selectInput}>
          <option value="">Категория</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        {selectedCategory && <p>Вы выбрали: {selectedCategory}</p>}
      </div>
    </div>

    <div className={styles.filterItem}>
      <div className={styles.tagContainer}>
        {tags.map((tag) => (
          <span key={tag} className={`${styles.tag} ${activeTags.includes(tag) ? styles.activeTag : ''}`} onClick={() => handleTagClick(tag)}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
  );
};
