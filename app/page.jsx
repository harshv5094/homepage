import Layout from '@/components/layout/article'
import { GridBox, GridBoxItem } from '@/components/layout/grid-box'

function Home() {
  return (
    <Layout>
      <GridBox>
        <GridBoxItem order={{ base: 2, md: 1 }}>Test 1</GridBoxItem>
        <GridBoxItem order={{ base: 1, md: 2 }}>Test 2</GridBoxItem>
      </GridBox>
    </Layout>
  )
}

export default Home
