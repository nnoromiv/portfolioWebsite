import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { Providers } from '@/components/providers'
import Preloader from '@/components/preloader'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Christian Nnorom — Software Engineer',
  description:
    'Portfolio of Christian O. Nnorom — Software Engineer specialising in Backend, Frontend, Cloud Infrastructure, AI/ML, and Mobile Development.',
  keywords: ['Software Engineer', 'Backend Engineer', 'Frontend Engineer', 'ML Engineer', 'Node.js', 'React', 'AWS', 'Christian Nnorom'],
  authors: [{ name: 'Christian O. Nnorom' }],
  openGraph: {
    title: 'Christian Nnorom — Software Engineer',
    description: 'Portfolio of Christian O. Nnorom — Software Engineer (Backend + Frontend).',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.variable} font-sans`}>
        <Providers>
          <Preloader />
          {children}
        </Providers>
      </body>
    </html>
  )
}
