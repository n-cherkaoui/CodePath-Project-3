import "./card.css";
import "./flip-transition.css";

function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="card-back">{props.back}</div>
      <div className="card-front">{props.front}</div>
    </div>
  );
}

export default Card;
