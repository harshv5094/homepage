'use client'
import Layout from '@/components/layout/article'
import { useEffect } from 'react'

function Projects() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Projects'
  }, [])
  return (
    <Layout>
      <h1> This is the projects page</h1>
    </Layout>
  )
}

export default Projects
