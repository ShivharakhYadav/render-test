import { Box, HStack, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiInformation2Fill } from 'react-icons/ri'
import Footer from '@/components/footer.component'
import Header from '@/components/header/header.component'
import { Button } from '@/components/ui/button.component'
import Carousel from '@/components/ui/carousel.component'
import Heading from '@/components/ui/heading.component'
import { Input } from '@/components/ui/input.component'
import { Text } from '@/components/ui/text.component'
import { FeatureBikeFakeData } from '@/fake-data/fake-data'
import { Checkbox } from '@/components/ui/checkbox'

const BikeDetail: React.FC = () => {
  const BikeDetails = FeatureBikeFakeData[0]
  return (
    <>
      <Header />
      <VStack gap={4} align='stretch'>
        <Carousel height='150px' isInfinite>
          {BikeDetails.photos.map((photo, index) => (
            <Image
              key={index}
              src={photo.url}
              alt={`Bike ${index + 1}`}
              w='100%'
              h='100%'
              objectFit='cover'
            />
          ))}
        </Carousel>
        <VStack
          p={4}
          align='flex-start'
          flexDirection={{ base: 'column', sm: 'row' }}
          justify={{ sm: 'space-around' }}
          gap={8}
        >
          <VStack gap={8} width={['100%', '50%', 'auto']} align='flex-start'>
            <Box>
              <Heading as='h3' fontWeight={600} fontSize='24px'>
                Ducati Panigale V4
              </Heading>
              <Text>Total Price: $600 + fees</Text>
              <Text>
                Rental Price: $200/day, 10% discount for rentals over 3 days
              </Text>
            </Box>
            <Box
              w='100%'
              display='flex'
              flexDirection={['column', 'row']}
              justifyContent='space-between'
              gap={5}
            >
              <Box>
                <Text fontSize='16px' lineHeight='24px'>
                  Trip Start
                </Text>
                <Input />
              </Box>
              <Box>
                <Text fontSize='16px' lineHeight='24px'>
                  Trip End
                </Text>
                <Input />
              </Box>
            </Box>

            <Box w='100%'>
              <HStack align='center' mb={3}>
                <Text>Delivery</Text>
                <RiInformation2Fill />
              </HStack>
              <HStack align='center' mb={3}>
                <Checkbox />
                <Text>Do you need delivery?</Text>
              </HStack>
              <Input placeholder='Enter delivery address' />
            </Box>
            <Box w='100%'>
              <HStack align='center' mb={3}>
                <Text>Insurance</Text>
                <RiInformation2Fill />
              </HStack>
              <HStack align='center' mb={3}>
                <Checkbox />
                <Text>Do you need insurance? ($20/day)</Text>
              </HStack>
            </Box>
            <Button>Continue to Rental Agreement</Button>
          </VStack>

          <VStack gap={{ base: 8, sm: 24 }} width={['100%', '50%', 'auto']}>
            <VStack gap={10} align='start'>
              <Box>
                <Heading as='h3' fontWeight={600}>
                  Specifications
                </Heading>
                <Text>Engine : 1103 cc</Text>
                <Text>Horsepower: 214 hp</Text>
                <Text>Torque: 91.5 lb-ft</Text>
                <Text>Weight: 198 kg</Text>
                <Text>Top Speed: 300 km/h</Text>
                <Text>Seat Height: 830 mm</Text>
              </Box>
              <Box>
                <Heading as='h3' fontWeight={600}>
                  Rental Terms
                </Heading>
                <Text>Mileage Limit: 100 miles/day</Text>
                <Text>Overage Fee: $1 per mile</Text>
                <Text>
                  Rental Terms: Minimum 1 day rental, must have a valid
                  motorcycle license.
                </Text>
                <Text>Delivery Fee: $5 per mile</Text>
                <Text>Security Deposit: $1000</Text>
              </Box>
            </VStack>
            <Button bg='#ff6347'>Buy Now for $25,000</Button>
          </VStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  )
}
export default BikeDetail
