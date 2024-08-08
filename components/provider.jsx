'use client'
import theme from '@/lib/themes.mjs'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

function Provider({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  )
}

export default Provider
