import {Header, Block, Footer} from '../../widgets/index';
import './Default.css';  

export default function Default() {
    const blocks = [
      { title: 'Какие у меня зависимости?', subtitle: 'Давай проверим твою выдержку и подсчитаем, сколько денег ты сумел сэкономить.' },
      { title: 'Что с моим сном?', subtitle: 'Сон играет важную роль в жизни. Пора выяснить, насколько крепок твой сон.' },
      { title: 'На что уходит мой бюджет?', subtitle: 'Считается некрасивым заглядывать в чужой кошелек, но с твоего разрешения мы это все-таки сделаем.' },
      { title: 'Чем же я питаюсь?', subtitle: 'Пришло время обратить внимание на питание, и мы поможем тебе в этом.' },
      { title: 'Мне пора на работу?', subtitle: 'Теперь тебе не нужно беспокоиться о том, что опоздаешь на работу — мы напомним тебе вовремя.' },
    ];
  
    return (
      <div>
        <Header namePage="Главная"/>
        <div className="grid-container">
          {blocks.map((block, index) => (
            <Block key={index} title={block.title} subtitle={block.subtitle} />
          ))}
        </div>
        <Footer/>
      </div>
    );
  }