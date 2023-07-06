'use client'
import Image from 'next/image'
import { MotionViewport, varFade } from './animate'
import { m } from 'framer-motion'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <div className='bg-cloud bg-cover w-full h-fit'>
        <MotionViewport
          variants={varFade().inUp}
          className='min-h-screen items-center grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-10 py-20 max-w-7xl  mx-auto gap-x-[96px]'
        >
          <div className='text-center flex flex-col items-center gap-y-6 '>
            <Image
              src='/images/aws.png'
              alt='aws'
              width={64}
              height={50}
              priority
            />

            <h1 className='animate-text --font-pt_san font-bold text-4xl lg:text-6xl text-transparent  bg-clip-text bg-gradient-to-r from-dodger-500 via-cornflower-500 to-sky-500'>
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
          </div>
          <Image
            src='/images/application.png'
            alt='application'
            width={708}
            height={558}
            priority
            className='mx-auto'
          />
        </MotionViewport>
      </div>
      <MotionViewport className='bg-cornflower-800 w-full text-white'>
        <div className='px-6 lg:px-10 py-20 max-w-7xl  mx-auto'>
          <m.div
            variants={varFade().in}
            className='flex  flex-col  lg:flex-row gap-y-6 max-w-7xl  mx-auto gap-x-[96px] pb-20'
          >
            <div className='flex  flex-col gap-y-4'>
              <p className='text-sky-400 text-sm lg:text-base'>
                AWS Services Capabilities
              </p>
              <h2 className='text-2xl lg:text-4xl whitespace-nowrap'>
                คุณสมบัติหลักของ
                <br />
                AWS Services
              </h2>
            </div>
            <Image
              src='/images/system.png'
              alt='system-cloud'
              width={668}
              height={510}
              priority
              className='w-full lg:mx-auto lg:max-w-[668px] rounded-2xl shadow-lg aspect-video object-cover object-center'
            />
          </m.div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4 justify-center '>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <m.div
                key={item}
                variants={varFade().in}
                className='flex flex-col gap-y-6'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='49'
                  height='48'
                  viewBox='0 0 49 48'
                  fill='none'
                >
                  <g clip-path='url(#clip0_4_309)'>
                    <path
                      d='M26.162 19.651C26.902 19.877 27.687 20 28.5 20C32.918 20 36.5 16.418 36.5 12C36.5 7.582 32.918 4 28.5 4C26.288 4 24.286 4.898 22.838 6.349C22.098 6.123 21.314 6 20.5 6C16.082 6 12.5 9.582 12.5 14C12.5 18.418 16.082 22 20.5 22C22.712 22 24.714 21.102 26.162 19.651ZM28.5 8C30.706 8 32.5 9.794 32.5 12C32.5 14.206 30.706 16 28.5 16C26.294 16 24.5 14.206 24.5 12C24.5 9.794 26.295 8 28.5 8ZM16.5 14C16.5 11.794 18.294 10 20.5 10C20.588 10 20.669 10.02 20.756 10.026C20.595 10.658 20.5 11.317 20.5 12C20.5 14.079 21.3 15.967 22.6 17.389C21.988 17.77 21.273 18 20.5 18C18.295 18 16.5 16.206 16.5 14Z'
                      fill='white'
                    />
                    <path
                      d='M30.5 24C24.548 24 19.687 25.913 17.6 28.777C16.55 27.863 15.738 26.964 15.3 26.398C13.314 23.755 9.54598 23.217 6.89998 25.2C4.25398 27.184 3.71498 30.953 5.70098 33.6C6.01898 34.025 13.631 44 24.5 44H44.5V32C44.5 27.439 38.481 24 30.5 24ZM8.89998 31.2C8.23798 30.318 8.41798 29.061 9.29698 28.4C9.65698 28.13 10.08 28.001 10.498 28.001C11.106 28.001 11.705 28.275 12.094 28.792C12.147 28.864 17.526 36 24.5 36H32.5V34V32H24.5C23.271 32 22.04 31.615 20.89 31.038C22.018 29.573 25.525 28 30.5 28C36.604 28 40.5 30.369 40.5 32V40H38.5H24.5C15.607 40 9.16898 31.559 8.89998 31.2Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_4_309'>
                      <rect
                        width='48'
                        height='48'
                        fill='white'
                        transform='translate(0.5)'
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className='text-sky-400 text-lg lg:text-2xl font-medium'>
                  Pay as you go{' '}
                </p>
                <p className='max-w-[178px] text-sm lg:text-base'>
                  รองรับการใช้งานแบบ Pay as you go จ่ายเท่าที่ใช้
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </MotionViewport>
    </main>
  )
}
