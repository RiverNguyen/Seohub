import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'
import type {IBanner} from '@/types/banner.interface'

import 'swiper/css'
import 'swiper/css/pagination'

interface BannerMobileProps {
  bannerSlides: IBanner[]
}

const BannerMobile = ({bannerSlides}: BannerMobileProps) => {
  return (
    <div
      className='w-full relative h-full hidden xsm:block'
      id='banner-mb'
    >
      <Swiper
        className='w-full h-[33rem]'
        modules={[Pagination]}
        pagination={{clickable: true}}
      >
        {bannerSlides?.map((item, index) => (
          <SwiperSlide
            className='bg-[#f7f7f7] relative block'
            key={index}
          >
            <div className='flex items-center h-fit mt-[0.38rem] py-[0.41025rem] px-[1.1rem] relative'>
              <Image
                src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-icon1.webp'
                alt='Icon 1'
                width={18}
                height={18}
                className='w-[1.125rem] h-[1.125rem] mr-[0.26rem] transition-opacity duration-800 ease-in-out'
                draggable={false}
              />
              <Image
                src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-icon2.webp'
                alt='Icon 2'
                width={18}
                height={18}
                className='w-[1.125rem] h-[1.125rem] mr-[0.26rem] transition-opacity duration-800 ease-in-out absolute top-1/2 -translate-y-1/2 opacity-0'
                draggable={false}
              />
              <span className='text-[0.875rem] font-medium text-[#1550e5] transition-opacity duration-800 ease-in-out'>
                Mọi người cho rằng
              </span>
              <span className='text-[0.875rem] font-medium text-[#1550e5] transition-opacity duration-800 ease-in-out absolute top-1/2 -translate-y-1/2 left-[2.825rem] opacity-0'>
                SEOhub cho rằng
              </span>
            </div>

            <div className='my-[0.4rem_0_0.62rem_0] w-full px-[1.1rem]'>
              <div className='bg-[#e6e6e6] h-[0.0625rem] w-full'></div>
            </div>

            <div className='mt-[0.88rem] relative w-[18.75rem] pl-[1.1rem]'>
              <div className='relative text-start w-full transition-[height] duration-800 ease-in-out'>
                <span className='text-start w-full text-[#081d1a] text-[1.25rem] font-normal leading-[140%] transition-opacity duration-800 ease-in-out'>
                  {item.home_banner_des_l}
                </span>
                <span className='text-start w-full text-[#081d1a] text-[1.25rem] font-normal leading-[140%] transition-opacity duration-800 ease-in-out absolute top-0 left-0 opacity-0'>
                  {item.home_banner_des_r}
                </span>
              </div>

              <div className='mt-[0.56rem] flex items-center relative z-10 transition-all duration-800 ease-in-out'>
                <div className='w-[2.54188rem] h-[2.54188rem] rounded-full flex justify-center items-center transition-all duration-800 ease-in-out absolute -left-[2.54188rem] scale-0 border border-[#e6e6e6] bg-[rgba(255,255,255,0.39)] opacity-0 backdrop-blur-[2px]'>
                  <div
                    className='w-[0.66213rem] h-[0.97275rem] bg-contain bg-no-repeat'
                    style={{
                      backgroundImage:
                        "url('https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-icon1.webp')",
                    }}
                  ></div>
                </div>
                <div className='w-[6.94181rem] h-[2.55238rem] rounded-[1.27619rem] overflow-hidden flex justify-center items-center transition-all duration-800 ease-in-out relative'>
                  <div className='w-full h-full bg-[rgba(255,255,255,0.39)] backdrop-blur-[2px] absolute top-0 left-0 right-0 bottom-0 opacity-0 transition-all duration-800 ease-in-out'></div>
                  <div className='w-full h-full bg-gradient-to-b from-[#001cb3] to-[#548beb] absolute top-0 left-0 right-0 bottom-0 opacity-100 transition-all duration-800 ease-in-out'></div>
                  <span className='z-[1] transition-all duration-800 ease-in-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full leading-[134%] tracking-[0.0455rem] text-[0.90956rem] uppercase opacity-100 text-white font-bold'>
                    Nhưng !
                  </span>
                  <span className='z-[1] transition-all duration-800 ease-in-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full leading-[134%] tracking-[0.0455rem] text-[0.90956rem] font-normal opacity-0 text-[#1550e5]'>
                    Mọi người thấy
                  </span>
                </div>
                <div className='w-[2.54188rem] h-[2.54188rem] rounded-full flex justify-center items-center transition-all duration-800 ease-in-out scale-100 bg-gradient-to-b from-[#001cb3] to-[#548beb] opacity-100'>
                  <div
                    className='w-[0.66213rem] h-[0.97275rem] bg-contain bg-no-repeat'
                    style={{
                      backgroundImage:
                        "url('https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-icon2.webp')",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <Image
                src={item.img_before.url}
                alt='Before image'
                width={1000}
                height={1000}
                className='absolute w-auto h-[15.75488rem] z-3 object-cover left-1/2 -translate-x-1/2 bottom-[0.84rem] transition-opacity duration-800 ease-in-out'
                draggable={false}
              />
              <Image
                src={item.img_after.url}
                alt='After image'
                width={1000}
                height={1000}
                className='absolute w-auto h-[15.75488rem] z-3 object-cover left-1/2 -translate-x-1/2 bottom-[0.84rem] transition-opacity duration-800 ease-in-out opacity-0'
                draggable={false}
              />
              <Image
                src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/bg-mark.png'
                alt='Background mark'
                width={1000}
                height={1000}
                className='absolute w-full h-[20.007rem] bottom-[5.7rem] z-1'
                draggable={false}
              />
              <Image
                src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/BannerSlide1.webp'
                alt='Background'
                width={1000}
                height={1000}
                className='absolute bottom-0 z-2 object-cover w-full h-[14.87519rem]'
                draggable={false}
              />
              <div className='bg-white h-8 absolute bottom-0 w-full z-1'></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BannerMobile
