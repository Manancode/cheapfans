import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CheapFans',
  description: 'Which Celeb has best fans!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Celebrity Voting</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-200 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-600">
            © {new Date().getFullYear()} Celebrity Voting SaaS. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}