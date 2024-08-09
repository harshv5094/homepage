'use client'
import Layout from '@/components/layout/article'
import ProfilePic from '@/public/images/harsh.jpg'
import PersonalInfo from '@/public/personal-info.svg'
import { Image } from '@chakra-ui/next-js'
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'

function Home() {
  return (
    <Layout>
      <Box as="section" mt={{ base: 5, md: 14 }}>
        <Grid
          pt={{ base: 2, md: 8 }}
          templateRows={{ base: 'repeat(2, 0.1fr)', md: 'none' }}
          templateColumns={{ base: 'none', md: 'repeat(2, 1fr)' }}
          gap={{ base: 4, md: 0 }}
        >
          <GridItem
            align={{ base: 'center', md: 'left' }}
            order={{ base: 2, md: 1 }}
          >
            <Box mt={{ md: '8em' }} textAlign={'center'}>
              <Box as="p">Hello, I&apos;m</Box>
              <Heading as={'h1'} fontSize={{ base: '2em', md: '4.2em' }}>
                Harsh Vyapari
              </Heading>
              <Box mt={{ md: 2 }} as="p">
                A computer science enthusiast based in India
              </Box>
            </Box>
          </GridItem>
          <GridItem align={'center'} order={{ base: 1, md: 2 }}>
            <Image
              src={ProfilePic}
              borderRadius={'10px'}
              width={{ base: '15em', md: '16em' }}
              height={'29em'}
              alt="Image"
            />
          </GridItem>
        </Grid>
        <Grid
          pt={{ base: '5em', md: '9em' }}
          templateRows={{ base: 'repeat(2, 0.5fr)', md: 'none' }}
          templateColumns={{ base: 'none', md: 'repeat(2, 1fr)' }}
          gap={{ base: 8, md: 20 }}
        >
          <GridItem>
            <Heading as={'h2'} display={{ base: 'inline-block', md: 'none' }}>
              About Me
            </Heading>
            <Image src={PersonalInfo} borderRadius={'10px'} alt="Image" />
          </GridItem>
          <GridItem>
            <Heading as={'h2'} display={{ base: 'none', md: 'inline-block' }}>
              About Me
            </Heading>
            <Box pt={2} as="p">
              I&apos;m a developer and computer science enthusiast based in
              India with a deep passion for web development, Linux and books. My
              love for linux fuels my dedication to open-source projects, and as
              a Neovim nerd. I&apos;m always finding new ways to enhance my
              coding workflow. I also have a deep passion for reading,
              constantly exploring new worlds through books, and I enjoy
              classical music, especially Bollywood melodies, which inspire my
              creativity.
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  )
}

export default Home
