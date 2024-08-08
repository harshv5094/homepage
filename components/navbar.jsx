import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

const Navbar = () => {
  return (
    <Box as="nav" position={'fixed'} w={'full'} zIndex={2}>
      <Container display={'flex'} p={2} maxW="container.xl">
        <Flex align="center" mr={5}>
          <Heading as={'h1'} size={'lg'}>
            <Logo />
          </Heading>
        </Flex>

        <Box flex={1} align="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
