import { NavLink } from 'react-router-dom';
import {Header} from '../../widgets'

export default function Job() {
    return (
      <>
        <Header title="Мне пора на работу?"></Header>
        <div className='page-container'>
          <NavLink to='/'>Вернуться назад</NavLink>
        </div>
      </>
    );
  }