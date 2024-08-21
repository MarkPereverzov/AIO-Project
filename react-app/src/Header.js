import './index.css';
import {HashRouter, Routes, Route, NavLink} from 'react-router-dom';

export function Header(props){
    return (
        <div class="Header">
            <div class="header-content">
                <img src='./img/menu.png'/>
                <img src='./img/border.png'/>
            </div>

            <div class="header-content">
                <h1>{props.title}</h1>
            </div>

            <div class="header-content">
                <img src='./img/clock.png'/>
                <img src='./img/avatar.png'/>
            </div>
        </div>
    );
}