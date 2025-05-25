'use client'

import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'var(--font-montserrat)' },
        body: { value: 'var(--font-roboto)' },
      },
    },
  },
})
