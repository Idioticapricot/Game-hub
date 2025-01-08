import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getcropped from "../Services/image.url";
import GenreListcardSkeleton from "./GenreListSkeleton";
import CardContainer from "./CardContainer";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

interface Props {
  onSelectGenre: (genre: Genre) => void; 
  selectedGenere: Genre | null;
}

const GenreList = ({ onSelectGenre,selectedGenere }: Props) => { 
  const { data, isLoading, error } = useGenres();

  return (
    <List>
      {error && <Text>{error}</Text>}
      {isLoading &&
        skeletons.map((skeleton) => (
          <CardContainer key={skeleton}>
            <GenreListcardSkeleton />
          </CardContainer>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getcropped(genre.image_background)}
            />
            <Button fontWeight={genre.id === selectedGenere?.id ? "bold" : "normal"}  
              onClick={() => onSelectGenre(genre)}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList; 