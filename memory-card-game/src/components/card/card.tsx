import { Action } from '../../providers/reducer';
import { ICard } from '../../types/@types';
import './card.css';

interface IProps {
  data: ICard;
  index: number;
  dispatch: React.Dispatch<Action>;
}

const Card = (props: IProps) => {
  const handleFlip = () => {
    props.dispatch({ type: 'flip-card', payload: { id: props.data.id, index: props.index } });
  }

  return (
    <div
      className={`card ${props.data.visible ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="card-inner">
        <div className="card-front"></div>
        <div
          className="card-back"
          style={{ backgroundImage: `url(${props.data.image})` }}
        ></div>
      </div>
    </div>
  )
}

export default Card;