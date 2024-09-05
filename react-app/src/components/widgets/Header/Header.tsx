import {HashRouter, Routes, Route, NavLink} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu } from '../';
import './Header.css'
import { useToken } from '../../context';

interface HeaderState {
    collapsed?: boolean;
}

interface HeaderProps {
    title: string
}

export default function Header(props: HeaderProps){
    const [state, setState] = useState<HeaderState>({collapsed:true});
    const { accessToken } = useToken();
    const [image, setImage] = useState<string>("./img/avatar.png");

    useEffect(()=>{
        const fetchLogo = async () => {
            const url = 'http://localhost:3001/oauth/logo/';
    
            try {
                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                });

                if (!res.ok) {
                    throw new Error(`Failed to fetch logo: ${res.statusText}`);
                }
                const { logo } = await res.json();
                setImage(logo);
            } catch (error) {
                console.error('Failed to fetch logo:', error);
            }
        }
        fetchLogo();
    }, [accessToken])

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
                <NavLink to='Profile'><img src={image}/></NavLink>
            </div>
        </div>
    );
}

function openSideBar(state: HeaderState,setState: (state: HeaderState)=>void) {
    setState(state);
}