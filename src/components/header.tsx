'use client'

import {useContext, useEffect, useState} from 'react'
import type {Header} from '@/types/header.interface'
import {cn} from '@/lib/utils'
import Logo from './header/logo'
import Navigation from './header/navigation'
import ContactButton from './header/contact-button'
import {AppContext} from '@/provider/AppProvider'
import useIsMobile from '@/hooks/useIsMobile'

interface HeaderProps {
  header: Header
}

const Header = ({header}: HeaderProps) => {
  console.log(header)
  const context = useContext(AppContext)
  if (!context) throw new Error('AppContext must be used within AppProvider')
  const [isHidden, setIsHidden] = useState(false)
  const {openMenuMobile} = context

  const isMobile = useIsMobile()

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

  if (!header) return null

  return (
    <>
      <header
        className={cn(
          'header__wrapper w-full bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] z-[100] sticky top-0 transition-transform duration-500 ease-in-out transform',
          {
            'translate-y-[-100%]': isHidden,
            'translate-y-0': !isHidden || openMenuMobile,
          },
        )}
      >
        <div className='max-w-[93.825rem] mx-auto flex items-center justify-between py-[1.625rem] xsm:py-[0.875rem] xsm:px-[1rem] xsm:h-[3.6875rem]'>
          {header.logo && <Logo logo={header.logo} />}
          {header.menu && <Navigation menu={header.menu} />}
          {header.contact && <ContactButton contact={header.contact} />}
        </div>
      </header>
      {isMobile && (
        <div
          className={cn(
            'header__wrapper sm:hidden fixed top-0 left-0 z-[600] w-full transform transition-transform duration-500 ease-in-out',
            {
              'translate-y-[-100%]': isHidden,
              'translate-y-0': !isHidden || openMenuMobile,
            },
          )}
        >
          <div className='xsm:py-[0.875rem] xsm:px-[1rem] xsm:h-[3.6875rem] flex items-center justify-between'>
            {header.logo && <Logo logo={header.logo} />}
          </div>
        </div>
      )}
    </>
  )
}

export default Header
