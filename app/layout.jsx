import { NextAuthProvider } from './Providers'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '300', subsets: ['latin'] })

export const metadata = {
  title: 'Clock In',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={poppins.className} class="w-screen h-screen flex">
          {children}
        </body>
      </NextAuthProvider>
    </html>
  )
}
