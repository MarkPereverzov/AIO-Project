import './MiniCalendarDay.css';

interface Props {
    day: number,
    color: `#${string}`,// allow only hex colors
    shift: number;
    //TODO: Create day type instead of color prop
}

export default function MiniCalendarDay(props: Props) {
    console.log(props.shift);
    let shift = props.shift;
    if(props.shift == 0) shift = 7;
    return (
        <div className="minicalendar-day" style={{gridColumnStart:(props.day+shift-2)%7+1}}>
            <h1 className='minicalendar-day-number' style={{color:props.color}}>{props.day}</h1>
        </div>
    );
}