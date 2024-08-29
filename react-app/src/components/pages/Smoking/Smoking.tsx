import { Header, Information, MiniCalendar, AchivementsBar} from '../../widgets'
import { usePeriods } from './model/hooks';
import { FetchPeriods } from './model/types';
import "./Smoking.css"

export default function Smoking() {
    const [periods] = usePeriods(new Date().toDateString());
    
    const last_period = periods.at(periods.length-1);
    const days = last_period ? hmUsed(last_period) : 0;

    return (
      <>
        <Header title="Сколько я держусь без курения?"></Header>
        <div className='page-container'>
          <div className="smoke">
            <MiniCalendar shift={1} ></MiniCalendar>
          </div>

          <div>
            <Information title="Я не курю с" count={`${!last_period ? "" : new Date(last_period.start).toLocaleString('default',{day: 'numeric',month: 'long',year: "numeric", timeZone:'UTC'})}`}></Information>
            <Information title="Не курю уже" count={`${days} дней`}></Information>
            <Information title="Мой рекорд" count={`${days} дней без курения`}></Information>
          </div>

          <AchivementsBar></AchivementsBar>

          <button>
            ЗАКУРИЛ
          </button>
        </div>
      </>
    );
}

function hmUsed(period: FetchPeriods) {
  const start = new Date(period.start);
  const end = new Date(period.end);
  const diff = end.getTime() - start.getTime();

  return Math.floor(diff / (1000 * 60 * 60 * 24));
}