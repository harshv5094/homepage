'use client'
import Main from '@/components/layout/main'
import { useEffect } from 'react'

function ContactMe() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Contact Me'
  }, [])
  return (
    <Main>
      <h1>This is contact me page</h1>
    </Main>
  )
}

export default ContactMe
