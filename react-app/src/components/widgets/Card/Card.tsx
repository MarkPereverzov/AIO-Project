import {NavLink} from 'react-router-dom';
import "./Card.css"

interface Props {
  title: string,
  text: string,
  address: string,
  image: string
}

export default function Card(props: Props){
  return (
    <NavLink to={`/${props.address}`}>
      <div className="card">
        <div className="content">
          <img src={`./img/${props.image}.png`}/>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </NavLink>
  );
}