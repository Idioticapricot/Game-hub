import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getcropped from "../Services/image.url";

const GenreList = () => {
  const { data } = useGenres()
  return <List> 
    {data.map(genre => <ListItem key={genre.id} paddingY={'5px'}><HStack>
      <Image boxSize={'32px'} borderRadius={'8px'} src={getcropped(genre.image_background)}>
         
      
      </Image>
      <Text fontSize={'large'}>{genre.name}</Text>
      </HStack></ListItem>)}
    </List>;
};

export default GenreList;
