import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image,  } from "@chakra-ui/react";
import Platformiconlist from "./Platformiconlist";
import CriticScore from "./CriticScore";
import getcropped from "../Services/image.url";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card width='300px' borderRadius={10} overflow="hidden" boxShadow="md">
      <Image src={getcropped (game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl" textAlign="center">
          {game.name}
        </Heading>
        <HStack justifyContent={"space-between"}>
        <Platformiconlist
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
