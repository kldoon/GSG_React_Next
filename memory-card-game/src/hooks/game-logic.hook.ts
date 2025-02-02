import { useReducer, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameModeContext } from "../providers/modeProvider";
import { gameReducer } from "../providers/reducer";
import { checkedFinished } from "../utils/game.util";
import { IScore } from "../types/@types";

const storeScore = (score: IScore) => {
  const scores: IScore[] = JSON.parse(localStorage.getItem('flip-cards-scores') || '[]');
  scores.push(score);
  localStorage.setItem('flip-cards-scores', JSON.stringify(scores));
}

const useGameLogic = () => {
  const [state, dispatch] = useReducer(gameReducer, { cards: [], initialized: false, openCards: [] });
  const { gameMode, setGameMode, resetGame } = useContext(GameModeContext);
  const timerRef = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!gameMode.playerName) {
      navigate('/');
      return;
    }

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

      const score: IScore = {
        finishTime: gameMode.time,
        level: gameMode.level,
        playerName: gameMode.playerName,
        wrongMoves: gameMode.wrongMoves
      }
      storeScore(score);

      setTimeout(() => {
        navigate('/score-board');
      }, 3000);
    }
  }, [state.openCards]);

  return {
    state,
    gameMode,
    dispatch
  }

}

export default useGameLogic;