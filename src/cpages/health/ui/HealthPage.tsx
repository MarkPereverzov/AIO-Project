import { Header } from '@/widgets/header';
import { Block } from '@/widgets/block';
import { FaSmoking, FaWineBottle, FaCoffee , FaCandyCane } from 'react-icons/fa'; // Импортируем иконки
import { LiaSmokingBanSolid } from "react-icons/lia";
import { PiBeerBottle, PiCoffee  } from "react-icons/pi";
import { TbCandy } from "react-icons/tb";
import { BiInjection } from "react-icons/bi";
import { TbRating18Plus } from "react-icons/tb";

export const HealthPage = () => {
  
  const blocks = [
    { title: 'Курение', subtitle: 'Сильный кашель, хрипы и накопление мокроты мешают нормально жить, пора что-то менять.', Icon: LiaSmokingBanSolid, href: '/health/smoking' },
    { title: 'Алкоголь', subtitle: 'Алкоголь является одной из самых распространенных зависимостей в мире, время освободиться от него.', Icon: PiBeerBottle, href: '/dream' },
    { title: 'Кофе', subtitle: 'Сильный кашель, хрипы и накопление мокроты мешают нормально жить, пора что-то менять.', Icon: PiCoffee, href: '/dream' },
    { title: 'Сладкое', subtitle: 'Избыток глюкозы, высокий уровень инсулина и лишний вес — это точно не то, что тебе нужно.', Icon: TbCandy, href: '/dream' },
    { title: 'Наркотики', subtitle: 'Они приводят к потере контроля над собственной жизнью. Это не то, что пойдет тебе на пользу.', Icon: BiInjection, href: '/dream' },
    { title: 'Секретная зависимость', subtitle: 'Это иллюзия, которая искажает восприятие реальных отношений и сексуальности. Время избавиться от неё.', Icon: TbRating18Plus, href: '/dream' },
  ];

  return (
    <div>
      <Header pageName="Зависимости" />
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