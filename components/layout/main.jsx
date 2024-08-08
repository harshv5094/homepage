'use client'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Navbar from '../navbar'
const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Navbar />
      <Container pt={14} maxW={'container.xl'} px={{ base: 4, md: 12 }}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
