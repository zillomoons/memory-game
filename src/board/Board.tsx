import { cardsData } from "../data/cardsData";
import { Card } from "../components/card/Card";
import { BoardContainer } from "./BoardStyle";
import { shuffleCards } from "../utils/util-functions";

export const Board = () => {
  const mappedCards = cardsData
    .concat(cardsData)
    .map(({ id, icon }, index) => <Card key={index} id={id} icon={icon} />);
 
  const tiles = shuffleCards(mappedCards);

  return <BoardContainer>{tiles}</BoardContainer>;
};
