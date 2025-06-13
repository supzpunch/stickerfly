import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SessionWrapper from './components/SessionWrapper'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StickerFly - Custom Die-Cut Stickers',
  description: 'Premium quality custom die-cut stickers that last over 3 years. Weather-resistant and perfect for laptops, water bottles, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </SessionWrapper>
      </body>
    </html>
  )
} 