import { twMerge } from 'tailwind-merge'
import './globals.css'
import { Inter, Prompt } from 'next/font/google'

const prompt = Prompt({
  subsets: ['latin', 'thai'],
  variable: '--font-pt_san',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={twMerge(prompt.className)}>{children}</body>
    </html>
  )
}
