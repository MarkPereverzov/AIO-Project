import { NavLink } from 'react-router-dom';
import { Header, Information, MiniCalendar } from '../../widgets'

export default function Smoking() {
    return (
      <>
        <Header title="Сколько я держусь без курения?"></Header>
        <div className='page-container'>
          <div className="smoke">
            <MiniCalendar shift={1}></MiniCalendar>
          </div>

          <div>
            <Information title="Я не курю с" count="00:00:0000 00:00"></Information>
            <Information title="Не курю уже" count="0 дней"></Information>
            <Information title="Мой рекорд" count="0 дней без курения"></Information>
          </div>

          <div>
            
          </div>
        </div>
      </>
    );
}