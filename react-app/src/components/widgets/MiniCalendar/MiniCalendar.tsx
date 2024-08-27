import MiniCalendarDay from "../MiniCalendarDay/MiniCalendarDay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { ReactEventHandler, useState } from 'react';
import { FetchPeriods } from "../../pages/Smoking/model/types";
import "./MiniCalendar.css"

interface Props {
    shift: number,
    period?: FetchPeriods,
}

interface MiniCalendarState {
	date: Date,
};
//5.5.4
export default function MiniCalendar(props: Props) 
{
    const [state, setState] = useState<MiniCalendarState>({date:new Date()});

    let MC_days = [];
    const shift = findShift(state.date);
    for(let i = 1;i <= findlastDay(state.date);i++)
    {
        const date = state.date;
        date.setDate(i);
        let color = "#ffffff";
        if(props.period && inPeriod(props.period,date)) color = "#ff0000";
        MC_days.push(<MiniCalendarDay key={i} day={i} color={color} shift={shift} />);
    }

    //TODO
    return (
        <div className="calendar-container">
            <div className="minicalendar" style={{width:"320px"}}>
                <div className="minicalendar-date">
                    <FontAwesomeIcon onClick={()=>changeDate('decrease',state,setState)} icon={faCaretLeft} />
                    <h1 style={{textAlign:"center"}}>{state.date.toLocaleString('default',{month: 'long',year: "numeric", timeZone:'UTC'})}</h1>
                    <FontAwesomeIcon onClick={()=>changeDate('increase',state,setState)} icon={faCaretRight} />
                </div>
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
        </div>
    );
}

function changeDate(direction: string, state: MiniCalendarState ,setState: (state: MiniCalendarState) => void) {
    let date = new Date(state.date);
    switch (direction) {
        case "decrease": date.setMonth(state.date.getMonth()-1); break;
        case "increase": date.setMonth(state.date.getMonth()+1); break;
        default: break;
    }
    setState({date: date})
}

function findlastDay(date: Date) {
    return(new Date(date.getFullYear(),date.getMonth()+1,0).getDate());
}

function findShift(date: Date) {
    return(new Date(date.getFullYear(), date.getMonth(), 1).getDay());
}

function inPeriod(period: FetchPeriods,date: Date): boolean {
    const start = new Date(period.start).getTime();
    const end = new Date(period.end).getTime();
  
    return start <= date.getTime() && end >= date.getTime();
} 