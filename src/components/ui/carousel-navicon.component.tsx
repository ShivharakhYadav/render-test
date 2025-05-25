import { IconButton, IconButtonProps } from '@chakra-ui/react'
import { TEXT_COLOR } from '../../utils/constant.utils'

interface CarouselNavButtonProps {
  icon: React.ReactElement
  position: 'left' | 'right'
  buttonRef: React.Ref<HTMLButtonElement>
  ariaLabel: string
  iconSize: IconButtonProps['size']
}

const CarouselNavButton = ({
  icon,
  position,
  buttonRef,
  ariaLabel,
  iconSize,
}: CarouselNavButtonProps) => {
  return (
    <IconButton
      ref={buttonRef}
      position='absolute'
      top='50%'
      {...(position === 'left' ? { left: '10px' } : { right: '10px' })}
      height='48px'
      width='31px'
      color={TEXT_COLOR}
      backgroundColor='rgba(255,255,255,0.8)'
      transform='translateY(-50%)'
      aria-label={ariaLabel}
      size={iconSize}
      borderRadius='full'
      bg='whiteAlpha.800'
      _hover={{ bg: 'whiteAlpha.900' }}
      zIndex={2}
    >
      {icon}
    </IconButton>
  )
}

export default CarouselNavButton
