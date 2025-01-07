
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
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
        </CardBody>
    </Card>
  )
}

export default GameCard