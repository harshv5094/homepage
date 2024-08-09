'use client'
import Layout from '@/components/layout/article'
import ProfilePic from '@/public/images/harsh.jpg'
import { Image } from '@chakra-ui/next-js'
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'

function Home() {
  return (
    <Layout>
      <Box as="section" mt={{ base: 5, md: 14 }}>
        <Grid
          templateRows={{ base: 'repeat(2, 0.1fr)', md: 'none' }}
          templateColumns={{ base: 'none', md: 'repeat(2, 1fr)' }}
          gap={{ base: 4, md: 0 }}
        >
          <GridItem
            align={{ base: 'center', md: 'left' }}
            order={{ base: 2, md: 1 }}
          >
            <Heading
              mt={{ md: '0.5em' }}
              as={'h1'}
              fontSize={{ base: '2em', md: '4.2em' }}
              lineHeight={{ md: 'sm' }}
            >
              Hi! I&apos;m a developer based in India
            </Heading>
          </GridBoxItem>
          <GridBoxItem align={'center'} order={{ base: 1, md: 2 }}>
          </GridItem>
          <GridItem align={'center'} order={{ base: 1, md: 2 }}>
            <Image
              src={ProfilePic}
              borderRadius={'10px'}
              boxSize={'sm'}
              width={{ base: '15em', md: '16em' }}
              height={'28em'}
              alt="Image"
            />
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  )
}

export default Home
