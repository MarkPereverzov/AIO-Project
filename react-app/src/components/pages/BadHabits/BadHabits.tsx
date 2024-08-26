import { Header, MiniCalendar, CardBoardBadHabits, SideMenu} from '../../widgets'
import "./BadHabits.css"

export default function BadHabits() {
  return (
    <div className="main-container">
      <Header title=" Какие у меня зависимости?"></Header>
      <CardBoardBadHabits></CardBoardBadHabits>
    </div>
  );
}