import './screens.css';
import CardList from '../components/card-list/card-list';
import Congrats from '../components/congrats/congrats';

import StatusBar from '../components/status-bar/status-bar';
import useGameLogic from '../hooks/game-logic.hook';

const GameScreen = () => {
  const { state, dispatch, gameMode } = useGameLogic();

  return (
    <div className="screen game-screen">
      <StatusBar />
      <CardList
        cards={state.cards}
        dispatch={dispatch}
      />
      {gameMode.finished && <Congrats />}
    </div>
  )
}

export default GameScreen;