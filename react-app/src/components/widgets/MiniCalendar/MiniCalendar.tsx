import MiniCalendarDay from "../MiniCalendarDay/MiniCalendarDay";
import "./MiniCalendar.css"

export default function MiniCalendar() 
{
    let MC_days = [];
    for(let i = 1;i <= 31;i++)
    {
        MC_days.push(<MiniCalendarDay day={i} color="#0000aa" />);
    }
    //TODO
    return (
        <div className="minicalendar-container">
            {MC_days}
        </div>
    );
}