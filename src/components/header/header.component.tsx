'use client'
import { useUser } from '@auth0/nextjs-auth0'
import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Menu,
  Portal,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { MotoMenu } from './moto-menu'

const Header: React.FC = () => {
  const { user } = useUser()

  return (
    <Flex
      as='header'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding={['0.5rem', '1rem', '1.5rem']}
      bg='gray.100'
    >
      <Flex align='center' flex={1}>
        <Box display='block'>
          <MotoMenu />
        </Box>
        <Image
          src='/logo_black.png'
          alt='Moto Venice Logo'
          style={{
            marginRight: '10px',
            height: '30px',
            marginLeft: '10px',
          }}
          display={['none', 'block', 'block']}
        />
        <Image
          src='/black_logo_text.png'
          alt='Moto Venice'
          style={{
            display: 'block',
          }}
          height={['17px', '30px', '30px']}
        />
      </Flex>

      {!user ? (
        <Button
          asChild
          bg='brand.700'
          color='text.100'
          _hover={{ bg: 'brand.600' }}
          fontWeight='bold'
          px={[3, 4, 6]}
          py={[1, 1, 2]}
          size={['sm', 'md']}
          borderRadius='md'
          boxShadow='md'
          border='2px solid'
          borderColor='text.100'
        >
          <Link href='/auth/login'> Log In</Link>
        </Button>
      ) : (
        <>
          <Menu.Root>
            <Menu.Trigger asChild cursor='pointer' minW={0}>
              <Button p={0} bg='transparent' outline='none'>
                <Avatar.Root size='md'>
                  <Avatar.Fallback name='Test' />
                  <Avatar.Image src={user.picture} />
                </Avatar.Root>
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.ItemGroup>
                    <Flex direction='column' p={3}>
                      <Text fontWeight='bold'>{user.name}</Text>
                      <Text fontSize='sm' color='gray.600'>
                        {user.email}
                      </Text>
                    </Flex>
                  </Menu.ItemGroup>
                  <Menu.Separator />
                  <Menu.Item value='account' asChild>
                    <Link href='/account'>Account</Link>
                  </Menu.Item>
                  <Menu.Item value='account' asChild>
                    <Link href='/auth/logout'>Log Out</Link>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </>
      )}
    </Flex>
  )
}

export default Header
