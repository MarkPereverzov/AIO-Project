import {HashRouter, Routes, Route, NavLink} from 'react-router-dom';

interface Props {
    title: string
}

export default function Header(props: Props){
    return (
        <div className="header">
            <div className="header-content">
                <img src='./img/menu.png'/>
                <img src='./img/border.png'/>
            </div>

            <div className="header-content">
                <h1>{props.title}</h1>
            </div>

            <div className="header-content">
                <img src='./img/clock.png'/>
                <img src='./img/avatar.png'/>
            </div>
        </div>
    );
}