import { NavLink } from 'react-router-dom';
import { Header } from '../../widgets'

export default function NoSmoking() {
    return (
      <>
        <Header title="Сколько я держусь без курения?"></Header>
        <div className='page-container'>
            <NavLink to='/'>Вернуться назад</NavLink>
        </div>
      </>
    );
}