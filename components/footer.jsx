import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize={'small'}>
      &copy; {new Date().getFullYear()} Harsh Vyapari, All rights reserved
    </Box>
  )
}

export default Footer
