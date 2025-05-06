'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
// Optional: Import your custom theme if you have one
// import theme from '../theme'

export function ChakraCustomProvider({ 
    children
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider /* theme={theme} */ >
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
