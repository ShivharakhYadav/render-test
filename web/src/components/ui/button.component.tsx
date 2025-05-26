'use client'
import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react'
import {
  BUTTON_BG_COLOR,
  BUTTON_FONT_SIZE,
  BUTTON_TEXT_COLOR,
} from '../../utils/constant.utils'

export const Button: React.FC<ButtonProps> = ({
  bg = BUTTON_BG_COLOR,
  ...props
}) => {
  return (
    <ChakraButton
      w='100%'
      height='40px'
      px='8px'
      borderRadius='22px'
      bg={bg}
      color={BUTTON_TEXT_COLOR}
      fontSize={BUTTON_FONT_SIZE}
      outline='none'
      fontWeight='normal'
      _focus={{
        boxShadow: 'none',
        outline: 'none',
      }}
      _hover={{
        bg: bg,
        boxShadow: 'none',
        outline: 'none',
      }}
      {...props}
    />
  )
}
