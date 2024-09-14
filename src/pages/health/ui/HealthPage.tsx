'use client';
import { Header, Block } from '@/widgets/';

export const HealthPage = () => {
  const blocks = [
    { title: 'Курение', subtitle: 'Сильный кашель, хрипы и накопление мокроты мешают нормально жить, пора что-то менять.' },
    { title: 'Алкоголь', subtitle: 'Алкоголь является одной из самых распространенных зависимостей в мире, настало время освободиться от него.' },
    { title: 'Кофе', subtitle: 'Сильный кашель, хрипы и накопление мокроты мешают нормально жить, пора что-то менять.' },
    { title: 'Сладкое', subtitle: 'Избыток глюкозы, высокий уровень инсулина и лишний вес — это точно не то, что тебе нужно.' },
    { title: 'Наркотики', subtitle: '' },
    { title: 'Порно', subtitle: '' },
  ];

  return (
    <div>
      <Header pageName="Зависимости" />
      <div className='pageContainer'>
        <div className="gridContainer">
          {blocks.map((block, index) => (
            <Block key={index} title={block.title} subtitle={block.subtitle} />
          ))}
        </div>
      </div>
    </div>
  );
}