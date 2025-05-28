'use client'

import {useEffect, useState} from 'react'
import ImageFallback from '@/components/image/ImageFallback'
import fetchData from '@/fetches/fetchData'
import Link from 'next/link'
import type {Header, ILink} from '@/types/header.interface'
import CustomBorderedButton from '@/components/bordered-button'

const Header = () => {
  const [header, setHeader] = useState<Header | null>(null)

  useEffect(() => {
    const getHeaderData = async () => {
      const {header}: {header: Header} = await fetchData({
        api: '/custom/v1/options',
        method: 'GET',
      })
      setHeader(header)
    }

    getHeaderData()
  }, [])

  if (!header) return null

  return (
    <header
      id='header'
      className='header__wrapper w-full bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] z-[100] sticky top-0 transition-all duration-500 ease-in-out'
    >
      <div className='max-w-[93.825rem] mx-auto flex items-center justify-between py-[1.625rem] xsm:py-[0.875rem] xsm:px-[1rem] xsm:h-[3.6875rem]'>
        {header.logo && (
          <Link
            href='/'
            className='flex-shrink-0 no-underline inline-flex w-[9.375rem] cursor-pointer mr-[4rem] xsm:w-[6.98025rem]'
          >
            <ImageFallback
              src={header.logo.url}
              alt={header.logo.alt}
              width={300}
              height={25.5}
            />
          </Link>
        )}

        {header.menu && (
          <nav className='flex-shrink-0 inline-flex xsm:hidden'>
            <ul className='flex items-center'>
              {header.menu.map((menuItem: {link: ILink}) => (
                <li
                  className='inline-flex py-[0.625rem] px-[1.25rem] justify-center items-center cursor-pointer relative'
                  key={menuItem.link.title}
                >
                  <Link
                    href={menuItem.link.url}
                    className='text-[#666d80] text-[0.9375rem] font-medium leading-[1.75rem] tracking-[-0.00938rem] no-underline transition-colors duration-600 ease-[cubic-bezier(0.67,0,0.05,1)] cursor-pointer hover:text-[#1550e5] group'
                  >
                    {menuItem.link.title}
                    <span className='absolute -bottom-[0.25rem] left-[55%] -translate-x-1/2 inline-block w-[4.33825rem]'>
                      <span className='inline-block w-0 overflow-hidden transition-[width] duration-600 ease-[cubic-bezier(0.67,0,0.05,1)] group-hover:w-full'>
                        <svg
                          className='h-[0.43244rem] object-cover'
                          xmlns='http://www.w3.org/2000/svg'
                          width='72'
                          height='8'
                          viewBox='0 0 72 8'
                          fill='none'
                        >
                          <path
                            d='M1.29443 6.80782C17.7385 3.8037 54.895 0.261956 70.7061 1.90633'
                            stroke='#1550E5'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                          />
                        </svg>
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {header.contact && (
          <a
            href={header.contact.url}
            className='flex-shrink-0 cursor-pointer h-[2.5rem] max-w-[24.1075rem] inline-flex items-center justify-center no-underline xsm:hidden'
          >
            <CustomBorderedButton
              color='#00D3D0'
              borderColor='#000'
              borderLine='rgb(134 132 132 / 10%)'
            >
              {header.contact.title}
            </CustomBorderedButton>
          </a>
        )}
      </div>
    </header>
  )
}

export default Header
