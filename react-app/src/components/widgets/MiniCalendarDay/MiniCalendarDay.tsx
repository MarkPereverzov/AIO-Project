import './MiniCalendarDay.css';

interface Props {
    day: number,
    color: `#${string}`; // allow only hex colors
    //TODO: Create day type instead of color prop
}

export default function MiniCalendarDay(props: Props) {
    return (
        <div className="minicalendar-day">
            <h1 className='minicalendar-day-number' style={{color:props.color}}>{props.day}</h1>
        </div>
    );
}