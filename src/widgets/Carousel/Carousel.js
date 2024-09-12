import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const slides = [
  { id: 1, title: 'Заголовок 1', content: 'Это описание для слайда 1' },
  { id: 2, title: 'Заголовок 2', content: 'Это описание для слайда 2' },
  { id: 3, title: 'Заголовок 3', content: 'Это описание для слайда 3' }
];

const RoundedCarousel = () => {
  return (
    <Carousel className="rounded-carousel" interval={null}>
      {slides.map(slide => (
        <Carousel.Item key={slide.id} className="carousel-item-custom">
          <div className="carousel-content">
            <h3 className="carousel-title">{slide.title}</h3>
            <hr className="divider" />
            <p>{slide.content}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default RoundedCarousel;
