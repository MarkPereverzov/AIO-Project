import { NavLink } from 'react-router-dom';
import {Header, SideMenu}  from '../../widgets'

export default function Nutrion() {
    return (
      <>
        <Header title="Чем же я питаюсь?"></Header>
        <SideMenu></SideMenu>
        <div className='page-container'>
          <NavLink to='/'><h1>Вернуться назад</h1></NavLink>
        </div>
      </>
    );
}