import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getcropped from "../Services/image.url";
import GenreListcardSkeleton from "./GenreListSkeleton";
import CardContainer from "./CardContainer";
const skeletons = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const GenreList = () => {
  const { data, isLoading, error } = useGenres()
  
    return <List> 
       {error && <Text>{error}</Text>}
      {isLoading &&
          skeletons.map((skeleton) =><CardContainer> <GenreListcardSkeleton key={skeleton} /></CardContainer>)}

    {data.map(genre => <ListItem key={genre.id} paddingY={'5px'}><HStack>
      <Image boxSize={'32px'} borderRadius={'8px'} src={getcropped(genre.image_background)}>
         
      
      </Image>
      <Text fontSize={'large'}>{genre.name}</Text>
      </HStack></ListItem>)}
    </List>;
};

export default GenreList;
