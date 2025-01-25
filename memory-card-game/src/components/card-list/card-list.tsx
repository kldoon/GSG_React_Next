import { useState } from 'react';
import { ELevels } from '../../types/@types';
import Card from '../card/card';
import './card-list.css';
import { createGameBoard } from '../../utils/game.util';

const CURRENT_LEVEL = ELevels.MEDIUM;
const CardList = () => {
  const [cards, setCards] = useState(createGameBoard(CURRENT_LEVEL));

  return (
    <div className={`card-list level_${CURRENT_LEVEL}`}>
      {
        cards.map((card, index) => <Card key={index} data={card} />)
      }
    </div>
  )
}

export default CardList;