import { NavLink } from 'react-router-dom';
import {Header} from '../../widgets'

export default function Job() {
    return (
      <>
        <Header title="Мне пора на работу?"></Header>
        <div className='page-container'>
          <NavLink to='/'><h1>Вернуться назад</h1></NavLink>
        </div>
      </>
    );
  }