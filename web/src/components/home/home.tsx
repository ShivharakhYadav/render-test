import { Box, VStack } from '@chakra-ui/react'
import Header from '../header/header.component'
import Hero from './hero.component'
import Container from '../ui/container.component'
import HowItWorks from './how-it-works.component'
import FeaturedBikes from './featured-bikes.component'
import Footer from '../footer.component'

export const Home: React.FC = () => {
  return (
    <Box>
      <VStack gap={8} align='stretch'>
        <Header />
        <Hero />
        <Container>
          <HowItWorks />
          <FeaturedBikes isFeatured />
        </Container>
      </VStack>
      <Footer />
    </Box>
  )
}

export default Home
