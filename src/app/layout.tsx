import { twMerge } from 'tailwind-merge'
import './globals.css'
import { Prompt } from 'next/font/google'
import MotionLazyContainer from './animate/MotionLazyContainer'
import { Metadata } from 'next'
import { APP_URL } from '@/confg'

const prompt = Prompt({
  subsets: ['latin', 'thai'],
  variable: '--font-pt_san',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'คำนวณราคาเว็บไซต์กับ Calculator Pro ',
  description:
    ' ถ้าอยากจะพัฒนาเว็บไซต์จะมีค่าใช้จ่าย และ เวลา เท่าไหร่บ้างนะ? มาคำนวณราคาเว็บไซต์กับ Calculator Pro กันเถอะ',
  icons: `${APP_URL}/logo.svg`,
  openGraph: {
    type: 'website',
    title: 'คำนวณราคาเว็บไซต์กับ Calculator Pro ',
    description:
      ' ถ้าอยากจะพัฒนาเว็บไซต์จะมีค่าใช้จ่าย และ เวลา เท่าไหร่บ้างนะ? มาคำนวณราคาเว็บไซต์กับ Calculator Pro กันเถอะ',
    siteName: 'คำนวณราคาเว็บไซต์กับ Calculator Pro ',
    images: [
      {
        url: `${APP_URL}/images/thumbnail.jpg`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    title: 'คำนวณราคาเว็บไซต์กับ Calculator Pro ',
    description:
      ' ถ้าอยากจะพัฒนาเว็บไซต์จะมีค่าใช้จ่าย และ เวลา เท่าไหร่บ้างนะ? มาคำนวณราคาเว็บไซต์กับ Calculator Pro กันเถอะ',
    images: `${APP_URL}/images/thumbnail.jpg`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={twMerge(prompt.className)}>
        <MotionLazyContainer>{children}</MotionLazyContainer>
      </body>
    </html>
  )
}
