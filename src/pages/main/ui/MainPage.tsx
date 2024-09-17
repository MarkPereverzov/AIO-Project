'use client';
import { Header } from '@/widgets/header';
import { Block } from '@/widgets/block';
import { FaSmoking, FaMoneyBillWave, FaBed, FaBriefcase, FaUtensils } from 'react-icons/fa'; // Импортируем иконки

export const MainPage = () => {
  const blocks = [
    { title: 'Какие у меня зависимости?', subtitle: 'Давай проверим твою выдержку и подсчитаем, сколько денег ты сумел сэкономить.', Icon: FaSmoking },
    { title: 'Что с моим сном?', subtitle: 'Сон играет важную роль в жизни. Пора выяснить, насколько крепок твой сон.', Icon: FaBed },
    { title: 'На что уходит мой бюджет?', subtitle: 'Считается некрасивым заглядывать в чужой кошелек, но с твоего разрешения мы это все-таки сделаем.', Icon: FaMoneyBillWave },
    { title: 'Чем же я питаюсь?', subtitle: 'Пришло время обратить внимание на питание, и мы поможем тебе в этом.', Icon: FaUtensils },
    { title: 'Мне пора на работу?', subtitle: 'Теперь тебе не нужно беспокоиться о том, что опоздаешь на работу — мы напомним тебе вовремя.', Icon: FaBriefcase },
  ];

  return (
    <div>
      <Header pageName="Главная" />
      <div className='pageContainer'>
        <div className="gridContainer">
          {blocks.map((block, index) => (
            <Block key={index} title={block.title} subtitle={block.subtitle} Icon={block.Icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
