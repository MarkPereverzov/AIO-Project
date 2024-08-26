import {NavLink} from 'react-router-dom';
import './SideMenu.css';

interface SideMenuProps {
    collapsed?: boolean;
    open: ()=>void;
    close: ()=>void;
}
interface NavElementProps {
    title: string;
    image: string;
    address: string;
}

export default function SideMenu(props: SideMenuProps) {

    return (
        <div id="mySidenav" className="sidenav" style={{width:props.collapsed ? "0px" : "250px"}}>
            <a href="javascript:void(0)" className="closebtn" onClick={()=>props.close()}>&times;</a>
            <NavElement address="" title="Главная" image="menu"></NavElement>
            <NavElement address="BadHabits" title="Зависимости" image="bad-habits"></NavElement>
            <NavElement address="Dream" title="Сон" image="dream"></NavElement>
            <NavElement address="Budget" title="Бюджет" image="budget"></NavElement>
            <NavElement address="Nutrion" title="Питание" image="food"></NavElement>
            <NavElement address="Job" title="Работа" image="job"></NavElement>
            <NavElement address="plus" title="Добавить" image="plus"></NavElement>
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