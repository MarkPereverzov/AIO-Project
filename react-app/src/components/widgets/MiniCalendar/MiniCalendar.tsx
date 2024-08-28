import MiniCalendarDay from "../MiniCalendarDay/MiniCalendarDay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { ReactEventHandler, useState } from 'react';
import { FetchPeriods } from "../../pages/Smoking/model/types";
import "./MiniCalendar.css"
import { usePeriods } from "../../pages/Smoking/model/hooks";
import { stat } from "fs";

interface Props {
    shift: number,
};
interface MiniCalendarState {
	date: Date,
};
//5.5.4
export default function MiniCalendar(props: Props) 
{
    const [date, setDate] = useState<Date>(new Date());
    const periods = usePeriods(date);
    
    console.log(date);
    console.log(periods);

    let MC_days = [];
    const shift = findShift(date);
    for(let i = 1;i <= findlastDay(date);i++)
    {
        const dateDay = date;
        dateDay.setDate(i);
        let color = "#ffffff";
        periods?.forEach((period) => {
            if(period && inPeriod(period, dateDay)) color = "#adff2f";
        });
        
        MC_days.push(<MiniCalendarDay key={i} day={i} color={color} shift={shift} />);
    }

    //TODO
    return (
        <div className="calendar-container">
            <div className="minicalendar" style={{width:"320px"}}>
                <div className="minicalendar-date">
                    <FontAwesomeIcon onClick={()=>changeDate('decrease',date,setDate)} icon={faCaretLeft} />
                    <h1 style={{textAlign:"center"}}>{date.toLocaleString('default',{month: 'long',year: "numeric", timeZone:'UTC'})}</h1>
                    <FontAwesomeIcon onClick={()=>changeDate('increase',date,setDate)} icon={faCaretRight} />
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

function changeDate(direction: string, date: Date ,setDate: (date: Date) => void) {
    let newDate = new Date(date);
    newDate.setDate(1);
    switch (direction) {
        case "decrease": newDate.setMonth(date.getMonth()-1); break;
        case "increase": newDate.setMonth(date.getMonth()+1); break;
        default: break;
    }
    setDate(newDate);
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