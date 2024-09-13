import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const slides = [
  { id: 1, title: '1 час', firstSubtitle: 'Нормализация кровяного давления и ритма работы сердца.', secondSubtitle: 'Появляется тенденция к улучшению циркуляции крови по организму.' },
  { id: 2, title: '2 часа', firstSubtitle: 'Начинается вывод никотина из организма, что может привести к первым легким симптомам абстиненции, таким как беспокойство, раздражительность или желание закурить.', secondSubtitle: 'Уменьшается содержание никотина в организме, начинается восстановление клеток.' },
  { id: 3, title: '4 часа', firstSubtitle: 'Нормализация температуры конечностей.', secondSubtitle: 'Ткани начинают получать больше кислорода, что способствует их восстановлению.' },
  { id: 4, title: '8 часов', firstSubtitle: 'Уровень угарного газа в крови снижается до нормального уровня, а уровень кислорода в крови увеличивается.', secondSubtitle: 'Улучшение качества дыхания становится более заметным, кровь обогащается кислородом.' },
  { id: 5, title: '12 часов', firstSubtitle: 'Уровень угарного газа в крови полностью нормализуется, что улучшает доставку кислорода к клеткам.', secondSubtitle: 'Уменьшается нагрузка на сердце, что способствует снижению риска заболеваний сердца.' },
  { id: 6, title: '1 день', firstSubtitle: 'Риск сердечного приступа начинает снижаться.', secondSubtitle: 'Организм начинает активно выводить остатки никотина и токсинов.' },
  { id: 7, title: '2 дня', firstSubtitle: 'Нервные окончания начинают восстанавливаться, и у человека может улучшиться обоняние и вкус.', secondSubtitle: 'Восстанавливается чувствительность рецепторов, что улучшает качество жизни.' },
  { id: 8, title: '3 дня', firstSubtitle: 'Легкие начинают очищаться, и дыхание становится легче.', secondSubtitle: 'Уменьшается усталость и одышка, повышается уровень энергии.' },
  { id: 9, title: '1 неделя', firstSubtitle: 'Риск абстиненции значительно снижается, а физические симптомы начинают уменьшаться.', secondSubtitle: 'Организм продолжает очищаться от остатков токсинов, уменьшается раздражительность.' },
  { id: 10, title: '2 неделя', firstSubtitle: 'Функция легких и циркуляция крови продолжают улучшаться.', secondSubtitle: 'Замечается рост физической выносливости, увеличивается способность к физическим нагрузкам.' },
  { id: 11, title: '1 месяц', firstSubtitle: 'Кожа становится более чистой и сияющей, уменьшается количество морщин.', secondSubtitle: 'Замедляется процесс старения кожи, и она становится более эластичной.' },
  { id: 12, title: '3 месяц', firstSubtitle: 'Легкие продолжают восстанавливаться, увеличивается их емкость.', secondSubtitle: 'Значительно улучшается дыхательная функция, снижается риск инфекций дыхательных путей.' },
  { id: 13, title: '6 месяц', firstSubtitle: 'Реснички в легких полностью восстанавливаются, улучшая способность очищать легкие и бороться с инфекциями.', secondSubtitle: 'Появляется значительное улучшение иммунной системы, уменьшается вероятность заболеваний.' },
  { id: 14, title: '1 год', firstSubtitle: 'Риск сердечно-сосудистых заболеваний снижается примерно на 50% по сравнению с курильщиками.', secondSubtitle: 'Улучшается общее состояние иммунной системы.' },
];

const RoundedCarousel = () => {
  return (
    <Carousel className="rounded-carousel" interval={null}>
      {slides.map(slide => (
        <Carousel.Item key={slide.id} className="carousel-item-custom">
          <div className="carousel-content">
            <h3 className="carousel-title">{slide.title}</h3>
            <hr className="divider" />
            <p>• {slide.firstSubtitle}</p>
            {slide.secondSubtitle && <p>•  {slide.secondSubtitle}</p>}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};


export default RoundedCarousel;
