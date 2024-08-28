import {HashRouter, Routes, Route, NavLink} from 'react-router-dom';
import { useState } from 'react';
import { Menu } from '../';
import './Header.css'

interface HeaderState {
    collapsed?: boolean;
}

interface HeaderProps {
    title: string
}

export default function Header(props: HeaderProps){
    const [state, setState] = useState<HeaderState>({collapsed:true});

    return (
        <div className="header">
            <div className="header-content left">
                <img 
                    style={{cursor:"pointer"}}
                    src='./img/menu.png'
                    onClick={()=>setState({collapsed: false})}
                />
                <Menu 
                    collapsed={state.collapsed}
                    open={()=>setState({collapsed: false})}
                    close={()=>setState({collapsed: true})}
                /> 
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

function openSideBar(state: HeaderState,setState: (state: HeaderState)=>void) {
    setState(state);
}