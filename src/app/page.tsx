'use client'
import Image from 'next/image'
import { MotionViewport, varFade } from './animate'
import { m } from 'framer-motion'
import Hero from './features/Home/Hero'
import AWSCapabilities from './features/Home/AWSCapabilities'
import WhyUs from './features/Home/WhyUs'
import Certificate from './features/Home/Certificate'
import CaseStudy from './features/Home/CaseStudy'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <AWSCapabilities />
      <WhyUs />
      <Certificate />
      <CaseStudy />
    </main>
  )
}
