import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'
import { Link } from '@chakra-ui/next-js'
import { forwardRef } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, target, children, ...props }) => {
  return (
    <Link
      href={href}
      scroll={false}
      p={2}
      _hover={{
        bg: 'dodgerblue',
        color: useColorModeValue('white', 'black')
      }}
      _activeLink={{
        bg: 'dodgerblue',
        color: useColorModeValue('white', 'black')
      }}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => <Link ref={ref} {...props} />)

const Navbar = () => {
  return (
    <Box
      as="nav"
      position={'fixed'}
      w={'full'}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Container display={'flex'} p={2} maxW="container.xl">
        {/*NOTE: Left Side of Navbar*/}
        <Flex align="center" mr={5}>
          <Heading as={'h1'} size={'lg'}>
            <Logo />
          </Heading>
        </Flex>

        {/*NOTE: Center Side of Navbar*/}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems={'center'}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href={'/projects'}>Projects</LinkItem>
        </Stack>

        {/*NOTE: Right Side of Navbar*/}
        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={1} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={'outline'}
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/projects">
                  Projects
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
