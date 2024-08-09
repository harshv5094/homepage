'use client'
import { Box, Button, Container, Divider, Heading } from '@chakra-ui/react'
import PageNotFound from '@/public/undraw_not_found_re_bh2e.svg'
import { useEffect } from 'react'
import { Image } from '@chakra-ui/next-js'
import { IoMdHome } from 'react-icons/io'
import { useRouter } from 'next/navigation'

function NotFound() {
  const router = useRouter()
  useEffect(() => {
    document.title = 'Not Found 😢'
  }, [])
  return (
    <Container align="center" maxW={'container.md'}>
      <Image src={PageNotFound} boxSize={'sm'} alt="Page Not Found" />
      <Heading as={'h1'} my={0} align="left">
        Not Found
      </Heading>
      <Box align="left" mb={2}>
        The page you are looking for, does not exist
      </Box>
      <Divider my={5} />
      <Button
        leftIcon={<IoMdHome />}
        colorScheme={'blue'}
        onClick={() => router.push('/')}
      >
        Return To Home
      </Button>
    </Container>
  )
}

export default NotFound
