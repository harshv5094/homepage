'use client'
import Main from '@/components/layout/main'
import { useEffect } from 'react'

function Projects() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Projects'
  }, [])
  return (
    <Main>
      <h1> This is the projects page</h1>
    </Main>
  )
}

export default Projects
