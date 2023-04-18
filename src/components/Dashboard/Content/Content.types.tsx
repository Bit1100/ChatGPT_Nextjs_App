import { IconType } from "react-icons";

export interface ICard {
  id: String;
  title: String;
  category: String;
  icon: string;
  iconBgClr: String;
  description: String;
}

export interface ICards {
  cards: ICard[];
}

export interface ICardItem {
  key?: Number;
  card: ICard;
}
