'use client'
import Image from 'next/image'
import { MotionViewport, varFade } from './animate'
import { m } from 'framer-motion'
import Hero from './features/Home/Hero'
import AWSCapabilities from './features/Home/AWSCapabilities'
import WhyUs from './features/Home/WhyUs'
import Certificate from './features/Home/Certificate'
import CaseStudy from './features/Home/CaseStudy'
import Script from 'next/script'
import { ANALYTICS_ID, SLEEK_PRODUCT_ID } from '@/confg'
import CookieContent from './components/CookieContent'
import { useEffect } from 'react'
import { getCookie } from '@/cookie/utils'
import { pageview } from '@/gtag'
import Contact from './features/Home/Contact'
import Header from './components/Header'

export default function Home() {
  const accept = typeof window !== 'undefined' && getCookie('AcceptCookie')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.$sleek = []
      window.SLEEK_PRODUCT_ID = Number(SLEEK_PRODUCT_ID ?? '0')
      ;(function () {
        var d = document
        var s = d.createElement('script')
        s.src = 'https://client.sleekplan.com/sdk/e.js'
        s.async = true
        d.getElementsByTagName('head')[0].appendChild(s)
      })()
    }
  }, [])

  useEffect(() => {
    if (accept !== null && window) pageview(new URL(window.location.pathname))
  }, [accept])
  return (
    <main className='overflow-hidden'>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            'analytics_storage': 'denied'
          });
          gtag('config', '${ANALYTICS_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Script
        src='https://www.google-analytics.com/analytics.js'
        strategy='afterInteractive'
      />
      <Header />
      <CookieContent />
      <Hero />
      <AWSCapabilities />
      <WhyUs />
      <Certificate />
      <CaseStudy />
      <Contact />
    </main>
  )
}
