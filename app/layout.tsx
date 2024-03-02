import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import GlobalState from '@/context'
import Chat from '@/components/chat'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <GlobalState>
        <Navbar/>
          <main>
            {children}
            {/* <Chat/> */}
          </main>
          <Toaster />
          <Footer/>
      </GlobalState>
      </body>
    </html>
  )
}
