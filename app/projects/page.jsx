'use client'
import Layout from '@/components/layout/article'
import Main from '@/components/layout/main'
import { useEffect } from 'react'

function Projects() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Projects'
  }, [])
  return (
    <Main>
      <Layout>
        <h1> This is the projects page</h1>
      </Layout>
    </Main>
  )
}

export default Projects
