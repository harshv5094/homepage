import { Inter, Noto_Serif } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-noto-serif'
})

const fonts = {
  inter,
  notoSerif
}

export default fonts
