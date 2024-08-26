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
            <Information title="Когда я бросил курить?" count="Не курю с  00:00:0000 00:00"></Information>
            <Information title="Сигарет не выкурено" count="0 шт"></Information>
            <Information title="Не употреблено" count="0 смол"></Information>
          </div>

          <div>
            
          </div>
        </div>
      </>
    );
}