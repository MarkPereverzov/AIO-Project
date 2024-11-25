'use client';
import { Header } from '@/widgets/header';
import { Block } from '@/widgets/block';

export const MainPage = () => {
  const blocks = [
    { title: 'Какие у меня зависимости?', subtitle: 'Давай проверим твою выдержку и подсчитаем, сколько денег ты сумел сэкономить.', href: '/health' },
    { title: 'Что с моим сном?', subtitle: 'Сон играет важную роль в жизни. Пора выяснить, насколько крепок твой сон.', href: '/dream' },
    { title: 'На что уходит мой бюджет?', subtitle: 'Считается некрасивым заглядывать в чужой кошелек, но с твоего разрешения мы это все-таки сделаем.', href: '/budget' },
    { title: 'Чем же я питаюсь?', subtitle: 'Пришло время обратить внимание на питание, и мы поможем тебе в этом.', href: '/nutrion' },
    { title: 'Мне пора на работу?', subtitle: 'Теперь тебе не нужно беспокоиться о том, что опоздаешь на работу — мы напомним тебе вовремя.', href: '/job' },
    { title: 'Что мне тренировать?', subtitle: 'Веди свою программу тренировок и больше не забывай про неё!', href: '/sport' },
  ];

  return (
    <div>
      <Header pageName="Главная" />
      <div className='pageContainer'>
        <div className="gridContainer">
          {blocks.map((block, index) => (
            <Block key={index} title={block.title} subtitle={block.subtitle} href={block.href} />
          ))}
        </div>
      </div>
    </div>
  );
}
