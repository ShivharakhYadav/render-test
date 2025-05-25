'use client'
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Hero: React.FC = () => {
  const images = [
    '/hero-images/image1.png',
    '/hero-images/image1.png',
    '/hero-images/image2.png',
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <Box
      position='relative'
      height='400px'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Box
        position='absolute'
        top='0'
        left='0'
        right='0'
        bottom='0'
        bgImage={`url('${images[currentImageIndex]}')`}
        bgPos='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        transition='background-image 0.5s ease-in-out'
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'rgba(0, 0, 0, 0.5)',
        }}
      />
      <VStack gap={4} textAlign='center' color='white' zIndex={1} p={10}>
        <Heading as='h1' size='2xl'>
          Luxury & Performance Motorcycles for Rent & Sale in Venice, CA
        </Heading>
        <Text fontSize='xl'>
          Experience the thrill of the ride with top brands like Ducati, Harley,
          MV Agusta, BMW and more.
        </Text>
        <Button bg='blue.500' size='lg' asChild>
          <Link href='/catalogue'>Explore Bikes</Link>
        </Button>
      </VStack>
    </Box>
  )
}

export default Hero
