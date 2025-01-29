import { ELevels, ICard } from "../types/@types";
import { createGameBoard } from "../utils/game.util";

export interface IGameState {
  initialized: boolean;
  cards: ICard[];  
  openCards: number[];
}

export type Action =
  { type: 'init', payload: { level: ELevels } }
  | { type: 'flip-card', payload: { id: number, index: number } }
  | { type: 'hide-mismatch' };

export const gameReducer = (state: IGameState, action: Action): IGameState => {
  switch (action.type) {
    case 'init': {
      const cards = createGameBoard(action.payload.level);
      return { ...state, initialized: true, cards };
    }

    case 'flip-card': {
      if (state.openCards.includes(action.payload.index) || state.openCards.length === 2) {
        return state;
      }

      let openCards = [...state.openCards, action.payload.index];
      const cards: ICard[] = [...state.cards];
      if (openCards.length === 2) {
        cards[openCards[0]].visible = true;
        cards[openCards[1]].visible = true;
        if (cards[openCards[0]].id === cards[openCards[1]].id) {
          cards[openCards[0]].revealed = true;
          cards[openCards[1]].revealed = true;
          openCards = [];
        }
      } else {
        if (!cards[action.payload.index].visible) {
          cards[action.payload.index].visible = true;
        }
      }
      return { ...state, openCards, cards };
    }
    case 'hide-mismatch': {
      if (state.cards[state.openCards[0]].id !== state.cards[state.openCards[1]].id) {
        const cards: ICard[] = [...state.cards];
        cards[state.openCards[0]].visible = false;
        cards[state.openCards[1]].visible = false;
        return { ...state, openCards: [], cards };
      } else {
        return state;
      }
    }
    default:
      return state
  }
}