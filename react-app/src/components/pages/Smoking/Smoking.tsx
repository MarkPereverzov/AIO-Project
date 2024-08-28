import { Header, Information, MiniCalendar} from '../../widgets'
import { usePeriods } from './model/hooks';
import { FetchPeriods } from './model/types';

export default function Smoking() {
    const periods = usePeriods(new Date());
    console.log(periods);

    const days = hmUsed(periods);

    return (
      <>
        <Header title="Сколько я держусь без курения?"></Header>
        <div className='page-container'>
          <div className="smoke">
            <MiniCalendar period={periods} shift={1} ></MiniCalendar>
          </div>

          <div>
            <Information title="Я не курю с" count={`${new Date(periods.start).toLocaleString('default',{day: 'numeric',month: 'long',year: "numeric", timeZone:'UTC'})}`}></Information>
            <Information title="Не курю уже" count={`${days} дней`}></Information>
            <Information title="Мой рекорд" count={`${days} дней без курения`}></Information>
          </div>

          <div>
          </div>

          <button style={{zIndex:2,marginTop:'30px', alignSelf:'center',fontSize:'26px',borderRadius:'15px', border:'0.5px solid black',backgroundColor:'#f5163b',width:'150px',height:'50px',color:'#f5edef'}}>
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