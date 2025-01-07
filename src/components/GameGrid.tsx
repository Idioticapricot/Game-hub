import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GamecardSkeleton";
import CardContainer from "./CardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6,7,8];
 
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl:4 }} padding="10px" spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) =><CardContainer> <GamecardSkeleton key={skeleton} /></CardContainer>)}
        {games.map((game) => (
         <CardContainer> <GameCard key={game.id} game={game}></GameCard></CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
