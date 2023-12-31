'use client'
import Link from 'next/link'
import { CONTACT_URL } from '@/confg'

export default function Contact() {
  return (
    <footer className='bg-cornflower-600'>
      <div className=' text-white px-6 lg:px-10 py-20 max-w-7xl  mx-auto'>
        <div className='flex flex-col  gap-y-5 sm:flex-row items-center sm:justify-between'>
          <div>
            <p className='sm:text-xl text-center sm:text-start'>
              จองการปรึกษาฟรีกับผู้เชี่ยวชาญด้าน AWS Cloud กับเรา
              <br /> Vulture Prime
            </p>
            <p className='text-xs mt-6 text-center sm:text-start max-w-[320px] sm:max-w-none mx-auto lg:mx-none '>
              พร้อมให้คำแนะนำและคำปรึกษาจากผู้เชี่ยวชาญ
              <br />
              เพื่อช่วยให้คุณเริ่มต้นหรือพัฒนาโปรเจกต์ AWS Cloud
              ให้เป็นไปได้อย่างมีประสิทธิภาพที่สุด
            </p>
            <div className='flex-row mt-6 justify-center lg:justify-start'>
              <div className='flex w-full space-x-4 justify-center lg:justify-start'>
                <a href='https://www.facebook.com/vultureprime'>
                  <svg className='w-6 h-6' fill='#FFF' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a href='https://twitter.com/vultureprime'>
                  <svg className='w-6 h-6' fill='#FFF' viewBox='0 0 24 24'>
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </a>
                <a href='https://line.me/ti/g2/z5sMfE8jFh94dVP9ODux0F2ItQ6A6PXmSYofiA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default'>
                  <svg className='w-6 h-6' fill='#FFF' viewBox='0 0 48 48'>
                    <path d='M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 25 10 C 16.297049 10 9 15.678331 9 22.947266 C 9 29.432462 14.784063 34.70004 22.335938 35.712891 C 22.335938 35.712891 22.337891 35.712891 22.337891 35.712891 C 22.536678 35.755374 22.765454 35.823119 22.900391 35.886719 C 22.927968 35.899717 22.92499 35.900858 22.939453 35.910156 C 22.936808 35.992303 22.962381 36.370293 22.923828 36.660156 C 22.914328 36.716266 22.750575 37.685545 22.716797 37.876953 L 22.716797 37.878906 C 22.670157 38.145846 22.493944 38.683413 22.949219 39.369141 C 23.176856 39.712004 23.648332 39.989421 24.089844 40.027344 C 24.531355 40.065264 24.936512 39.956154 25.388672 39.765625 C 26.423745 39.336822 28.490518 38.115392 30.876953 36.482422 C 33.261295 34.850883 35.83616 32.871381 37.521484 30.970703 C 39.813508 28.503964 41 25.843504 41 22.947266 C 41 15.679227 33.703032 10 25 10 z M 25 12 C 32.838968 12 39 17.041304 39 22.947266 C 39 25.319988 38.105988 27.408105 36.052734 29.615234 L 36.042969 29.625 L 36.035156 29.634766 C 34.573278 31.286637 32.063988 33.245345 29.748047 34.830078 C 27.492074 36.373777 25.386061 37.559635 24.75 37.839844 C 24.81529 37.455902 24.900391 36.957031 24.900391 36.957031 L 24.904297 36.939453 L 24.90625 36.921875 C 24.96188 36.503517 25.111583 35.868916 24.792969 35.083984 L 24.792969 35.082031 L 24.792969 35.080078 C 24.555561 34.50218 24.11359 34.248575 23.751953 34.078125 C 23.390316 33.907675 23.042681 33.819356 22.753906 33.757812 L 22.714844 33.748047 L 22.673828 33.744141 C 15.849442 32.857984 11 28.250827 11 22.947266 C 11 17.040201 17.160951 12 25 12 z M 23.992188 18.998047 C 23.488379 19.007393 23 19.391875 23 20 L 23 26 C 23 26.552 23.448 27 24 27 C 24.552 27 25 26.552 25 26 L 25 23.121094 L 27.185547 26.580078 C 27.751547 27.372078 29 26.973 29 26 L 29 20 C 29 19.448 28.552 19 28 19 C 27.448 19 27 19.448 27 20 L 27 23 L 24.814453 19.419922 C 24.602203 19.122922 24.294473 18.992439 23.992188 18.998047 z M 15 19 C 14.448 19 14 19.448 14 20 L 14 26 C 14 26.552 14.448 27 15 27 L 18 27 C 18.552 27 19 26.552 19 26 C 19 25.448 18.552 25 18 25 L 16 25 L 16 20 C 16 19.448 15.552 19 15 19 z M 21 19 C 20.448 19 20 19.448 20 20 L 20 26 C 20 26.552 20.448 27 21 27 C 21.552 27 22 26.552 22 26 L 22 20 C 22 19.448 21.552 19 21 19 z M 31 19 C 30.448 19 30 19.448 30 20 L 30 26 C 30 26.552 30.448 27 31 27 L 34 27 C 34.552 27 35 26.552 35 26 C 35 25.448 34.552 25 34 25 L 32 25 L 32 24 L 34 24 C 34.553 24 35 23.552 35 23 C 35 22.448 34.553 22 34 22 L 32 22 L 32 21 L 34 21 C 34.552 21 35 20.552 35 20 C 35 19.448 34.552 19 34 19 L 31 19 z' />
                  </svg>
                </a>
              </div>
            </div>
            <p className='text-xs leading-5 text-white pt-2 mb-2 text-center sm:text-start'>
              &copy; 2023 VulturePrime Co., Ltd. All rights reserved.
            </p>
          </div>
          <Link
            className='px-6 py-2 bg-white rounded-lg font-semibold justify-center items-center w-fit'
            href={`${CONTACT_URL}`}
          >
            <div className='text-blue-500 text-lg '>พูดคุยกับเรา</div>
          </Link>
        </div>
      </div>
    </footer>
  )
}
