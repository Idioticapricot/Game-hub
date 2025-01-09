import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GamecardSkeleton";
import CardContainer from "./CardContainer";
import { Genre } from "../hooks/useGenres";
interface Props{
  selectedGenre: Genre | null
  selectedPlatform: Platform | null
}
const GameGrid = ({selectedGenre,selectedPlatform}:Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6,7,8];
 
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl:4 }} padding="10px" spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) =><CardContainer  key={skeleton} > <GamecardSkeleton/></CardContainer>)}
        {data.map((data) => (
         <CardContainer key={data.id}> <GameCard  game={data}></GameCard></CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
