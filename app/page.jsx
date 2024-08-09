'use client'
import Layout from '@/components/layout/article'
import { GridBox, GridBoxItem } from '@/components/layout/grid-box'
import ProfilePic from '@/public/images/harsh.jpg'
import { Image } from '@chakra-ui/next-js'
import { Box, Heading } from '@chakra-ui/react'

function Home() {
  return (
    <Layout>
      <Box as="section" mt={{ base: 5, md: 14 }}>
        <GridBox gap={{ base: 4, md: 0 }}>
          <GridBoxItem
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
            <Image
              src={ProfilePic}
              borderRadius={'10px'}
              boxSize={'sm'}
              width={{ base: '15em', md: '16em' }}
              height={'28em'}
              alt="Image"
            />
          </GridBoxItem>
        </GridBox>
      </Box>
    </Layout>
  )
}

export default Home
