'use client'

import { getCookie, setCookie } from '@/cookie/utils'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'

export default function CookieContent() {
  const [open, setOpen] = useState<boolean | null>(null)
  useEffect(() => {
    if (getCookie('acceptCookie') !== null) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [])

  const newValue =
    typeof window !== 'undefined'
      ? getCookie('acceptCookie') !== null
        ? 'granted'
        : 'denied'
      : 'denied'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window?.gtag('consent', 'update', {
        analytics_storage: newValue,
      })
    }
  }, [newValue])

  const onAccept = () => {
    setOpen(true)
    setCookie('acceptCookie', 'Accept', 30)
  }

  useEffect(() => {
    if (open === null || open === false) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [open])

  const onDeny = () => {
    setOpen(true)
  }
  if (open || open === null) {
    return <Fragment />
  }

  return (
    <div className='bg-blue-400/50 z-[99] fixed inset-0 w-full flex justify-center items-end px-[14px] pb-[68px] lg:pb-[100px]'>
      <div className='bg-[#fff] rounded-[20px] max-w-[800px] lg:max-w-[1007px] p-3'>
        <div className='box-border border-[1px] border-dashed border-[#1D3F7B] rounded-[20px] p-[24px_40px]'>
          <b className='text-xl font-semibold'>Cookies content</b>
          <p className='font-medium text-base mb-4'>
            &quot;{`This website uses cookies.`}
          </p>
          <p>
            We values your privacy. for the development and improvement of the
            website By using this website without adjusting any settings, you
            agree to accept cookies on the website.&nbsp;
            <Link
              className='text-red-500'
              href='https://www.vultureprime.com/privacy'
              target='_blank'
            >
              {`and our privacy policy`}&quot;
            </Link>
          </p>
          <div className='flex justify-end w-full gap-x-6 mt-[30px] lg:mt-0'>
            <button
              className='btn btn-ghost text-blue-500 w-1/2 lg:w-[156px] font-normal font-inter normal-case text-base h-[48px] flex items-center justify-center rounded-[12px]'
              onClick={onDeny}
            >
              Deny
            </button>
            <button
              className='btn bg-blue-500 text-[#fff]  w-1/2 lg:w-[156px] font-normal font-inter normal-case text-base h-[48px] flex items-center justify-center rounded-[12px]'
              onClick={onAccept}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
