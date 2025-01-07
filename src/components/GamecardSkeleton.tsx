import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const GamecardSkeleton = () => {
  return (
    <Card width='300px' borderRadius={10} overflow="hidden" boxShadow="md">
        <Skeleton height={'200px'}/>
        <CardBody>
        <SkeletonText/>

        </CardBody>

        
    </Card>
  )
}

export default GamecardSkeleton