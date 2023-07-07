'use client'
import Image from 'next/image'
import { MotionViewport, varFade } from '../../animate'
import Link from 'next/link'
import { CONTACT_URL } from '@/confg'

export default function Hero() {
  return (
    <div className='bg-cloud bg-cover w-full h-fit'>
      <MotionViewport
        variants={varFade().inUp}
        className='min-h-screen items-center grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-10 py-20 max-w-screen-2xl  mx-auto gap-x-[96px]'
      >
        <div className='text-center flex flex-col items-center gap-y-6 '>
          <Image
            src='/images/aws.png'
            alt='aws'
            width={64}
            height={50}
            priority
          />

          <h1 className='animate-text font-bold text-4xl lg:text-6xl text-transparent  bg-clip-text bg-gradient-to-r from-dodger-500 via-cornflower-500 to-sky-500'>
            AWS Services
          </h1>
          <p className='lg:text-lg max-w-[500px] mt-4'>
            <span className='font-semibold text-dodger-500'>
              {' '}
              Amazon Services
            </span>{' '}
            บนระบบคลาวด์ เป็นคลาวด์ที่ได้รับมาตรฐาน&nbsp;
            <span className='font-semibold text-cornflower-500'>
              Global Cloud
            </span>
            &nbsp; ที่ได้รับความนิยมมากที่สุด และ
            <span className='font-semibold text-cornflower-500'>
              Vulture Prime
            </span>
            &nbsp; พร้อมที่จะช่วยออกแบบ ให้คำปรึกษาและวางแผน Solution
            ที่เหมาะกับการใช้งานขององค์กรคุณ
          </p>
          <Link
            className='px-6 py-2 bg-blue-500 rounded-lg justify-center items-center'
            href={`${CONTACT_URL}`}
          >
            <div className='text-white text-lg '>พูดคุยกับเรา</div>
          </Link>
        </div>
        <Image
          src='/images/application.png'
          alt='application'
          priority
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }} // optional
        />
      </MotionViewport>
    </div>
  )
}
