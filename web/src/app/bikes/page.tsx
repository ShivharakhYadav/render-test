'use client'
import Footer from '@/components/footer.component'
import Header from '@/components/header/header.component'
import FeaturedBikes from '@/components/home/featured-bikes.component'
import DateInput from '@/components/ui/date-input.component'
import Heading from '@/components/ui/heading.component'
import SelectInput from '@/components/ui/select.component'
import { BRAND_OPTIONS, TYPE_OPTIONS } from '@/fake-data/fake-data'
import { GetBikeArgs } from '@/interfaces/bike.interface'
import { Box, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

const Catalogue: React.FC = () => {
  const [filters, setFilters] = useState<GetBikeArgs>({
    model: undefined,
    type: undefined,
    startTime: undefined,
    endTime: undefined,
  })

  const handleChange = <K extends keyof GetBikeArgs>(
    name: K,
    value: GetBikeArgs[K]
  ) => {
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <Header />
      <Box p={4} rounded='md' boxShadow='md' border='1px solid #eee'>
        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent='space-between'
          gap={6}
        >
          <Box flex={1}>
            <Heading size='sm'>Filters</Heading>
            <HStack gap={3} mt={2}>
              <SelectInput
                name='model'
                placeholder='model'
                options={BRAND_OPTIONS}
                size='sm'
                onChange={(e) => handleChange('model', e.value[0])}
              />
              <SelectInput
                name='type'
                placeholder='Type'
                options={TYPE_OPTIONS}
                size='sm'
                onChange={(e) => handleChange('type', e.value[0])}
              />
            </HStack>
          </Box>

          <Box flex={1}>
            <Heading size='sm'>Rental Availability</Heading>
            <HStack gap={3} mt={2}>
              <DateInput
                name='startDate'
                onChange={(e) =>
                  handleChange('startTime', (e as Date).getTime())
                }
              />
              <DateInput
                name='endDate'
                onChange={(e) => {
                  handleChange('endTime', (e as Date).getTime())
                }}
              />
            </HStack>
          </Box>
        </Box>

        <Box borderBottom='2px solid #ccc' width='100%' mt={4} />
      </Box>
      <FeaturedBikes {...filters} />
      <Footer />
    </div>
  )
}

export default Catalogue
