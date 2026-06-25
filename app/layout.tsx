import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vikash Kumar Rana — Interior Designer | Gurgaon',
  description: 'Premium interior design services for residential and commercial spaces by Vikash Kumar Rana — Gurgaon, Haryana',
  keywords: 'interior design, luxury interiors, residential design, commercial design, Vikash Kumar Rana, Gurgaon',
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

