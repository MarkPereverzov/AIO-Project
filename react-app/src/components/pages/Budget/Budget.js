import { NavLink } from 'react-router-dom';
import {Header} from '../../widgets'

export default function Budget() {
    return (
      <>
        <Header title="На что уходит мой бюджет?"></Header>
        <div className='page-container'>
            <NavLink to='/'>Вернуться назад</NavLink>
        </div>
      </>
    );
}