import { ELevels, ICard } from "../types/@types";

const EMPTY_CARD: ICard = {
  id: 0, image: '', visible: false
}

export const createGameBoard = (level: ELevels): ICard[] => {
  let cards: ICard[] = Array.from({ length: level * level },
    (_, index) => (index % 2 === 0) ? { ...EMPTY_CARD, id: index } : { ...EMPTY_CARD, id: index - 1, image: '' })
    .sort(() => Math.random() - 0.5);

  // fill cards images
  cards = cards.map(c => ({ ...c, image: `https://api.clipart.com/img/previews/education-${c.id + 1}.jpg` }));
  return cards;
} 