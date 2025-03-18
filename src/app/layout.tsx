import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './lib/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CustomCursor from './components/ui/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yogesh Parashar | AI Enthusiast & Frontend Developer',
  description: 'Portfolio of Yogesh Parashar, a Computer Science and Engineering (AI) student and emerging full-stack developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <CustomCursor />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
