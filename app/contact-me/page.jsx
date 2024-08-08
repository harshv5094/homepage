'use client'
import Layout from '@/components/layout/article'
import Main from '@/components/layout/main'
import { useEffect } from 'react'

function ContactMe() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Contact Me'
  }, [])
  return (
    <Main>
      <Layout>
        <h1>This is contact me page</h1>
      </Layout>
    </Main>
  )
}

export default ContactMe
