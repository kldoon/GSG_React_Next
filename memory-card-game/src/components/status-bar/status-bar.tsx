
import './status-bar.css';
import { useContext } from 'react';
import { GameModeContext } from '../../providers/modeProvider';

const StatusBar = () => {
  const { gameMode } = useContext(GameModeContext);

  return (
    <div className="status-bar">
      <span> Level: {Array.from({ length: gameMode.level / 2 }).map(_ => '⭐')}</span>
      <span>Time: {gameMode.time}s</span>
      <span>Wrong Moves: {gameMode.wrongMoves}</span>
    </div>
  )
}

export default StatusBar;