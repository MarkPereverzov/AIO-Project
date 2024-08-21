import {HashRouter, Routes, Route, NavLink} from 'react-router-dom';

export default function Header(props){
    return (
        <div class="header">
            <div class="header-content">
                <img src='./img/menu.png'/>
            </div>

            <div class="header-content">
                <h1>Budget</h1>
            </div>

            <div class="header-content">
                <img src='./img/clock.png'/>
                <img src='./img/avatar.png'/>
            </div>
        </div>
    );
}