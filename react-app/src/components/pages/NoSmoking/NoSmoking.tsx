import { NavLink } from 'react-router-dom';
import { Header } from '../../widgets'

export default function NoSmoking() {
    return (
      <>
        <Header title="Сколько я держусь без курения?"></Header>
        <div className='page-container'>
          <NavLink to='/'><h1>Вернуться назад</h1></NavLink>
        </div>
      </>
    );
}