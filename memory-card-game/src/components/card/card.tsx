import { useState } from 'react';
import { ICard } from '../../types/@types';
import './card.css';

interface IProps {
  data: ICard;
}

const Card = (props: IProps) => {
  const [visible, setVisible] = useState(props.data.visible);

  return (
    <div
      className="card"
      style={{ backgroundImage: visible ? `url(${props.data.image})` : 'url(https://api.clipart.com/img/previews/icon-set-98.png)' }}
      onClick={() => setVisible(!visible)}
    >
      {/* {props.data.id} */}
    </div>
  )
}

export default Card;