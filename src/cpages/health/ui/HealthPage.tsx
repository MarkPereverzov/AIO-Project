import { Header } from '@/widgets/header';
import { Block } from '@/widgets/block';
import { FaSmoking, FaWineBottle, FaCoffee , FaCandyCane } from 'react-icons/fa'; // Импортируем иконки
import { TbRating18Plus } from "react-icons/tb";
export const HealthPage = () => {
  
  const blocks = [
    { title: 'Курение', subtitle: 'Сильный кашель, хрипы и накопление мокроты мешают нормально жить, пора что-то менять.', Icon: FaSmoking, href: '/health/smoking' },
    { title: 'Алкоголь', subtitle: 'Алкоголь является одной из самых распространенных зависимостей в мире, настало время освободиться от него.', Icon: FaWineBottle, href: '/dream' },
    { title: 'Кофе', subtitle: 'Сильный кашель, хрипы и накопление мокроты мешают нормально жить, пора что-то менять.', Icon: FaCoffee, href: '/dream' },
    { title: 'Сладкое', subtitle: 'Избыток глюкозы, высокий уровень инсулина и лишний вес — это точно не то, что тебе нужно.', Icon: FaCandyCane, href: '/dream' },
    { title: 'Наркотики', subtitle: 'Они риводят к потере контроля над собственной жизнью. Это определенно не то, что пойдет тебе на пользу.', Icon: FaCoffee, href: '/dream' },
    { title: 'Порно', subtitle: 'Это иллюзия, которая искажает восприятие реальных отношений и сексуальности. Самое время избавиться от неё.', Icon: TbRating18Plus, href: '/dream' },
  ];

  return (
    <div>
      <Header pageName="Зависимости" />
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