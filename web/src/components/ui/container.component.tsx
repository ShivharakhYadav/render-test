import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

const Container: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      maxW={{
        base: '100%',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }}
      mx='auto'
      px={4}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Container
