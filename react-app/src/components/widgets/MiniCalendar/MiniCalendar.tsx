import MiniCalendarDay from "../MiniCalendarDay/MiniCalendarDay";
import "./MiniCalendar.css"

interface Props {
    shift: number,
}

export default function MiniCalendar(props: Props) 
{
    let MC_days = [];
    for(let i = 1;i <= 31;i++)
    {
        MC_days.push(<MiniCalendarDay day={i} color="#0000aa" shift={props.shift}/>);
    }
    //TODO
    return (
        <div className="minicalendar-container">
            {MC_days}
        </div>
    );
}