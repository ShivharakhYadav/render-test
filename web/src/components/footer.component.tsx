import { Box, Flex, Link, Text } from '@chakra-ui/react'
import RouterLink from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Container from './ui/container.component'

const Footer: React.FC = () => {
  return (
    <Box as='footer' bg='gray.100' py={4}>
      <Container>
        <Flex direction='column' align='center'>
          <Flex mb={4}>
            <Link as={RouterLink} href='/faq' mx={2}>
              FAQ
            </Link>
            <Link as={RouterLink} href='/contact' mx={2}>
              Contact
            </Link>
            <Link as={RouterLink} href='/terms-and-conditions' mx={2}>
              Terms of Service
            </Link>
            <Link as={RouterLink} href='/terms-and-conditions' mx={2}>
              Privacy Policy
            </Link>
          </Flex>
          <Flex mb={4}>
            <Link
              href='https://instagram.com/motovenice'
              target='_blank'
              rel='noopener noreferrer'
              mx={2}
            >
              <FaInstagram />
            </Link>
            <Link
              href='https://twitter.com/motovenice'
              target='_blank'
              rel='noopener noreferrer'
              mx={2}
            >
              <FaTwitter />
            </Link>
            <Link
              href='https://facebook.com/motovenice'
              target='_blank'
              rel='noopener noreferrer'
              mx={2}
            >
              <FaFacebook />
            </Link>
          </Flex>
          <Text>&copy; 2025 Moto Venice. All rights reserved.</Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
