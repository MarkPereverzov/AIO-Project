'use client';
import { Header, Block } from '@/widgets/';

export const HealthPage = () => {
  const blocks = [
    { title: 'Курение', subtitle: 'Сильный кашель, хрипы и накопление мокроты мешают нормально жить, пора что-то менять.' },
    { title: 'Алкоголь', subtitle: 'Алкоголь является одной из самых распространенных зависимостей в мире, настало время освободиться от него.' },
    { title: 'Кофе', subtitle: 'Сильный кашель, хрипы и накопление мокроты мешают нормально жить, пора что-то менять.' },
    { title: 'Сладкое', subtitle: 'Избыток глюкозы, высокий уровень инсулина и лишний вес — это точно не то, что тебе нужно.' },
    { title: 'Наркотики', subtitle: 'Они риводят к потере контроля над собственной жизнью. Это определенно не то, что пойдет тебе на пользу.' },
    { title: 'Порно', subtitle: 'Это иллюзия, которая искажает восприятие реальных отношений и сексуальности. Самое время избавиться от неё.' },
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