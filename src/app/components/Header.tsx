import React from 'react'
import Image from 'next/image'
import { CONTACT_URL } from '@/confg'
import Link from 'next/link'

export default function Header() {
  return (
    <header
      className={`fixed top-0 left-0 w-full bg-blue-50/50 backdrop-blur-md shadow-sm z-[99] `}
    >
      <div
        className={`z-1 py-3 px-5 max-w-7xl mx-auto w-full flex items-center  gap-x-4`}
      >
        <Link
          className='text-center text-sm sm:text-base text-[#1D3F7B]  font-medium'
          href='/'
        >
          <Image
            src='/logo.png'
            width={85}
            height={42}
            alt='power vulutreprime'
          />
        </Link>

        <div className='flex-1' />
        <Link
          className='text-center  text-sm sm:text-base text-[#1D3F7B]  font-medium'
          href={'https://www.vultureprime.com'}
        >
          Home
        </Link>
        <Link
          className='text-center  text-sm sm:text-base text-[#1D3F7B]  font-medium'
          href={'https://www.vultureprime.com/research-center'}
        >
          Blog
        </Link>

        <Link
          className='px-4 py-1 bg-blue-500 rounded-lg justify-center items-center hidden md:block'
          href={`${CONTACT_URL}`}
        >
          <div className='text-white text-xs '>พูดคุยกับเรา</div>
        </Link>
      </div>
    </header>
  )
}
