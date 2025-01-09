import { Grid, GridItem, HStack, Show, space } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import Platformselector from "./components/Platformselector";
import Platformiconlist from "./components/Platformiconlist";
import { Platform } from "./hooks/useGames";



function App() {
  const[selectedGenre, setSelectedGenre]=useState<Genre | null>(null)
  const[selectedPlatform, setSelectedPlatform]=useState<Platform | null>(null)
  return (
    <Grid
      templateAreas={{
        base: `"nav " " main"`,
        lg: `"nav nav" "aside main"`,
      }}
     templateColumns={{
      base: "1fr", 
      lg: "200px 1fr",
     }}
    >
      <GridItem area="nav" >
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenere={selectedGenre}onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
          
        </GridItem>
      </Show>
      <GridItem area="main" >
        <HStack paddingX={3} justifyContent={"space-between"}>
        <Platformselector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
            </HStack>
       
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
