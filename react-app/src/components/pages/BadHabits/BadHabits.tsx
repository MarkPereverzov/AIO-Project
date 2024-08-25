import { NavLink } from 'react-router-dom';
import { Header, MiniCalendar, CardBoardBadHabits, SideMenu} from '../../widgets'
import "./BadHabits.css"

export default function NoSmoking() {
    return (
      <div className="main-container">
        <Header title=" Какие у меня зависимости?"></Header>
        <CardBoardBadHabits></CardBoardBadHabits>
        <SideMenu></SideMenu>
      </div>
    );
}