'use client'
import Image from 'next/image'
import { MotionViewport, varFade } from '../../animate'
import { m } from 'framer-motion'

const aws_capabilities = [
  {
    id: 0,
    title: 'Pay as you go',
    desc: 'รองรับการใช้งานแบบ Pay as you go จ่ายเท่าที่ใช้',
    icon: '/images/capability-0.svg',
  },
  {
    id: 1,
    title: 'Availability Zone',
    desc: 'มีการกระจายเก็บข้อมูล ไว้หลาย Availability Zone เพื่อความสเถียรภาพ',
    icon: '/images/capability-1.svg',
  },
  {
    id: 2,
    title: ' SLA',
    desc: 'รองรับ SLA 99.99%',
    icon: '/images/capability-2.svg',
  },
  {
    id: 3,
    title: 'Scalability',
    desc: 'รองรับการเข้าถึงได้รวดเร็วจากทั่วทุกมุมโลก',
    icon: '/images/capability-3.svg',
  },
  {
    id: 4,
    title: 'Encryption ',
    desc: 'หมดกังวลเรื่องของข้อมูลจะถูกเข้าถึงจากบุคคลภายนอกเพราะมีการเข้ารหัสตั้งแต่ต้นทาง (Encryption)',
    icon: '/images/capability-4.svg',
  },
  {
    id: 5,
    title: 'Data Security',
    desc: 'มีความสามารถในการป้องกันการเข้าถึงที่ไม่พึงประสงค์ทั้งเชิงรุกและรับ',
    icon: '/images/capability-5.svg',
  },
  {
    id: 6,
    title: 'Marketplace',
    desc: 'มี Marketplace ที่ช่วยให้ติดตั้ง Software ที่ต้องการได้อย่างง่ายดาย',
    icon: '/images/capability-6.svg',
  },
  {
    id: 7,
    title: ' Global',
    desc: 'ผ่านการรับรองมาตรฐานสากลต่างๆทั่วโลก',
    icon: '/images/capability-7.svg',
  },
]

export default function Home() {
  return (
    <MotionViewport className='bg-cornflower-800 w-full text-white'>
      <div className='px-6 lg:px-10 py-20 max-w-7xl  mx-auto'>
        <m.div
          variants={varFade().in}
          className='flex  flex-col  md:flex-row gap-y-6 max-w-7xl  mx-auto gap-x-[96px] pb-20'
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
            className='w-full lg:mx-auto md:max-w-[520px] lg:max-w-[668px] rounded-2xl shadow-lg aspect-video object-cover object-center'
          />
        </m.div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4 justify-center '>
          {aws_capabilities.map((item) => (
            <m.div
              key={item.id}
              variants={varFade().in}
              className='flex flex-col gap-y-6 max-w-[178px] mx-auto w-full'
            >
              <Image
                src={item.icon}
                alt={item.icon}
                width={48}
                height={48}
                priority
                className='h-8 w-8 lg:h-12 lg:w-12'
              />
              <p className='text-sky-400 text-lg lg:text-2xl font-medium whitespace-nowrap'>
                {item.title}
              </p>
              <p className='max-w-[178px] text-sm lg:text-base'>{item.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </MotionViewport>
  )
}
