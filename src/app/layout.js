import { Inter, Syne } from 'next/font/google'

import './globals.css'
import Header from '@/components/Shared/Header'

// const inter = Inter({ subsets: ['latin'] })
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'Yum Yum Bites',
  description: 'Food Recipe Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">

      <body className={`${syne.className}`}>
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
