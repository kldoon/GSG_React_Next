export enum ELevels {
  EASY = 2,
  MEDIUM = 4,
  HARD = 6
}

export interface ICard {
  id: number;
  image: string;
  visible: boolean;
}