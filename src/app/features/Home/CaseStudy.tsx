'use client'
import Image from 'next/image'
import { MotionViewport, varFade } from '../../animate'
import { m } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  const caseStudy = [
    {
      title: 'ImageXYZ',
      tool: 'EC2 • S3',
      blog: 'https://www.vultureprime.com/blogs/imagexyz-tech-stack',
      website: 'https://imagexyz.vultureprime.com/',
      img: '/images/case-1.png',
      desc: ' Website สำหรับการ Resize รูปภาพจาก format ต่างๆให้เป็น Webp format เพื่อให้เหมาะแก่การพัฒนา web application',
    },
    {
      title: 'LaiTa ',
      tool: 'EC2 • S3',
      blog: 'https://www.vultureprime.com/blogs/laita-the-series',
      website: 'https://laita.co/',
      img: '/images/case-2.png',
      desc: 'service สำหรับการทำ face search คือการค้นหารูปตัวเองจาก Album โดยการอัพโหลดรูปตัวเองขึ้นไปในระบบ',
    },
    {
      title: 'OgXYZ',
      tool: 'EC2 • S3',
      blog: 'https://www.vultureprime.com/blogs/ogxyz-the-series',
      website: 'https://ogxyz.vultureprime.com/',
      img: '/images/case-3.png',
      desc: 'OgXYZ เป็น Service ที่สร้างมาสำหรับการสร้าง Open Graph ให้กับ website',
    },
  ]
  return (
    <div id='case-study' className='px-6 lg:px-10 py-20 max-w-7xl  mx-auto'>
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
              <br /> Let's get started with AWS services!
            </p>
          </div>
        </m.div>
      </MotionViewport>
      <MotionViewport className='flex items-center justify-center'>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-8'>
          {caseStudy.map((item, index) => (
            <div
              key={index}
              className='group bg-cornflower-50 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-all duration-300'
            >
              <div className='w-full h-full relative rounded-t-xl overflow-hidden'>
                <Image
                  src={item.img}
                  alt='case-1'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='group-hover:scale-105 transition-all duration-300'
                  style={{ width: '100%', height: 'auto' }} // optional
                  priority
                />
                <div className='p-4 flex flex-col bg-[linear-gradient(360deg,rgba(1,1,1,0.27)_87.01%,rgba(1,1,1,0.01)_100%)] absolute bottom-0 left-0 w-full h-[80px] text-blue-50'>
                  <p className='text-xs lg:text-sm mt-auto'>{item.tool}</p>
                </div>
              </div>
              <div className='p-4 h-[160px]'>
                <p className='text-md lg:text-lg font-medium text-cornflower-800'>
                  {item.title}
                </p>
                <p className='text-xs text-sky-700 line-clamp-2'>{item.desc}</p>
                <div className='flex items-center gap-x-4'>
                  <div className='flex items-center gap-x-2 mt-4'>
                    <Link
                      className='hover:scale-110 transition-all duration-300 flex gap-x-2 text-sm items-center text-cornflower-800'
                      href={item.blog}
                      title={item.title}
                    >
                      <Image
                        src='/images/content.svg'
                        alt='content-1'
                        width={20}
                        height={20}
                        sizes='100vw'
                        priority
                      />
                      <p>อ่านบทความ</p>
                    </Link>
                  </div>
                  <div className='flex items-center gap-x-2 mt-4'>
                    <Link
                      className='hover:scale-110 transition-all duration-300 flex gap-x-2 text-sm items-center text-cornflower-800'
                      href={item.website}
                      title={item.title}
                    >
                      <Image
                        src='/images/website.svg'
                        alt='web-1'
                        width={20}
                        height={20}
                        sizes='100vw'
                        priority
                      />
                      <p>ลองเล่นเลย</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionViewport>
    </div>
  )
}
