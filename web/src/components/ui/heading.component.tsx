import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react'
import React from 'react'
import { TEXT_COLOR } from '../../utils/constant.utils'

const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <ChakraHeading
      size='sm'
      color={TEXT_COLOR}
      fontSize='20px'
      fontWeight='normal'
      lineHeight='28px'
      {...props}
    >
      {children}
    </ChakraHeading>
  )
}

export default Heading
