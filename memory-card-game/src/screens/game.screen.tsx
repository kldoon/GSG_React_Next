import { useContext, useEffect, useReducer } from 'react';
import CardList from '../components/card-list/card-list';
import './screens.css';
import { gameReducer } from '../providers/reducer';
import { GameModeContext } from '../providers/modeProvider';

const GameScreen = () => {
  const [state, dispatch] = useReducer(gameReducer, { cards: [], moves: 0, initialized: false, openCards: [] });
  const { gameMode } = useContext(GameModeContext);

  useEffect(() => {
    if (!state.initialized) {
      dispatch({ type: 'init', payload: { level: gameMode.level } });
    }
  }, []);

  useEffect(() => {
    if (state.openCards.length === 2) {
      setTimeout(() => {
        dispatch({ type: 'hide-mismatch' });
      }, 1500);
    }
  }, [state.openCards]);

  return (
    <div className="screen game-screen">
      <div className="placeholder" style={{ width: '100%', height: '60px' }}>Status</div>
      <CardList
        cards={state.cards}
        dispatch={dispatch}
      />
    </div>
  )
}

export default GameScreen;