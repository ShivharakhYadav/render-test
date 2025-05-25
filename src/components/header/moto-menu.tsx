'use client'
import { Menu, Portal } from '@chakra-ui/react'
import Link from 'next/link'
import { AiFillBook, AiFillHome } from 'react-icons/ai'
import { FaMotorcycle, FaQuestionCircle, FaUser } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'

const NAVIGATION_MENU_ITEMS = [
  { key: 'home', label: 'Home', href: '/', icon: <AiFillHome /> },
  {
    key: 'catalog',
    label: 'Catalog',
    href: '/bikes',
    icon: <AiFillBook />,
  },
  { key: 'account', label: 'Account', href: '/account', icon: <FaUser /> },
  { key: 'faqs', label: 'FAQs', href: '/faq', icon: <FaQuestionCircle /> },
  { key: 'trips', label: 'Trips', href: '/trips', icon: <FaMotorcycle /> },
]

export const MotoMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <HiMenu cursor='pointer' />
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {NAVIGATION_MENU_ITEMS.map((navigationItem) => {
              return (
                <Menu.Item
                  key={navigationItem.key}
                  value={navigationItem.key}
                  asChild
                >
                  <Link
                    href={navigationItem.href}
                    style={{ display: 'flex', gap: 2 }}
                  >
                    {navigationItem.icon}
                    {navigationItem.label}
                  </Link>
                </Menu.Item>
              )
            })}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
