import { useContext, useEffect, useReducer, useRef } from 'react';
import CardList from '../components/card-list/card-list';
import './screens.css';
import { gameReducer } from '../providers/reducer';
import { GameModeContext } from '../providers/modeProvider';
import { checkedFinished } from '../utils/game.util';
import Congrats from '../components/congrats/congrats';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/status-bar/status-bar';

const GameScreen = () => {
  const [state, dispatch] = useReducer(gameReducer, { cards: [], initialized: false, openCards: [] });
  const { gameMode, setGameMode, resetGame } = useContext(GameModeContext);
  const timerRef = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.initialized) {
      dispatch({ type: 'init', payload: { level: gameMode.level } });
      resetGame();
      timerRef.current = setInterval(() => {
        setGameMode(old => ({ ...old, time: old.time + 1 }));
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    }
  }, []);

  useEffect(() => {
    if (!state.initialized) return;

    if (state.openCards.length === 2) {
      setGameMode(old => ({ ...old, wrongMoves: old.wrongMoves + 1 }));
      setTimeout(() => {
        dispatch({ type: 'hide-mismatch' });
      }, 1500);
    }

    const isFinished = checkedFinished(state.cards);
    if (isFinished) {
      setGameMode(old => ({ ...old, finished: true }));
      clearInterval(timerRef.current);
      setTimeout(() => {
        navigate('/score-board');
      }, 3000);
    }
  }, [state.openCards]);

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