import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const styles = {
  global: props => ({
    body: {
      bg: mode('#f5f5f5', '#02111b')(props)
    }
  })
}

const fonts = {
  heading: 'Noto Serif, sans-serif',
  body: 'Inter, sans-serif'
}

const theme = extendTheme({ config, styles, fonts })

export default theme
