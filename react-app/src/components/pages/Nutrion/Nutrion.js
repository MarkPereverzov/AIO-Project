import { NavLink } from 'react-router-dom';
import {Header}  from '../../widgets'

export default function Nutrion() {
    return (
      <>
        <Header title="Чем же я питаюсь?"></Header>
        <div className='page-container'>
          <NavLink to='/'><h1>Вернуться назад</h1></NavLink>
        </div>
      </>
    );
}