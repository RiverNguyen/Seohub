'use client'

import fetchData from '@/fetches/fetchData'
import type {IBanner} from '@/types/banner.interface'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, EffectFade, Autoplay} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import {useEffect, useState} from 'react'

const Banner = () => {
  const [banner_slides, setBannerSlides] = useState<IBanner[]>([])

  useEffect(() => {
    const fetchBannerSlides = async () => {
      const {acf}: {acf: {banner_slides: IBanner[]}} = await fetchData({
        api: '/v2/pages/11?_fields=acf&acf_format=standard#',
        method: 'GET',
      })

      setBannerSlides(acf.banner_slides)
    }

    fetchBannerSlides()
  }, [])

  const paginationConfig = {
    clickable: true,
    renderBullet: (index: number, className: string) => `
      <span class="${className} ${
      index % 2 === 1 ? 'pagination-svg-reverse' : ''
    }">
        <svg xmlns="http://www.w3.org/2000/svg" width="121" height="9" viewBox="0 0 121 9" fill="none">
          <path d="M1.16561 4.73895C0.0303082 6.03128 0.947969 8.05893 2.66815 8.05893L118.203 8.05893C119.923 8.05893 120.84 6.03128 119.705 4.73895L116.332 0.898769C115.952 0.466526 115.404 0.21875 114.829 0.21875H6.04174C5.4664 0.21875 4.91892 0.466526 4.5392 0.898769L1.16561 4.73895Z" fill="#1550E5"/>
        </svg>
      </span>
    `,
  }

  console.log(banner_slides)

  return (
    <section
      className='flex justify-center bg-[#f7f7f7] h-[41.38rem] max-w-full w-screen mx-auto pb-8'
      id='banner'
    >
      <div
        className='w-[93.55306rem] relative block xsm:hidden'
        id='banner-pc'
      >
        <style
          jsx
          global
        >{`
          .banner-pc .swiper-pagination {
            bottom: 0 !important;
            width: 30.34381rem !important;
            display: flex;
            align-items: center;
            justify-content: center;
            left: 50% !important;
            transform: translateX(-50%);
            position: absolute;
          }
          .banner-pc .swiper-pagination-bullet {
            flex: 1;
            height: 0.56rem;
            background: none;
            padding: 0;
            margin: 0 !important;
            opacity: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s;
          }

          .banner-pc .swiper-pagination-bullet svg path {
            fill: #e4eaef;
            transition: fill 0.2s;
          }

          .banner-pc .swiper-pagination-bullet-active svg path {
            fill: #1550e5;
          }

          .banner-pc .pagination-svg-reverse {
            transform: scaleY(-1);
          }
        `}</style>
        <Swiper
          className='banner-pc hide-navigation w-full h-full'
          modules={[Pagination, EffectFade, Autoplay]}
          pagination={paginationConfig}
          effect='fade'
          autoplay={{delay: 5000, disableOnInteraction: false}}
          allowTouchMove={false}
          loop={true}
        >
          {banner_slides.map((item, index) => (
            <SwiperSlide
              className='text-center bg-[#f7f7f7] flex justify-center items-center'
              key={index}
            >
              <div className='relative w-full h-full'>
                <Image
                  src={
                    'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/BannerSlide1.webp'
                  }
                  alt='Banner Slide 1'
                  width={1000}
                  height={1000}
                  className='absolute left-0 right-0 bottom-0 w-full h-[26.71769rem] object-fill z-[1] pointer-events-none'
                  draggable={false}
                />
                <Image
                  src={
                    'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/BannerSlide2.webp'
                  }
                  alt='Banner Slide 2'
                  width={1000}
                  height={1000}
                  className='absolute w-[47.79563rem] h-[8.60319rem] left-1/2 bottom-[20rem] -translate-x-1/2 object-fill z-0 pointer-events-none'
                  draggable={false}
                />

                <Image
                  src={
                    'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/bg-mark.png'
                  }
                  alt='Banner Slide 3'
                  width={1000}
                  height={1000}
                  className='absolute w-[90rem] h-[56.25rem] left-1/2 -bottom-[19.2rem] -translate-x-[50.5%] pointer-events-none opacity-100 bg-no-repeat bg-cover z-[1]'
                  draggable={false}
                />

                <Image
                  src={item.img_before.url}
                  alt='Banner Slide 3'
                  width={1000}
                  height={1000}
                  className='absolute w-[39.125rem] h-[28.75rem] left-1/2 bottom-6 -translate-x-1/2 z-[1] transition-opacity duration-500 ease-in-out'
                  draggable={false}
                />

                <Image
                  src={item.img_after.url}
                  alt='Banner Slide 4'
                  width={1000}
                  height={1000}
                  className='absolute w-[39.125rem] h-[28.75rem] left-1/2 bottom-6 -translate-x-1/2 z-[1] transition-opacity duration-500 ease-in-out opacity-0'
                  draggable={false}
                />

                <div className='rounded-[1.45rem] overflow-hidden absolute bottom-[1.61rem] w-[26.44894rem] h-[23.40956rem] z-10 flex left-[1.78rem]'>
                  <Image
                    draggable={false}
                    src={
                      'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/dynamic-content1.webp'
                    }
                    className='absolute top-0 left-0 right-0 bottom-0 w-full h-full object-fill z-[1]'
                    alt='Dynamic Content 1'
                    width={1000}
                    height={1000}
                  />

                  <Image
                    draggable={false}
                    src={
                      'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/dynamic-content11.webp'
                    }
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24.35263rem] h-[21.55419rem] object-fill z-[1]'
                    alt='Dynamic Content 11'
                    width={1000}
                    height={1000}
                  />
                  <div className='w-full h-full relative z-30 flex flex-col justify-between pt-7 pb-7 pl-[1.71rem] cursor-pointer group'>
                    <Image
                      draggable={false}
                      src={
                        'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-buble.webp'
                      }
                      className='absolute top-[4.92em] w-[13.25rem] h-[5.4375rem] z-31 opacity-0 transition-all duration-300 ease-in-out object-cover left-[1.94rem] group-hover:opacity-100'
                      alt='Box Buble'
                      width={1000}
                      height={1000}
                    />

                    <div className='h-fit w-fit inline-flex py-[0.55775rem] px-5 bg-[#1550e5] rounded-lg shadow-[0px_4px_15.2px_rgba(0,89,241,0.15)] transition-transform duration-300 ease-in-out group-hover:-rotate-[3.85deg]'>
                      <Image
                        src={
                          'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-icon1.webp'
                        }
                        className='w-6 h-6 mr-[0.35544rem]'
                        alt='Box Icon 1'
                        width={1000}
                        height={1000}
                      />
                      <span className='text-[#f7f7f7] text-[0.97606rem] font-medium'>
                        Mọi người cho rằng:
                      </span>
                    </div>

                    <p className='text-start w-[21.875rem] text-[#081d1a] text-[1.39438rem] font-normal leading-[134%] relative z-[1] pl-[0.58rem]'>
                      {item.home_banner_des_l}
                    </p>
                  </div>
                </div>

                <div className='rounded-[1.45rem] overflow-hidden absolute bottom-[1.61rem] w-[26.44894rem] h-[23.40956rem] z-10 flex right-[1.78rem]'>
                  <Image
                    draggable={false}
                    src={
                      'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/dynamic-content1.webp'
                    }
                    className='absolute top-0 left-0 right-0 bottom-0 w-full h-full object-fill z-[1] scale-x-[-1]'
                    alt='Dynamic Content 1 Mirrored'
                    width={1000}
                    height={1000}
                  />

                  <Image
                    draggable={false}
                    src={
                      'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/dynamic-content11.webp'
                    }
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24.35263rem] h-[21.55419rem] object-fill z-[1] scale-x-[-1]'
                    alt='Dynamic Content 11 Mirrored'
                    width={1000}
                    height={1000}
                  />

                  <div className='w-full h-full relative z-30 flex flex-col justify-between pt-7 pb-7 pr-[1.71rem] cursor-pointer items-end group'>
                    <Image
                      draggable={false}
                      src={
                        'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-bat.webp'
                      }
                      className='absolute top-[4.92em] w-[15.1875rem] h-[2.625rem] z-31 opacity-100'
                      alt='Box Bat'
                      width={1000}
                      height={1000}
                    />

                    <Image
                      draggable={false}
                      src={
                        'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-search.webp'
                      }
                      className='absolute bottom-[2.92em] right-[3.21rem] w-[11.3125rem] h-[11.3125rem] z-0'
                      alt='Box Search'
                      width={1000}
                      height={1000}
                    />

                    <div className='h-fit w-fit inline-flex py-[0.55775rem] px-5 bg-[#1550e5] rounded-lg shadow-[0px_4px_15.2px_rgba(0,89,241,0.15)] transition-transform duration-300 ease-in-out group-hover:rotate-[3.58deg]'>
                      <Image
                        draggable={false}
                        src={
                          'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/home-box-icon2.webp'
                        }
                        className='w-6 h-6 mr-[0.35544rem]'
                        alt=''
                        width={1000}
                        height={1000}
                      />
                      <span className='text-[#f7f7f7] text-[0.97606rem] font-medium'>
                        SEOhub cho rằng:
                      </span>
                    </div>

                    <div className='text-start w-[21.875rem] text-[#081d1a] text-[1.39438rem] font-normal leading-[134%] relative z-[1] pr-[0.58rem]'>
                      {item.home_banner_des_r}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className='w-full relative h-full hidden xsm:block'
        id='banner-mb'
      >
        {/* <div className="swiper mobileSwiper w-full h-[33rem]">
        <div className="swiper-wrapper">
          <?php foreach ($home_banner_slides as $item) { ?>
          <div className="swiper-slide bg-[#f7f7f7] relative block">
            <div className="flex items-center h-fit mt-[0.38rem] py-[0.41025rem] px-[1.1rem] relative">
              <img src="<?php echo wp_get_attachment_image_url(32, 'full'); ?>" alt=""
                className="w-[1.125rem] h-[1.125rem] mr-[0.26rem] transition-opacity duration-800 ease-in-out"
                draggable="false" />
              <img src="<?php echo wp_get_attachment_image_url(36, 'full'); ?>" alt=""
                className="w-[1.125rem] h-[1.125rem] mr-[0.26rem] transition-opacity duration-800 ease-in-out absolute top-1/2 -translate-y-1/2 opacity-0"
                draggable="false" />
              <span className="text-[0.875rem] font-medium text-[#1550e5] transition-opacity duration-800 ease-in-out">Mọi
                người cho rằng</span>
              <span
                className="text-[0.875rem] font-medium text-[#1550e5] transition-opacity duration-800 ease-in-out absolute top-1/2 -translate-y-1/2 left-[2.825rem] opacity-0">SEOhub
                cho rằng</span>
            </div>
  
            <div className="my-[0.4rem_0_0.62rem_0] w-full px-[1.1rem]">
              <div className="bg-[#e6e6e6] h-[0.0625rem] w-full"></div>
            </div>
  
            <div className="mt-[0.88rem] relative w-[18.75rem] pl-[1.1rem]">
              <div className="relative text-start w-full transition-[height] duration-800 ease-in-out">
                <span
                  className="text-start w-full text-[#081d1a] text-[1.25rem] font-normal leading-[140%] transition-opacity duration-800 ease-in-out">
                  <?php echo $item['home_banner_des_l'] ?>
                </span>
                <span
                  className="text-start w-full text-[#081d1a] text-[1.25rem] font-normal leading-[140%] transition-opacity duration-800 ease-in-out absolute top-0 left-0 opacity-0">
                  <?php echo $item['home_banner_des_r'] ?>
                </span>
              </div>
  
              <div className="mt-[0.56rem] flex items-center relative z-10 transition-all duration-800 ease-in-out">
                <div
                  className="w-[2.54188rem] h-[2.54188rem] rounded-full flex justify-center items-center transition-all duration-800 ease-in-out absolute -left-[2.54188rem] scale-0 border border-[#e6e6e6] bg-[rgba(255,255,255,0.39)] opacity-0 backdrop-blur-[2px]">
                  <div className="w-[0.66213rem] h-[0.97275rem] bg-contain bg-no-repeat"
                    style="background-image: url('<?php echo wp_get_attachment_image_url(34, 'full'); ?>')"></div>
                </div>
                <div
                  className="w-[6.94181rem] h-[2.55238rem] rounded-[1.27619rem] overflow-hidden flex justify-center items-center transition-all duration-800 ease-in-out relative">
                  <div
                    className="w-full h-full bg-[rgba(255,255,255,0.39)] backdrop-blur-[2px] absolute top-0 left-0 right-0 bottom-0 opacity-0 transition-all duration-800 ease-in-out">
                  </div>
                  <div
                    className="w-full h-full bg-gradient-to-b from-[#001cb3] to-[#548beb] absolute top-0 left-0 right-0 bottom-0 opacity-100 transition-all duration-800 ease-in-out">
                  </div>
                  <span
                    className="z-[1] transition-all duration-800 ease-in-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full leading-[134%] tracking-[0.0455rem] text-[0.90956rem] font-normal uppercase opacity-100 text-white font-bold">Nhưng
                    !</span>
                  <span
                    className="z-[1] transition-all duration-800 ease-in-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full leading-[134%] tracking-[0.0455rem] text-[0.90956rem] font-normal opacity-0 text-[#1550e5]">Mọi
                    người thấy</span>
                </div>
                <div
                  className="w-[2.54188rem] h-[2.54188rem] rounded-full flex justify-center items-center transition-all duration-800 ease-in-out scale-100 bg-gradient-to-b from-[#001cb3] to-[#548beb] opacity-100">
                  <div className="w-[0.66213rem] h-[0.97275rem] bg-contain bg-no-repeat"
                    style="background-image: url('<?php echo wp_get_attachment_image_url(55, 'full'); ?>')"></div>
                </div>
              </div>
            </div>
  
            <div className="relative">
              <img src="<?php echo wp_get_attachment_image_url($item['img_before'], 'full'); ?>" alt="anh nho"
                className="absolute w-auto h-[15.75488rem] z-3 object-cover left-1/2 -translate-x-1/2 bottom-[0.84rem] transition-opacity duration-800 ease-in-out"
                draggable="false" />
              <img src="<?php echo wp_get_attachment_image_url($item['img_after'], 'full'); ?>" alt="anh nho"
                className="absolute w-auto h-[15.75488rem] z-3 object-cover left-1/2 -translate-x-1/2 bottom-[0.84rem] transition-opacity duration-800 ease-in-out opacity-0"
                draggable="false" />
              <img src="<?php echo wp_get_attachment_image_url(21, 'full'); ?>" alt="bg banner mid"
                className="absolute w-full h-[20.007rem] bottom-[5.7rem] z-1" draggable="false" />
              <img src="<?php echo wp_get_attachment_image_url(19, 'full'); ?>" alt="bg banner"
                className="absolute bottom-0 z-2 object-cover w-full h-[14.87519rem]" draggable="false" />
              <div className="bg-white h-8 absolute bottom-0 w-full z-1"></div>
            </div>
          </div>
          <?php } ?>
        </div>
  
        <div className="swiper-pagination"></div>
      </div> */}
      </div>
    </section>
  )
}

export default Banner
