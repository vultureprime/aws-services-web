'use client'
import Image from 'next/image'
import { MotionViewport, varFade } from '../../animate'

export default function Certificate() {
  return (
    <div className='bg-plant bg-cover w-full h-fit'>
      <div className='px-6 lg:px-10 py-20 max-w-7xl  mx-auto'>
        <MotionViewport
          variants={varFade().in}
          className='flex flex-col lg:flex-row gap-y-4 lg:items-center lg:justify-between'
        >
          <p className='animate-text  text-transparent   bg-clip-text bg-gradient-to-r from-dodger-500 via-cornflower-500 to-sky-500 text-2xl lg:text-4xl font-semibold'>
            Trust us,
            <br /> Empower Your Success.
          </p>
          <p className=' text-sm lg:text-base max-w-[420px] text-start'>
            <span className='text-cornflower-500 font-medium'>
              Vulture Prime
            </span>{' '}
            เราพร้อมที่จะเป็น Partner ของคุณ
            เรามีทีมผู้เชี่ยวชาญที่พร้อมจะแนะนำและช่วยคุณในการตัดสินใจเลือกบริการคลาวด์ที่เหมาะสมสำหรับธุรกิจของคุณ
          </p>
        </MotionViewport>
        <MotionViewport
          variants={varFade().in}
          className='mt-20 flex flex-col items-center gap-y-8 justify-between'
        >
          <p className='text-center text-cornflower-800 text-2xl lg:text-4xl font-semibold'>
            AWS Certifications
          </p>
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
        <MotionViewport
          variants={varFade().in}
          className='mt-40 flex flex-col items-center gap-y-8 justify-between'
        >
          <p className='text-center text-cornflower-800 text-2xl lg:text-4xl font-semibold'>
            FinOps Certification
          </p>
          <div className='flex   items-center justify-center gap-x-2'>
            by{' '}
            <Image
              src='/images/linux.png'
              alt='linux'
              width={128}
              height={41}
              priority
            />
          </div>
          <div className='mt-8 flex items-center justify-center gap-8'>
            <Image
              src='/images/cer-4.png'
              alt='cer-4'
              width={206}
              height={284}
              priority
            />
          </div>
        </MotionViewport>
      </div>
    </div>
  )
}
