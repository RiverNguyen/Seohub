'use client'

import fetchData from '@/fetches/fetchData'
import {cn} from '@/lib/utils'
import type {Credential, Footer, SocialList} from '@/types/footer.interface'
import Image from 'next/image'
import {useEffect, useState, useRef} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Footer = () => {
  const [footer, setFooter] = useState<Footer | null>(null)
  const [globalSocial, setGlobalSocial] = useState<SocialList | null>(null)
  const [credential, setCredential] = useState<Credential | null>(null)
  const hoveredIndexRef = useRef<number>(0)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const getFooterData = async () => {
      try {
        const {
          footer,
          social,
          credential,
        }: {footer: Footer; social: SocialList; credential: Credential} =
          await fetchData({
            api: '/custom/v1/options',
            method: 'GET',
          })
        setFooter(footer)
        setGlobalSocial(social)
        setCredential(credential)
      } catch (error) {
        console.log(error)
      }
    }
    getFooterData()
  }, [])

  useGSAP(
    () => {
      if (!footerRef.current) return

      gsap.registerPlugin(ScrollTrigger)

      gsap.to('.footer-blur-overlay', {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 75%',
          end: 'top center',
          scrub: true,
        },
      })

      const footer = footerRef.current
      const prevSection = footer.previousElementSibling

      gsap.set(footer, {
        zIndex: 10,
        position: 'relative',
      })

      if (prevSection) {
        gsap.set(prevSection, {
          overflow: 'visible',
        })
      }

      gsap.fromTo(
        footer,
        {marginTop: '0px'},
        {
          marginTop: '-12.875vh',
          ease: 'none',
          scrollTrigger: {
            trigger: footer,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
          },
        },
      )
    },
    {scope: footerRef},
  )

  if (!footer) return null

  return (
    <div className='relative z-50 bg-white pb-[7.375rem]'>
      <div className='footer-blur-overlay absolute bottom-full left-0 w-full h-[1000px] bg-gradient-to-b from-transparent to-[rgba(102,102,102,0.1)] backdrop-blur-[4.45px] opacity-0 pointer-events-none z-100 transition-opacity duration-300'></div>

      <footer
        ref={footerRef}
        className='relative overflow-hidden border border-[#f1f1f1] h-[24em]'
      >
        <div className='absolute top-[-2.675rem] left-[-6.875rem] w-[57.5625rem] h-[27.8125rem] opacity-50'>
          <Image
            src={
              'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/footer-bg-image-new.png'
            }
            alt={footer.logo_footer.alt}
            width={57.5625}
            height={27.8125}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='w-[93.5625rem] h-[24.9375rem] mx-auto flex'>
          <div className='flex w-[57.45rem] justify-between border-r border-[#f1f1f1]'>
            <div className='flex flex-col justify-between relative z-30'>
              <div className='flex flex-col'>
                <a
                  href='#'
                  className='mt-14'
                >
                  <Image
                    src={footer.logo_footer.url}
                    alt={footer.logo_footer.alt}
                    width={16.80975}
                    height={4.5}
                    className='h-[4.5rem] w-[16.80975rem]'
                  />
                </a>
                <p className='mt-10 text-[#aaa] text-sm font-normal leading-[1.42188rem] w-[19.65265rem]'>
                  {footer.desc}
                </p>
              </div>

              {globalSocial && (
                <div className='flex relative z-30 pb-7'>
                  {globalSocial.map(
                    (item) =>
                      item.social_icon &&
                      item.social_link &&
                      item.social_link.url && (
                        <a
                          key={item.social_link.url}
                          href={item.social_link.url}
                          className='w-11 h-11 flex justify-center items-center rounded-full border border-[rgba(120,120,120,0.17)] mr-3'
                        >
                          <Image
                            src={item.social_icon.url}
                            alt={item.social_icon.alt}
                            width={24}
                            height={24}
                            className='w-4 h-4 object-contain'
                          />
                        </a>
                      ),
                  )}
                </div>
              )}
            </div>

            <div className='flex'>
              <nav className='pt-14 mr-[4.125rem]'>
                <ul>
                  {footer.footer_link.map((item, index) => (
                    <li key={item.link.url}>
                      <a
                        href={item.link.url}
                        onMouseEnter={() => {
                          hoveredIndexRef.current = index
                          // Force re-render
                          setFooter({...footer})
                        }}
                        className={cn(
                          'text-2xl font-normal group leading-[2.49319rem] no-underline relative pr-[0.325rem] transition-colors duration-300 hover:text-[#1550e5] after:content-[""] after:absolute after:bottom-[-0.15rem] after:left-0 after:w-0 after:h-[0.1575rem] after:bg-[#1550e5] after:transition-all after:duration-400 hover:after:w-full',
                          hoveredIndexRef.current === index
                            ? 'text-[#1550e5] after:w-full'
                            : 'text-[#333]',
                        )}
                      >
                        {item.link.title}
                        <Image
                          src={
                            'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/footer-link-arrow.svg'
                          }
                          alt='arrow-gray'
                          width={240}
                          height={240}
                          className={cn(
                            'inline-block w-[0.44263rem] h-[0.43794rem] absolute top-0 -right-2 opacity-0 transform -translate-x-[5px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[5px]',
                            hoveredIndexRef.current === index && 'opacity-100',
                          )}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className='pt-14 pr-[3.065rem]'>
                <div className='flex items-center'>
                  <p className="relative text-[#333] text-sm font-normal leading-[1.42188rem] pr-[0.5625rem] after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:h-[45%] after:bg-[#ccc] after:w-[0.07rem]">
                    {footer.footer_link[hoveredIndexRef.current].link.title}
                  </p>

                  <Image
                    src={
                      'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/arrow-gray.svg'
                    }
                    alt='arrow-gray'
                    width={144}
                    height={62}
                    className='pl-[0.5625rem] w-[1.625rem] h-[0.625rem]'
                  />
                </div>
                <p className='mt-3 w-[13.711rem] text-[#aaa] text-sm font-normal leading-[1.42188rem]'>
                  {footer.footer_link[hoveredIndexRef.current].link_desc}
                </p>
              </div>
            </div>
          </div>

          <div className='flex-1'>
            {credential && (
              <div className='flex items-end border-b border-[#f1f1f1] relative'>
                <Image
                  src={
                    'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/footer-bg-1.png'
                  }
                  alt={credential.image.alt}
                  width={1000}
                  height={1000}
                  className='absolute right-[-8rem] bottom-0 z-1 w-[36.8125rem] h-[10.1875rem]'
                />
                <Image
                  src={credential.image.url}
                  alt={credential.image.alt}
                  width={143}
                  height={143}
                  className='hidden'
                />

                <div className='p-16 pr-[3.25rem] pb-[1.8575rem] pl-[2.06rem]'>
                  <h4 className='text-[#333] text-2xl font-normal leading-8'>
                    {credential.title ?? ''}
                  </h4>
                  <p
                    className='text-[#666] text-sm font-normal leading-[1.125rem] w-[11.53772rem] mt-[0.575rem] mb-[1.5125rem]'
                    dangerouslySetInnerHTML={{
                      __html: credential.desc ?? '',
                    }}
                  />

                  {credential.link_download && credential.link_download.url && (
                    <a
                      target='_blank'
                      href={credential.link_download.url}
                    >
                      <button className='relative z-10 cursor-pointer border-none inline-flex max-w-[47.22188rem] bg-[#293844] pr-[0.4375rem] h-[2.925rem] group'>
                        <p className='m-0 w-fit pt-[1.15rem] px-4 pb-[0.73rem] text-white overflow-hidden flex flex-col'>
                          <span className='text top transition-all duration-300 group-hover:-translate-y-[250%] group-hover:animate-[flashColor_0.4s_ease-out_forwards]'>
                            {credential.link_download.title}
                          </span>
                          <span className='text bottom translate-y-full transition-all duration-300 group-hover:-translate-y-full'>
                            {credential.link_download.title}
                          </span>
                        </p>
                        <Image
                          src={
                            'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/arrow-download.svg'
                          }
                          alt={credential.image.alt}
                          width={241}
                          height={241}
                          className='mt-4 w-4 h-4 transform translate-x-0 transition-all duration-600 opacity-0 relative z-10 -ml-4 group-hover:translate-x-[1.575rem] group-hover:opacity-100'
                        />
                        <div className='bg-white mt-[0.4375rem] w-[0.4rem] h-[0.4rem] transform rotate-0 transition-all duration-600 group-hover:w-[2.1875rem] group-hover:h-[2.125rem] group-hover:rotate-[-180deg]'></div>
                      </button>
                    </a>
                  )}
                </div>

                {credential.image && (
                  <div className='w-[15.45706rem] h-[8.69456rem] relative z-10 overflow-hidden'>
                    <Image
                      src={credential.image.url}
                      alt={credential.image.alt}
                      width={1000}
                      height={1000}
                      className='transform translate-y-4 shadow-[0px_4px_24.8px_0px_rgba(0,0,0,0.27)] transition-transform duration-500 hover:translate-y-0'
                    />
                  </div>
                )}
              </div>
            )}

            <div className='flex items-center justify-between h-[9.675rem] pl-[2.125rem]'>
              <div className='flex flex-col'>
                <p className='text-[#999] text-sm font-normal leading-6'>
                  {footer.hotline.title}
                </p>
                <div
                  className='text-[#333] text-[1.75rem] font-normal leading-[2.33313rem]'
                  dangerouslySetInnerHTML={{
                    __html: footer.hotline.phone_number ?? '',
                  }}
                />
                <p
                  className='text-[#999] text-sm font-normal leading-6'
                  dangerouslySetInnerHTML={{
                    __html: footer.hotline.mail ?? '',
                  }}
                />
              </div>

              <div className='flex items-center'>
                <p className='text-[#999] text-sm font-normal leading-6'>
                  {footer.hotline.advise}
                </p>
                <div className='relative mr-5 cursor-pointer group'>
                  <Image
                    src={footer.hotline.image_advise.url}
                    alt={footer.hotline.image_advise.alt}
                    width={3.3}
                    height={3.3}
                    className='w-[3.3rem] h-[3.3rem] px-[0.42975rem] py-0 flex justify-center items-center rounded-full border border-[#f1f1f1] ml-[0.95rem]'
                  />
                  <span className="w-[5.91625rem] h-[6.5rem] absolute z-30 opacity-0 transition-all duration-300 -top-[6.75rem] -right-[4.3rem] transform -translate-x-1/2 translate-y-[30%] scale-80 bg-[url('/images/tooltip.svg')] bg-no-repeat bg-center bg-cover filter drop-shadow-[0px_4px_20.9px_rgba(0,0,0,0.12)] flex justify-center items-center pb-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-auto">
                    <Image
                      src={footer.hotline.qr_advise.url}
                      alt={footer.hotline.qr_advise.alt}
                      width={100}
                      height={100}
                      className='w-[5.15994rem] h-[5.15994rem]'
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className='flex justify-between items-center w-[93.5625rem] mx-auto h-[3.1125rem] text-[#999] text-sm font-normal leading-6'>
        <div className='flex items-center'>
          <p className="relative pr-4 after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:h-[45%] after:bg-[#ccc] after:w-[0.05rem] ">
            ©2025 Công ty Cổ phần OKHUB
          </p>
          <p className='ml-4'>Giấy phép 17051691</p>
        </div>
        <p>Designed by OKHub</p>
      </div>
    </div>
  )
}

export default Footer
