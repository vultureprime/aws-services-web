'use client'
import Image from 'next/image'
import { MotionViewport, varFade } from '../../animate'
import { m } from 'framer-motion'

export default function Home() {
  return (
    <div className='px-6 lg:px-10 py-20 max-w-7xl  mx-auto'>
      <MotionViewport>
        <m.div variants={varFade().in} className='flex flex-col gap-y-8 pb-10'>
          <div className='flex  flex-col items-center justify-center gap-y-6'>
            <p className='animate-text  text-transparent text-center  bg-clip-text bg-gradient-to-r from-dodger-500 via-cornflower-500 to-sky-500 text-2xl lg:text-4xl font-semibold'>
              Explore The Case Study
              <br /> AWS Service
            </p>
            <Image
              src='/logo.png'
              alt='logo'
              width={120}
              height={48}
              priority
              className='mx-auto'
            />
            <p className=' text-sm lg:text-base max-w-[500px] text-center'>
              <span className='text-cornflower-500 font-medium'>
                Vulture Prime The Series
              </span>{' '}
              เรามุ่งเน้นในการให้บริการที่มีประสิทธิภาพ ความน่าเชื่อถือ
              และความน่าเป็นมืออาชีพที่สุด
            </p>
          </div>
        </m.div>
      </MotionViewport>
      <MotionViewport className='flex items-center justify-center'>
        <div className='mt-8 flex flex-wrap items-center justify-center gap-8'>
          <Image
            src='/images/cer-1.png'
            alt='cer-1'
            width={206}
            height={284}
            priority
          />
          <Image
            src='/images/cer-2.png'
            alt='cer-2'
            width={206}
            height={284}
            priority
          />
          <Image
            src='/images/cer-3.png'
            alt='cer-3'
            width={206}
            height={284}
            priority
          />
        </div>
      </MotionViewport>
    </div>
  )
}
