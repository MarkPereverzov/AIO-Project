import { useState } from 'react';
import './SideMenu.css';

interface State {
    collapsed?: boolean;
}

export default function SideMenu() {
    const [state, setState] = useState<State>({collapsed:false});
    return (
        <div id="mySidenav" className="sidenav" style={{width:state.collapsed ? "0px" : "250px"}}>
            <a href="javascript:void(0)" className="closebtn" onClick={() => setState({collapsed:true})}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            <span onClick={() => setState({collapsed:false})}>&#9776; open</span>
        </div>
       // Possible bug
    );
}