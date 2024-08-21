import { NavLink } from 'react-router-dom';
import {Header}  from '../../widgets'

export default function Dream() {
    return (
      <>
        <Header title="Что с моим сном?"></Header>
        <div className='page-container'>
            <NavLink to='/'><h1>Вернуться назад</h1></NavLink>
        </div>
      </>
    );
}