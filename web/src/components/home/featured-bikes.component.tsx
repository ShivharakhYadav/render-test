'use client'
import { FETCH_BIKES } from '@/api/bikes/bike.api'
import { Button } from '@/components/ui/button.component'
import { GetBikeArgs, GetBikeResponse } from '@/interfaces/bike.interface'
import {
  Box,
  HStack,
  Image,
  SimpleGrid,
  Spinner,
  VStack,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import Carousel from '../../components/ui/carousel.component'
import { TEXT_COLOR } from '../../utils/constant.utils'
import { formatPrice } from '../../utils/string.utils'
import { PAGE_URL } from '../../utils/url.utils'
import Heading from '../ui/heading.component'
import { Text } from '../ui/text.component'

const FeaturedBikes: React.FC<GetBikeArgs> = (props) => {
  const {
    data: featuredBikes,
    isLoading,
    error,
  } = useQuery<GetBikeResponse, Error, GetBikeResponse, [string, GetBikeArgs]>({
    queryKey: ['bikes', props],
    queryFn: FETCH_BIKES,
  })

  if (isLoading)
    return (
      <HStack justifyContent='center' my={10}>
        <Text>Loading...</Text>
        <Spinner />
      </HStack>
    )
  if (error?.message)
    return (
      <HStack justifyContent='center' my={10}>
        <Text>Error: {error?.message}</Text>
      </HStack>
    )

  if (!featuredBikes || !featuredBikes.length)
    return (
      <HStack justifyContent='center' my={10}>
        <Text>No Bikes Available.</Text>
      </HStack>
    )

  return (
    <Box py={8}>
      <Heading as='h2' size='xl' textAlign='center' mb={8}>
        Featured Bikes
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {featuredBikes.map((bike) => (
          <Box
            key={bike.id}
            padding={8}
            borderRadius={23}
            boxShadow='2px 0px 10px rgba(3,3,3,0.1)'
          >
            <Carousel height='150px' borderRadius='23px' isInfinite>
              {bike.photos.map((photo, index) => (
                <Image
                  key={index}
                  src={photo.url}
                  alt={`Bike ${index + 1}`}
                  w='100%'
                  h='100%'
                  objectFit='cover'
                  borderRadius='lg'
                />
              ))}
            </Carousel>

            <VStack align='start' gap={1} mt={3}>
              <Text
                style={{
                  color: TEXT_COLOR,
                  fontSize: '18px',
                  lineHeight: '28px',
                }}
              >
                {bike.make.name} {bike.model}
              </Text>
              <Text
                style={{
                  color: TEXT_COLOR,
                  fontSize: '14px',
                  lineHeight: '20px',
                }}
              >
                Rental: ${formatPrice(bike.rentalPrice.toString())}/day | Sale:{' '}
                ${formatPrice(bike.salePrice.toString())}
              </Text>
            </VStack>

            <Link href={PAGE_URL.bike(bike.id)}>
              <Button mt={4}>View Details</Button>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default FeaturedBikes
