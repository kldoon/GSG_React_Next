import { createContext, useState } from "react";
import { ELevels } from "../types/@types";

export interface IGameMode {
  level: ELevels;
}

export interface IGameModeContext {
  gameMode: IGameMode;
  setGameMode: React.Dispatch<React.SetStateAction<IGameMode>>;
}

export const GameModeContext = createContext<IGameModeContext>(
  { gameMode: { level: ELevels.MEDIUM }, setGameMode: () => { } }
);

export const GameModeProvider = (props: { children: React.ReactNode }) => {
  const [gameMode, setGameMode] = useState<IGameMode>({ level: ELevels.MEDIUM })

  return <GameModeContext.Provider value={{ gameMode, setGameMode }}>{props.children}</GameModeContext.Provider>
}