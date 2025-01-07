
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import Platformiconlist from './Platformiconlist'
interface Props{
    game: Game
}
const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" boxShadow="md">
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl' textAlign='center'>
                {game.name}
            </Heading>
           <Platformiconlist platforms={game.parent_platforms.map(p=>p.platform)}/>
        </CardBody>
    </Card>
  )
}

export default GameCard