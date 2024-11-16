'use client';
import { Header } from '@/widgets/header';
import { Block } from '@/widgets/block';
import { LiaSmokingSolid, LiaWalletSolid, LiaHamburgerSolid, LiaBriefcaseSolid, LiaDumbbellSolid, LiaBedSolid   } from "react-icons/lia";


export const MainPage = () => {
  const blocks = [
    { title: 'Какие у меня зависимости?', subtitle: 'Давай проверим твою выдержку и подсчитаем, сколько денег ты сумел сэкономить.', Icon: LiaSmokingSolid, href: '/health' },
    { title: 'Что с моим сном?', subtitle: 'Сон играет важную роль в жизни. Пора выяснить, насколько крепок твой сон.', Icon: LiaBedSolid, href: '/dream' },
    { title: 'На что уходит мой бюджет?', subtitle: 'Считается некрасивым заглядывать в чужой кошелек, но с твоего разрешения мы это все-таки сделаем.', Icon: LiaWalletSolid , href: '/budget' },
    { title: 'Чем же я питаюсь?', subtitle: 'Пришло время обратить внимание на питание, и мы поможем тебе в этом.', Icon: LiaHamburgerSolid, href: '/nutrion' },
    { title: 'Мне пора на работу?', subtitle: 'Теперь тебе не нужно беспокоиться о том, что опоздаешь на работу — мы напомним тебе вовремя.', Icon: LiaBriefcaseSolid, href: '/job' },
    { title: 'Что мне тренировать?', subtitle: 'Веди свою программу тренировок и больше не забывай про неё!', Icon: LiaDumbbellSolid, href: '/sport' },
  ];

  return (
    <div>
      <Header pageName="Главная" />
      <div className='pageContainer'>
        <div className="gridContainer">
          {blocks.map((block, index) => (
            <Block key={index} title={block.title} subtitle={block.subtitle} Icon={block.Icon} href={block.href} />
          ))}
        </div>
      </div>
    </div>
  );
}
