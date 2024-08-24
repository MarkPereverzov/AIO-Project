import MiniCalendarDay from "../MiniCalendarDay/MiniCalendarDay";
import { useState } from 'react';
import "./MiniCalendar.css"

interface Props {
    shift: number,
}

interface MiniCalendarState {
	date: Date,
};

export default function MiniCalendar(props: Props) 
{
    const [state, setState] = useState<MiniCalendarState>({date:new Date()});

    let MC_days = [];
    const shift = findShift(state.date);
    for(let i = 1;i <= findlastDay(state.date);i++)
    {
        MC_days.push(<MiniCalendarDay key={i} day={i} color="#ffffff" shift={shift} />);
    }

    //TODO
    return (
        <div className="minicalendar">
            <div className="minicalendar-legend">
                <h1 style={{gridColumnStart:1}}>ПН</h1>
                <h1 style={{gridColumnStart:2}}>ВТ</h1>
                <h1 style={{gridColumnStart:3}}>СР</h1>
                <h1 style={{gridColumnStart:4}}>ЧТ</h1>
                <h1 style={{gridColumnStart:5}}>ПТ</h1>
                <h1 style={{gridColumnStart:6}}>СБ</h1>
                <h1 style={{gridColumnStart:7}}>НД</h1>
            </div>
            <div className="minicalendar-container">
                {MC_days}
            </div>
        </div>
    );
}

function findlastDay(date: Date) {
    return(new Date(date.getFullYear(),date.getMonth()+1,0).getDate());
}

function findShift(date: Date) {
    return(new Date(date.getFullYear(), date.getMonth(), 1).getDay());
}