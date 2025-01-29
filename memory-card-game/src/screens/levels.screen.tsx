import { useContext } from "react";
import { GameModeContext } from "../providers/modeProvider";
import { useNavigate } from "react-router-dom";
import { ELevels } from "../types/@types";

const LevelsScreen = () => {
  const { setGameMode } = useContext(GameModeContext);
  const navigate = useNavigate();

  const handleSelectLevel = (level: ELevels) => {
    setGameMode(old => ({ ...old, level }));
    navigate("/game");
  };

  return (
    <div className="screen levels-screen">
      <h1>Flip Card Game </h1>
      <h3>Please select your level</h3>
      <div className="levels">
        <span className="level" onClick={() => handleSelectLevel(ELevels.EASY)}>Easy</span>
        <span className="level" onClick={() => handleSelectLevel(ELevels.MEDIUM)}>Medium</span>
        <span className="level" onClick={() => handleSelectLevel(ELevels.HARD)}>Hard</span>
      </div>
    </div>
  )
}

export default LevelsScreen;