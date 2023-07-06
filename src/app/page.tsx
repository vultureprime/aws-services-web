'use client'
import Image from 'next/image'
import { MotionViewport, varFade } from './animate'
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
            {aws_capabilities.map((item) => (
              <m.div
                key={item.id}
                variants={varFade().in}
                className='flex flex-col gap-y-6 max-w-[178px] mx-auto'
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
                <p className='max-w-[178px] text-sm lg:text-base'>
                  {item.desc}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </MotionViewport>
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
          <MotionViewport>
            <p>Key Features</p>
          </MotionViewport>
        </div>
      </div>
    </main>
  )
}
