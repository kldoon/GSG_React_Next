import { useContext, useState } from "react";
import { GameModeContext } from "../providers/modeProvider";
import { Link, useNavigate } from "react-router-dom";
import { ELevels } from "../types/@types";

const LevelsScreen = () => {
  const { gameMode, setGameMode } = useContext(GameModeContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSelectLevel = (level: ELevels) => {
    if (gameMode.playerName.length < 3) {
      setError("Please enter your name (at least 3 chars)");
      return;
    }
    setGameMode(old => ({ ...old, level }));
    navigate("/game");
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.value || '';
    setGameMode(old => ({ ...old, playerName: name }));
  }

  return (
    <div className="screen levels-screen">
      <h1>Flip Card Game </h1>
      <nav><Link to="/score-board">Score Board</Link></nav>
      <br /><br />
      <div className="player">
        <h3>Please enter your name</h3>
        <input type="text" width={60} onChange={handleChangeName} />
        {Boolean(error) && <p style={{ color: 'red', fontSize: 'smaller' }}>{error}</p>}
      </div>
      <h3>Please select your level</h3>
      <div className="levels">
        <button className="level" onClick={() => handleSelectLevel(ELevels.EASY)}>Easy</button>
        <button className="level" onClick={() => handleSelectLevel(ELevels.MEDIUM)}>Medium</button>
        <button className="level" onClick={() => handleSelectLevel(ELevels.HARD)}>Hard</button>
      </div>
    </div>
  )
}

export default LevelsScreen;