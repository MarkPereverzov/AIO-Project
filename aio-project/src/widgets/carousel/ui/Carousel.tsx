import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../Carousel.module.css';

const slides = [
  { id: 1, title: 'Заголовок 1', content: 'Это описание для слайда 1' },
  { id: 2, title: 'Заголовок 2', content: 'Это описание для слайда 2' },
  { id: 3, title: 'Заголовок 3', content: 'Это описание для слайда 3' }
];

export const RoundedCarousel = () => {
  return (
    <Carousel className={styles.roundedCarousel} interval={null}>
      {slides.map(slide => (
        <Carousel.Item key={slide.id} className={styles.carouselItemCustom}>
          <div className={styles.carouselContent}>
            <h3 className={styles.carouselTitle}>{slide.title}</h3>
            <hr className={styles.divider} />
            <p>{slide.content}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
