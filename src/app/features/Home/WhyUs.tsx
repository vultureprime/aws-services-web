'use client'
import Image from 'next/image'
import { MotionViewport, varFade } from '../../animate'
import { m } from 'framer-motion'

const key_feature = [
  { id: 0, title: 'Configuration Services', icon: '/images/key1.svg' },
  { id: 1, title: 'Monitoring and Alerting', icon: '/images/key2.svg' },
  {
    id: 2,
    title: 'Migration / Development Services',
    icon: '/images/key3.svg',
  },
  { id: 3, title: 'Solution Architecture', icon: '/images/key4.svg' },
  { id: 4, title: 'Account Review ', icon: '/images/key5.svg' },
  { id: 5, title: 'FinOps', icon: '/images/key6.svg' },
]
export default function WhyUs() {
  return (
    <div className='bg-white w-full'>
      <div className='px-6 lg:px-10 py-20 max-w-7xl  mx-auto'>
        <MotionViewport>
          <m.div
            variants={varFade().in}
            className='flex flex-col gap-y-8 pb-10'
          >
            <div className='flex  flex-col items-center justify-center gap-y-6'>
              <p className='animate-text  text-transparent text-center  bg-clip-text bg-gradient-to-r from-dodger-500 via-cornflower-500 to-sky-500 text-2xl lg:text-4xl font-semibold'>
                ทำไมถึงต้องเป็น
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
                  Vulture Prime
                </span>{' '}
                พร้อมที่จะช่วยออกแบบ ให้คำปรึกษาและวางแผน Solution
                ที่เหมาะกับการใช้งานขององค์กรคุณ
              </p>
            </div>
          </m.div>
        </MotionViewport>
        <MotionViewport>
          <m.div
            variants={varFade().in}
            className='grid sm:grid-cols-2 gap-x-16 gap-y-8 mt-10'
          >
            <Image
              src='/images/expert.png'
              alt='expert'
              width={380}
              height={320}
              priority
              className='mx-auto lg:mr-0   rounded-2xl  object-cover object-center'
            />
            <div className='flex flex-col gap-y-6 justify-center'>
              <p className='text-cornflower-700 text-4xl font-semibold'>
                Expert
              </p>
              <p className='max-w-[396px]'>
                Expert เราคือผู้ให้บริการ AWS ในไทย
                ที่มีผู้เชี่ยวชาญในการออกแบบวางระบบและให้คำปรึกษาการจัดการคลาวด์
                AWS เช่น บริการ{' '}
                <span className='text-cornflower-500 font-medium'>
                  EC2, ELB, S3, VPC
                </span>{' '}
                และ{' '}
                <span className='text-cornflower-500 font-medium'>
                  Beanstalk
                </span>{' '}
                รวมถึงการใช้งานแบบ Multi Cloud
              </p>
            </div>
          </m.div>
        </MotionViewport>
        <MotionViewport>
          <m.div
            variants={varFade().in}
            className='grid   sm:grid-cols-2 gap-x-16 gap-y-8 mt-10'
          >
            <div className='order-2 sm:order-1 lg:ml-auto lg:mr-0 flex flex-col gap-y-6 justify-center'>
              <p className='text-cornflower-700 text-4xl font-semibold'>
                One Stop Service
              </p>
              <p className='max-w-[396px]'>
                เราสามารถให้บริการครบจบที่เดียว ในการให้คำปรึกษาและวางแผน
                ติดตั้งและดูแลระบบ AWS คลาวด์ แพลตฟอร์ม และ AWS โฮสติ้งทั้ง{' '}
                <span className='text-cornflower-500 font-medium'>
                  Infrastructure as a Service
                </span>{' '}
                และ{' '}
                <span className='text-cornflower-500 font-medium'>
                  Serverless
                </span>{' '}
                ให้คำปรึกษาการการทำ
              </p>
            </div>
            <Image
              src='/images/onestop.png'
              alt='onestop'
              width={380}
              height={320}
              priority
              className='order-1 sm:order-2 rounded-2xl  object-cover object-center'
            />
          </m.div>
        </MotionViewport>
        <MotionViewport>
          <m.div
            variants={varFade().in}
            className='grid sm:grid-cols-2 gap-x-16 gap-y-8 mt-10'
          >
            <Image
              src='/images/finops.png'
              alt='finops'
              width={380}
              height={320}
              priority
              className='mx-auto lg:mr-0   rounded-2xl  object-cover object-center'
            />
            <div className='flex flex-col gap-y-6 justify-center'>
              <p className='text-cornflower-700 text-4xl font-semibold'>
                FinOps
              </p>
              <p className='max-w-[396px]'>
                ให้คำปรึกษาการการทำ{' '}
                <span className='text-cornflower-500 font-medium'>
                  Cost Optimization
                </span>{' '}
                เพื่อให้ใช้งาน AWS อย่างคุ้มค่าและเต็มประสิทธิภาพมากที่สุด
              </p>
            </div>
          </m.div>
        </MotionViewport>
        <MotionViewport className='mt-20'>
          <p className='text-2xl font-semibold text-cornflower-800'>
            Key Features
          </p>
          <div className='mt-10 grid gap-x-8 grid-cols-2  gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            {key_feature.map((item) => (
              <m.div
                key={item.id}
                variants={varFade().in}
                className='w-[160px] h-[140px] mx-auto flex flex-col items-center gap-y-3 bg-sky-400 text-white p-4 rounded-xl'
              >
                <Image
                  src={item.icon}
                  alt={item.icon}
                  width={48}
                  height={48}
                  priority
                  className='h-8 w-8 lg:h-12 lg:w-12'
                />
                <p className=' text-sm lg:text-lg font-medium text-center'>
                  {item.title}
                </p>
              </m.div>
            ))}
          </div>
        </MotionViewport>
      </div>
    </div>
  )
}
