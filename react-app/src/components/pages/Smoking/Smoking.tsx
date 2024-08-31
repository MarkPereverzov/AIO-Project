import { Header, Information, MiniCalendar, AchivementsBar} from '../../widgets'
import { usePeriods, useRecord } from './model/hooks';
import { FetchPeriods } from './model/types';
import "./Smoking.css"

export default function Smoking() {
    const [periods] = usePeriods(new Date().toDateString());
    const [records] = useRecord();

    const last_period = records.lastLatest;
    const days = last_period ? hmUsed(new Date(last_period), new Date()) : 0;

    return (
      <>
        <Header title="Сколько я держусь без курения?"></Header>
        <div className='page-container'>
          <div className="smoke">
            <MiniCalendar shift={1} ></MiniCalendar>
          </div>

          <div>
            <Information title="Я не курю с" count={`${new Date(last_period).toLocaleString('default',{day: 'numeric',month: 'long',year: "numeric", timeZone:'UTC'})}`}></Information>
            <Information title="Не курю уже" count={`${days} дней`}></Information>
            <Information title="Мой рекорд" count={`${records.record} дней без курения`}></Information>
          </div>

          <AchivementsBar></AchivementsBar>

          <button>
            ЗАКУРИЛ
          </button>
        </div>
      </>
    );
}

function hmUsed(start: Date, end: Date) {
  const diff = end.getTime() - start.getTime();

  return Math.floor(diff / (1000 * 60 * 60 * 24));
}