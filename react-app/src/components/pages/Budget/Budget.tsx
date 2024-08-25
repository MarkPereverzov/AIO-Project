import { NavLink } from 'react-router-dom';
import {Header, SideMenu} from '../../widgets'

export default function Budget() {
    return (
      <>
        <Header title="На что уходит мой бюджет?"></Header>
        <SideMenu></SideMenu>
        <div className='page-container'>
            <NavLink to='/'><h1>Вернуться назад</h1></NavLink>
        </div>
      </>
    );
}