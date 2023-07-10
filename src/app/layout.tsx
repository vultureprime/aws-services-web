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
  title: 'AWS Services - Vultureprime',
  description:
    'VulturePrime ผู้ให้บริการด้านการพัฒนา และให้คำปรึกษาของ AWS ผ่านผู้เชี่ยวชาญที่ได้รับการรับรองจาก AWS',
  icons: `${APP_URL}/logo.svg`,
  openGraph: {
    type: 'website',
    title: 'AWS Services - Vultureprime',
    description:
      'VulturePrime ผู้ให้บริการด้านการพัฒนา และให้คำปรึกษาของ AWS ผ่านผู้เชี่ยวชาญที่ได้รับการรับรองจาก AWS',
    siteName: 'AWS Services - Vultureprime',
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
    title: 'AWS Services - Vultureprime',
    description:
      'VulturePrime ผู้ให้บริการด้านการพัฒนา และให้คำปรึกษาของ AWS ผ่านผู้เชี่ยวชาญที่ได้รับการรับรองจาก AWS',
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
