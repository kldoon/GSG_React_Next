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
    props.dispatch({ type: 'flip-card', payload: { id: props.data.id, index: props.index } })
  }

  return (
    <div
      className="card"
      style={{ backgroundImage: props.data.visible ? `url(${props.data.image})` : 'url(https://api.clipart.com/img/previews/icon-set-98.png)' }}
      onClick={handleFlip}
    >
    </div>
  )
}

export default Card;