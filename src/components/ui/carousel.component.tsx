'use client'
import { Box, IconButtonProps, useBreakpointValue } from '@chakra-ui/react'
import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CAROUSEL_ICON_FONT_SIZE } from '../../utils/constant.utils'
import CarouselNavButton from './carousel-navicon.component'

interface CarouselProps {
  children: React.ReactNode
  height?: string
  borderRadius?: string
  spaceBetween?: number
  isInfinite?: boolean
}

const Carousel = ({
  children,
  height = '250px',
  borderRadius,
  spaceBetween = 10,
  isInfinite = false,
}: CarouselProps) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const iconSize: IconButtonProps['size'] = useBreakpointValue({
    base: 'sm',
    '2xs': '2xs',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
  })

  return (
    <Box
      position='relative'
      overflow='hidden'
      h={height}
      borderRadius={borderRadius}
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={isInfinite}
        style={{ width: '100%', height: '100%' }}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <SwiperSlide key={index}>
              <Box w='100%' h='100%'>
                {child}
              </Box>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <Box w='100%' h='100%'>
              {children}
            </Box>
          </SwiperSlide>
        )}
      </Swiper>

      <CarouselNavButton
        icon={<FaChevronLeft fontSize={CAROUSEL_ICON_FONT_SIZE} />}
        position='left'
        buttonRef={prevRef}
        ariaLabel='Previous'
        iconSize={iconSize}
      />

      <CarouselNavButton
        icon={<FaChevronRight fontSize={CAROUSEL_ICON_FONT_SIZE} />}
        position='right'
        buttonRef={nextRef}
        ariaLabel='Next'
        iconSize={iconSize}
      />
    </Box>
  )
}

export default Carousel
