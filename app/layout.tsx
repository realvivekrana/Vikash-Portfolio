import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vikash Rana - Interior Designer Portfolio',
  description: 'Premium interior design services for residential and commercial spaces by Vikash Rana',
  keywords: 'interior design, luxury interiors, residential design, commercial design, vikash rana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
