import { createContext, useState } from "react";
import { ELevels } from "../types/@types";

export interface IGameMode {
  playerName: string;
  level: ELevels;
  finished: boolean;
  time: number;
  wrongMoves: number;
}

export interface IGameModeContext {
  gameMode: IGameMode;
  setGameMode: React.Dispatch<React.SetStateAction<IGameMode>>;
  resetGame: () => void;
}

const INIT_STATE: IGameMode = { playerName: '', level: ELevels.EASY, finished: false, time: 0, wrongMoves: 0 };

export const GameModeContext = createContext<IGameModeContext>(
  { gameMode: INIT_STATE, setGameMode: () => { }, resetGame: () => { } }
);

export const GameModeProvider = (props: { children: React.ReactNode }) => {
  const [gameMode, setGameMode] = useState<IGameMode>(INIT_STATE);

  const resetGame = () => {
    setGameMode(old => ({ ...INIT_STATE, level: old.level, playerName: old.playerName }));
  }

  return <GameModeContext.Provider value={{ gameMode, setGameMode, resetGame }}>{props.children}</GameModeContext.Provider>
}