'use client'

import CustomBorderedButton from '@/components/bordered-button'
import {IListenToCustomer} from '@/types/listen.interface'
import Image from 'next/image'
import {useRef} from 'react'
import {Autoplay, EffectFade} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Badges, animateBadges} from './components/badges'
import {Stars} from './components/stars'
import {WorkingRules} from './components/working-rules'

import 'swiper/css'
import 'swiper/css/effect-fade'

const ListenToCustomer = ({
  listenToCustomer,
}: {
  listenToCustomer: IListenToCustomer
}) => {
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([])

  if (!listenToCustomer) return null

  return (
    <section
      id='listen-to-customer'
      className='h-[37.5rem] relative'
    >
      <Image
        src='https://seohub.okhub-tech.com/wp-content/uploads/2025/05/Frame-2147258475.svg'
        alt='listen-to-customer-bg'
        fill
        className='object-cover'
      />
      <h2
        className='text-[#0725B7] text-[2.875rem] font-normal leading-[4rem] absolute top-[9.75rem] left-[3.075rem] whitespace-nowrap
      [&_br]:hidden'
        dangerouslySetInnerHTML={{
          __html: listenToCustomer.title,
        }}
      ></h2>

      <div className='absolute z-[5] left-[3.08rem] top-[19.76rem] w-[47.25rem] md:block'>
        <WorkingRules rules={listenToCustomer.working_rule} />

        <div className='absolute'>
          <a href={listenToCustomer?.contact?.url}>
            <CustomBorderedButton
              color='#1550E5'
              borderColor='#1550E5'
              borderLine='rgb(134 132 132 / 10%)'
            >
              {listenToCustomer?.contact?.title}
            </CustomBorderedButton>
          </a>
        </div>
      </div>

      <div className='absolute z-[10] w-[37.375rem] h-[39.375rem] bottom-0 right-[6rem] md:block'>
        <Stars />
        <Swiper
          direction='horizontal'
          loop={true}
          speed={500}
          allowTouchMove={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect='fade'
          fadeEffect={{
            crossFade: true,
          }}
          modules={[EffectFade, Autoplay]}
          onSlideChange={() => {
            animateBadges(badgeRefs.current)
          }}
        >
          {listenToCustomer?.representative_face?.map((item, index) => (
            <SwiperSlide key={item.thumbnail.id}>
              <Image
                src={item.thumbnail.url}
                alt={item.thumbnail.alt}
                width={item.thumbnail.width}
                height={item.thumbnail.height}
                className='object-cover w-[37.375rem] h-[39.375rem]'
              />
              <Badges
                firstRule={item.first_rule}
                secondRule={item.second_rule}
                index={index}
                onRef={(el, index) => {
                  badgeRefs.current[index] = el
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ListenToCustomer
