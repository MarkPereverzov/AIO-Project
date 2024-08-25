import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import './SideMenu.css';

interface State {
    collapsed?: boolean;
}

interface NavElementProps {
    title: string;
    image: string;
    address: string;
}

export default function SideMenu() {
    const [state, setState] = useState<State>({collapsed:false});
    return (
        <div id="mySidenav" className="sidenav" style={{width:state.collapsed ? "0px" : "250px"}}>
            <a href="javascript:void(0)" className="closebtn" onClick={() => setState({collapsed:true})}>&times;</a>
            <NavElement address="" title="Главная" image="menu"></NavElement>
            <NavElement address="NoSmoking" title="Зависимости" image="bad-habits"></NavElement>
            <NavElement address="Dream" title="Сон" image="dream"></NavElement>
            <NavElement address="Budget" title="Бюджет" image="budget"></NavElement>
            <NavElement address="Nutrion" title="Питание" image="food"></NavElement>
            <NavElement address="Job" title="Работа" image="job"></NavElement>
            <NavElement address="plus" title="Добавить" image="plus"></NavElement>
            <span onClick={() => setState({collapsed:false})}>open</span>
        </div>
       // Possible bug
    );
}

function NavElement (props: NavElementProps){
    return(
        <NavLink to={`/${props.address}`}>
            <div className="navElement">
                <img src={`./img/${props.image}.png`}/>
                <a href="#">{props.title}</a>
            </div>
        </NavLink>
    );
}