import { NavLink } from 'react-router-dom';

interface Props {
  image: string,
  title: string
}

export default function AddCard(props: Props){
    return (
        <div className="card">
          <div className="content">
            <img src={`./img/${props.image}.png`}/>
            <h1>{props.title}</h1>
          </div>
        </div>
    );
}