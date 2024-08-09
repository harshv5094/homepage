'use client'
import Layout from '@/components/layout/article'
import { useEffect } from 'react'

function Projects() {
  useEffect(() => {
    document.title = 'Projects - Harsh Vyapari'
  }, [])
  return (
    <Layout>
      <h1> This is the projects page</h1>
    </Layout>
  )
}

export default Projects
