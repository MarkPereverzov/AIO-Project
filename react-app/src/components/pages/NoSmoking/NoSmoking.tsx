import { NavLink } from 'react-router-dom';
import { Header, MiniCalendar } from '../../widgets'

export default function NoSmoking() {
    return (
      <>
        <Header title="Сколько я держусь без курения?"></Header>
        <div className='page-container'>
          <div className="smoke">
            <MiniCalendar shift={1}></MiniCalendar>
            <MiniCalendar shift={2}></MiniCalendar>
            <MiniCalendar shift={3}></MiniCalendar>
          </div>
          <NavLink to='/'><h1>Вернуться назад</h1></NavLink>
        </div>
      </>
    );
}