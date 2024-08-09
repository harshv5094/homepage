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
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const LinkItem = ({ href, children, ...props }) => {
  // HACK: usePathname for getting current router path
  const pathname = usePathname()

  // HACK: validating pathname with user href prop value
  const isActive = pathname === href

  // NOTE: a common hook variable for changing text color
  const colorHook = useColorModeValue('white', 'black')
  return (
    <Link
      href={href}
      p={2}
      bg={isActive && 'dodgerblue'}
      color={isActive && colorHook}
      {...props}
    >
      <motion.button
        whileHover={{ textDecoration: 'underline' }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.button>
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
      bg={useColorModeValue('#f5f5f540', '#202111B80')}
      zIndex={2}
    >
      <Container display={'flex'} p={2} maxW="container.xl">
        <Flex align="center" mr={5}>
          <Heading as={'h1'} size={'lg'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          flex={1}
          align="right"
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems={'center'}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href={'/projects'}>Projects</LinkItem>
          <LinkItem href={'/contact-me'}>Contact Me</LinkItem>
        </Stack>

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
                <MenuItem as={MenuLink} href="/contact-me">
                  Contact Me
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
