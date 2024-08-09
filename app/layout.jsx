import Main from '@/components/layout/main'
import Provider from '@/components/provider'
import fonts from '@/lib/fonts.mjs'

export const metadata = {
  title: 'Harsh Vyapari - Home',
  description: 'My personal website'
}

function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fonts.inter.className} ${fonts.notoSerif.className}`}
    >
      <body>
        <Provider>
          <Main>{children}</Main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
