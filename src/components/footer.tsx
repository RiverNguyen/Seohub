'use client'

import type {Credential, Footer, SocialList} from '@/types/footer.interface'
import gsap from 'gsap'
import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'
import FooterCopyright from './footer/footer-copyright'
import FooterCredential from './footer/footer-credential'
import FooterHotline from './footer/footer-hotline'
import FooterLinks from './footer/footer-links'
import FooterLogo from './footer/footer-logo'

const Footer = ({
  footer,
  social,
  credential,
}: {
  footer: Footer
  social: SocialList
  credential: Credential
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0)
  const footerRef = useRef<HTMLElement>(null)
  const overflowRef = useRef<HTMLDivElement>(null)

  // Animation khi scroll đến footer
  useEffect(() => {
    if (!footerRef.current || !overflowRef.current) return

    const footer = footerRef.current
    const overlay = overflowRef.current

    gsap.set(footer, {marginTop: 0})
    gsap.set(overlay, {opacity: 0})

    // Delay khởi tạo để ScrollSmoother chắc chắn đã xong
    const timeout = setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
          // markers: true,
        },
      })

      tl.to(footer, {marginTop: '-100px', duration: 1}).to(
        overlay,
        {opacity: 1, duration: 1},
        '<',
      )
    }, 150)

    // Cleanup
    return () => {
      clearTimeout(timeout)
    }
  }, [footer])

  return (
    <div className='relative z-50 bg-white '>
      <div
        className='absolute bottom-full left-0 w-full h-[1000px] bg-gradient-to-b from-transparent to-[rgba(102,102,102,0.1)] backdrop-blur-[4.45px] opacity-0 pointer-events-none z-100 transition-opacity duration-300'
        ref={overflowRef}
      ></div>
      <footer
        ref={footerRef}
        className='relative overflow-hidden border border-[#f1f1f1] h-[24em] will-change-transform xsm:h-[31.2rem]'
      >
        <div className='absolute top-[-2.675rem] left-[-6.875rem] w-[57.5625rem] h-[27.8125rem] opacity-50'>
          <Image
            src={
              'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/footer-bg-image-new.png'
            }
            alt={footer.logo_footer.alt}
            width={57.5625}
            height={27.8125}
            className='w-full h-full object-cover xsm:hidden'
          />
        </div>

        <div className='w-[93.5625rem] h-[24.9375rem] mx-auto flex xsm:w-full xsm:h-auto xsm:flex-col-reverse'>
          <div className='flex w-[57.45rem] justify-between border-r border-[#f1f1f1] xsm:flex-col-reverse xsm:w-full xsm:h-auto'>
            <FooterLogo
              footer={footer}
              globalSocial={social}
            />
            <FooterLinks
              footer={footer}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          </div>

          <div className='flex-1'>
            {credential && <FooterCredential credential={credential} />}
            <FooterHotline footer={footer} />
          </div>
        </div>
      </footer>

      <FooterCopyright />
    </div>
  )
}

export default Footer
