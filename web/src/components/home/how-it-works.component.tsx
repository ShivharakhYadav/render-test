'use client'
import { Box, Heading, Icon, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaCalendar, FaMotorcycle, FaRoad } from 'react-icons/fa'

const HowItWorks: React.FC = () => {
  const steps = [
    { icon: FaMotorcycle, title: 'Choose Bike' },
    { icon: FaCalendar, title: 'Schedule Rental' },
    { icon: FaRoad, title: 'Ride Away!' },
  ]

  return (
    <Box py={8}>
      <Heading as='h2' size='xl' textAlign='center' mb={8}>
        How It Works
      </Heading>
      <SimpleGrid columns={3} gap={[2, 6, 10]}>
        {steps.map((step, index) => (
          <VStack key={index}>
            <Icon as={step.icon} w={[6, 8, 10]} h={[6, 8, 10]} />
            <Text fontWeight='bold' fontSize={['xs', 'sm', 'md']}>
              {step.title}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default HowItWorks
