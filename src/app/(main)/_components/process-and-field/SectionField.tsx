import {Commitment} from '@/types/workflow.interface'
import {gsap} from 'gsap'
import Image from 'next/image'
import {useEffect, useRef} from 'react'

export default function SectionField({commitment}: {commitment: Commitment}) {
  const speeds = [1.5, 1, 2.75, 1, 2.5, 1.5, 1, 2.5, 1.5, 1.5, 1, 2.25]
  const count = speeds.length
  const pinSectionRef = useRef<HTMLDivElement>(null)
  const fieldOfActivityRef = useRef<HTMLDivElement>(null)
  const fieldOfActivityTitleRef = useRef<HTMLDivElement>(null)
  const fieldOfActivityListImageRef = useRef<HTMLDivElement>(null)
  const badge__labelTextRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // Pin section
    gsap.to(fieldOfActivityRef.current, {
      scrollTrigger: {
        trigger: pinSectionRef.current,
        start: 'clamp(top top)',
        end: 'bottom bottom',
        pin: fieldOfActivityRef.current,
        scrub: true,
        markers: true,
      },
    })

    // Blur title
    gsap.to(fieldOfActivityTitleRef.current, {
      scrollTrigger: {
        trigger: fieldOfActivityListImageRef.current,
        start: 'top 65%',
        end: 'bottom top',
        toggleActions: 'play reverse play reverse',
      },
      filter: 'blur(3.5px)',
    })

    // Random movement and blur for each image
    const images = document.querySelectorAll<HTMLImageElement>(
      '.fieldOfActivity_listImage-img',
    )
    images.forEach((image) => {
      const randomX = gsap.utils.random(-100, 100, 5, true)

      gsap.to(image, {
        x: randomX,
        scrollTrigger: {
          trigger: image,
          start: 'top 120%',
        },
      })

      gsap.to(image, {
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: image,
          start: 'top 65%',
          end: '50% 27.5%',
          toggleActions: 'play reverse play reverse',
        },
      })
    })

    // Badge animation 2
    if (badge__labelTextRef.current) {
      gsap.set(badge__labelTextRef.current, {width: '0%'})
      gsap.to(badge__labelTextRef.current, {
        width: '100%',
        opacity: 1,
        scrollTrigger: {
          trigger: fieldOfActivityTitleRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
      })
    }
  }, [])
  return (
    <div
      ref={pinSectionRef}
      className='bg-[#f4f4f4]'
    >
      <div className='h-screen'>
        <div
          ref={fieldOfActivityRef}
          className='w-full absolute h-screen z-[11]'
        >
          <div className='hidden mb-4 mt-[3.75rem] pl-[1.6rem]'>
            <div className='relative w-max flex h-[1.374rem] px-[0.21694rem] py-[0.07231rem] justify-center items-center bg-[#1550e5]'>
              <p className='text-white text-xs font-normal leading-[134%]'>
                {commitment.tag ?? ''}
              </p>
            </div>
          </div>
          <Image
            className='absolute bottom-0 left-[-4.81rem] w-[75rem] h-[36.25rem] z-[-1]'
            src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/foot-r-img-bg3.webp'
            alt=''
            width={750}
            height={362.5}
          />
          <Image
            className='hidden absolute w-[49.875rem] h-[24.125rem] left-[-8.44rem] top-[-0.37rem]'
            src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/foot-r-img-bg3-mb.webp'
            alt=''
            width={498.75}
            height={241.25}
          />
          <Image
            className='absolute top-0 left-[-13.81rem] w-[97.4205rem] h-[60.88781rem] z-[-1] pointer-events-none'
            src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/Img_mask-group-scaled.webp'
            alt=''
            width={974.205}
            height={608.8781}
          />
          <div
            ref={fieldOfActivityTitleRef}
            className='absolute z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[56.90819rem] text-[#9c9c9c] text-[2.875rem] font-normal leading-[1.39]'
          >
            <div
              dangerouslySetInnerHTML={{
                __html: commitment.title,
              }}
            ></div>
            <div className='hidden'>
              <div className='badge-lv flex flex-col m-[0.625rem] w-max absolute top-0'>
                <p className='relative flex justify-center items-center bg-[#1550e5] whitespace-nowrap w-0 h-[3.04881rem] px-[0.48138rem] text-white text-[1.625rem] font-normal leading-[134%] overflow-hidden transition-all duration-[0.75s] ease-in-out opacity-0'>
                  {commitment.tag ?? ''}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={fieldOfActivityListImageRef}
        className='grid grid-cols-3 p-4 gap-y-[25rem] relative z-[11] pb-20 mt-20'
      >
        {commitment?.img?.map((item, index: number) => {
          return (
            <div
              key={index}
              className='fieldOfActivity_listImage-img w-full h-full flex z-[-1] blur-[6.9px]'
              data-speed={`clamp(${speeds[index % count]})`}
            >
              <Image
                src={item.url}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className='w-[21.1875rem] h-[15.875rem] mx-auto rounded-[0.625rem] object-cover'
                // data-speed={`clamp(${speeds[index % count]})`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
