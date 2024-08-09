'use client'
import Layout from '@/components/layout/article'
import { useEffect } from 'react'

function ContactMe() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Contact Me'
  }, [])
  return (
    <Layout>
      <h1>This is contact me page</h1>
    </Layout>
  )
}

export default ContactMe
