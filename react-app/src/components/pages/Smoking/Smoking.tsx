import { Header, Information, MiniCalendar, AchivementsBar} from '../../widgets'
import { usePeriods, useRecord } from './model/hooks';
import "./Smoking.css"

export default function Smoking() {
    const [periods] = usePeriods(new Date().toDateString());
    const [records] = useRecord();

    const last_period = records.lastLatest;
    const days = last_period ? hmUsed(new Date(last_period), new Date()) : 0;

    return (
      <>
        <div className='page-container'>
        <Header title="Сколько я держусь без курения?"></Header>

          <div className='CardBoard'>
            <div>
              <MiniCalendar shift={1} ></MiniCalendar>
            </div>

            <div>
              <Information title="Я не курю с" count={`${new Date(last_period).toLocaleString('default',{day: 'numeric',month: 'long',year: "numeric", timeZone:'UTC'})}`}></Information>
              <Information title="Не курю уже" count={`${days} дней`}></Information>
              <Information title="Мой рекорд" count={`${records.record} дней без курения`}></Information>
            </div>

            <div>
              <AchivementsBar></AchivementsBar>
            </div>
          </div>
        </div>
      </>
    );
}

function hmUsed(start: Date, end: Date) {
  const diff = end.getTime() - start.getTime();

  return Math.floor(diff / (1000 * 60 * 60 * 24));
}