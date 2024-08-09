import { Grid, GridItem } from '@chakra-ui/react'

const GridBox = ({ children, ...pageProps }) => {
  return (
    <Grid
      templateRows={{ base: 'repeat(2, 1fr)', md: 'none' }}
      templateColumns={{ base: 'none', md: 'repeat(2, 1fr)' }}
      {...pageProps}
    >
      {children}
    </Grid>
  )
}

const GridBoxItem = ({ children, ...pageProps }) => {
  return <GridItem {...pageProps}>{children}</GridItem>
}

export { GridBox, GridBoxItem }
