import './MiniCalendarDay.css';

interface Props {
    day: number,
    color: `#${string}`,// allow only hex colors
    shift: number;
    //TODO: Create day type instead of color prop
}

export default function MiniCalendarDay(props: Props) {
    return (
        <div className="minicalendar-day" style={{gridColumnStart:(props.day-1+props.shift-1)%7+1}}>
            <h1 className='minicalendar-day-number' style={{color:props.color}}>{props.day}</h1>
        </div>
    );
}