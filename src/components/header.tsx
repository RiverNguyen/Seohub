'use client'

import {useEffect, useState} from 'react'
import fetchData from '@/fetches/fetchData'
import type {Header} from '@/types/header.interface'
import {cn} from '@/lib/utils'
import Logo from './header/logo'
import Navigation from './header/navigation'
import ContactButton from './header/contact-button'

const Header = () => {
  const [header, setHeader] = useState<Header | null>(null)
  const [isHidden, setIsHidden] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getHeaderData = async () => {
      try {
        const {header}: {header: Header} = await fetchData({
          api: '/custom/v1/options',
          method: 'GET',
        })
        setHeader(header)
      } finally {
        setIsLoading(false)
      }
    }

    getHeaderData()
  }, [])

  useEffect(() => {
    let prevScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (Math.abs(currentScrollY - prevScrollY) <= 10) return

      if (currentScrollY > prevScrollY && currentScrollY >= 200) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      prevScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (isLoading) {
    return (
      <header className='header__wrapper w-full bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] z-[100] sticky top-0'>
        <div className='max-w-[93.825rem] mx-auto flex items-center justify-between py-[1.625rem] xsm:py-[0.875rem] xsm:px-[1rem] xsm:h-[3.6875rem]'>
          <div className='w-[9.375rem] h-[25.5px] bg-gray-200 animate-pulse rounded'></div>
        </div>
      </header>
    )
  }

  if (!header) return null

  return (
    <header
      className={cn(
        'header__wrapper w-full bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] z-[100] sticky top-0 transition-transform duration-500 ease-in-out transform',
        {
          'translate-y-[-100%]': isHidden,
          'translate-y-0': !isHidden,
        },
      )}
    >
      <div className='max-w-[93.825rem] mx-auto flex items-center justify-between py-[1.625rem] xsm:py-[0.875rem] xsm:px-[1rem] xsm:h-[3.6875rem]'>
        {header.logo && <Logo logo={header.logo} />}
        {header.menu && <Navigation menu={header.menu} />}
        {header.contact && <ContactButton contact={header.contact} />}
      </div>
    </header>
  )
}

export default Header
