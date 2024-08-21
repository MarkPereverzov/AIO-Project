import {NavLink} from 'react-router-dom';

export default function Card(props){
    return (
      <NavLink to={`/${props.address}`}>
        <div class="card">
          <div class="content">
            <img src={`./img/${props.image}.png`}/>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </div>
        </div>
      </NavLink>
    );
}