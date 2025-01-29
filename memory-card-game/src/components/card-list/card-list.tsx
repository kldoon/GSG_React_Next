import { ICard } from '../../types/@types';
import Card from '../card/card';
import './card-list.css';
import { Action } from '../../providers/reducer';
import { useContext } from 'react';
import { GameModeContext } from '../../providers/modeProvider';

interface IProps {
  cards: ICard[];
  dispatch: React.Dispatch<Action>;
}

const CardList = (props: IProps) => {
  const { gameMode } = useContext(GameModeContext);
  
  return (
    <div className={`card-list level_${gameMode.level}`}>
      {
        props.cards.map((card, index) => (
          <Card
            key={index}
            index={index}
            data={card}
            dispatch={props.dispatch}
          />
        ))
      }
    </div>
  )
}

export default CardList;