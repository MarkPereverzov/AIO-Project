import "./Information.css"

interface Props {
  title: string,
  count: string
}

export default function Card(props: Props){
  return (
    <>
      <div className="information-container">
        <div className="content">
          <h1>{props.title}</h1>
          <p>{props.count}</p>
        </div>
      </div>
    </>
  );
}