import { NavLink } from 'react-router-dom';
import {Header} from '../../widgets'
import { useToken } from '../../context';

export default function Budget() {
    const { accessToken } = useToken();

    return (
      <>
        <Header title="На что уходит мой бюджет?"></Header>
        <div className='page-container'>
            <h1 style={{zIndex:20}}>{accessToken}</h1>
            <NavLink to='/'><h1>Вернуться назад</h1></NavLink>
        </div>
      </>
    );
}