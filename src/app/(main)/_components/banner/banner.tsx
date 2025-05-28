import ImageFallback from '@/components/image/ImageFallback'
import fetchData from '@/fetches/fetchData'
import type {IBanner} from '@/types/banner.interface'

const Banner = async () => {
  const {acf}: {acf: IBanner} = await fetchData({
    api: '/v2/pages/11?_fields=acf&acf_format=standard#',
    method: 'GET',
  })

  const {banner_slides} = acf

  console.log(banner_slides)

  return (
    <section
      className='flex justify-center bg-[#f7f7f7] h-[41.38rem] w-screen mx-auto pb-8'
      id='banner'
    >
      <div
        className='w-[93.55306rem] relative hidden lg:block'
        id='banner-pc'
      >
        <div className='swiper mySwiper hide-navigation w-full h-full'>
          <div className='swiper-wrapper'>
            {banner_slides.map((item) => (
              <div
                className='swiper-slide text-center bg-[#f7f7f7] flex justify-center items-center'
                key={item.img_before.ID}
              >
                <div className='relative w-full h-full'>
                  <ImageFallback
                    src={item.img_before.url}
                    className='absolute left-0 right-0 bottom-0 w-full h-[26.71769rem] object-fill z-[1] pointer-events-none'
                    alt='Banner Slide 1'
                    draggable='false'
                    width={item.img_before.width}
                    height={item.img_before.height}
                  />

                  <ImageFallback
                    src={item.img_before.url}
                    className='absolute w-[47.79563rem] h-[8.60319rem] left-1/2 bottom-[20rem] -translate-x-1/2 object-fill z-0 pointer-events-none'
                    alt='Banner Slide 2'
                    draggable='false'
                    width={item.img_before.width}
                    height={item.img_before.height}
                  />
                  <ImageFallback
                    src={item.img_before.url}
                    className='absolute w-[90rem] h-[56.25rem] left-1/2 bottom-[-19.2rem] -translate-x-[50.5%] pointer-events-none opacity-100 bg-no-repeat bg-cover z-[1]'
                    alt='Banner Slide 22'
                    draggable='false'
                    width={item.img_before.width}
                    height={item.img_before.height}
                  />

                  <ImageFallback
                    src={item.img_before.url}
                    className='absolute w-[39.125rem] h-[28.75rem] left-1/2 bottom-6 -translate-x-1/2 z-[1] transition-opacity duration-500 ease-in-out'
                    alt='Banner Slide 3'
                    draggable='false'
                    width={item.img_before.width}
                    height={item.img_before.height}
                  />

                  <ImageFallback
                    src={item.img_after.url}
                    className='absolute w-[39.125rem] h-[28.75rem] left-1/2 bottom-6 -translate-x-1/2 z-[1] transition-opacity duration-500 ease-in-out opacity-0'
                    alt='Banner Slide 4'
                    draggable='false'
                    width={item.img_after.width}
                    height={item.img_after.height}
                  />

                  <div className='rounded-[1.45rem] overflow-hidden absolute bottom-[1.61rem] w-[26.44894rem] h-[23.40956rem] z-10 flex left-[1.78rem]'>
                    <ImageFallback
                      src={item.img_after.url}
                      className='absolute inset-0 w-full h-full object-fill z-[1]'
                      alt='Dynamic Content 1'
                      draggable='false'
                      width={item.img_after.width}
                      height={item.img_after.height}
                    />

                    <ImageFallback
                      src={item.img_after.url}
                      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24.35263rem] h-[21.55419rem] object-fill z-[1]'
                      alt='Dynamic Content 11'
                      draggable='false'
                      width={item.img_after.width}
                      height={item.img_after.height}
                    />

                    <div className='w-full h-full relative z-30 flex flex-col justify-between pt-7 pb-7 pl-[1.71rem] cursor-pointer group'>
                      <ImageFallback
                        src={item.img_after.url}
                        className='absolute top-[4.92em] w-[15.1875rem] h-[2.625rem] z-31 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'
                        alt='Box Buble'
                        draggable='false'
                        width={item.img_after.width}
                        height={item.img_after.height}
                      />

                      <div className='h-fit w-fit inline-flex py-[0.55775rem] px-5 bg-[#1550e5] rounded-lg shadow-[0px_4px_15.2px_rgba(0,89,241,0.15)] transition-transform duration-300 ease-in-out group-hover:rotate-[-3.85deg]'>
                        <ImageFallback
                          src={item.img_after.url}
                          className='w-6 h-6 mr-[0.35544rem]'
                          alt=''
                          draggable='false'
                          width={item.img_after.width}
                          height={item.img_after.height}
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
                    <ImageFallback
                      src={item.img_after.url}
                      className='absolute inset-0 w-full h-full object-fill z-[1] scale-x-[-1]'
                      alt='Dynamic Content 1 Mirrored'
                      draggable='false'
                      width={item.img_after.width}
                      height={item.img_after.height}
                    />

                    <ImageFallback
                      src={item.img_after.url}
                      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24.35263rem] h-[21.55419rem] object-fill z-[1] scale-x-[-1]'
                      alt='Dynamic Content 11 Mirrored'
                      draggable='false'
                      width={item.img_after.width}
                      height={item.img_after.height}
                    />

                    <div className='w-full h-full relative z-30 flex flex-col justify-between pt-7 pb-7 pr-[1.71rem] items-end cursor-pointer group'>
                      <ImageFallback
                        src={item.img_after.url}
                        className='absolute top-[4.92em] w-[15.1875rem] h-[2.625rem] z-31 right-[4.1rem] opacity-100'
                        alt='Box Bat'
                        draggable='false'
                        width={item.img_after.width}
                        height={item.img_after.height}
                      />

                      <ImageFallback
                        src={item.img_after.url}
                        className='absolute bottom-[2.92em] right-[3.21rem] w-[11.3125rem] h-[11.3125rem] z-0'
                        alt='Box Search'
                        draggable='false'
                        width={item.img_after.width}
                        height={item.img_after.height}
                      />

                      <div className='h-fit w-fit inline-flex py-[0.55775rem] px-5 bg-[#1550e5] rounded-lg shadow-[0px_4px_15.2px_rgba(0,89,241,0.15)] transition-transform duration-300 ease-in-out group-hover:rotate-[3.58deg]'>
                        <ImageFallback
                          src={item.img_after.url}
                          className='w-6 h-6 mr-[0.35544rem]'
                          alt=''
                          draggable='false'
                          width={item.img_after.width}
                          height={item.img_after.height}
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
              </div>
            ))}
          </div>

          <div className='swiper-pagination'></div>
        </div>
      </div>
    </section>
  )
}

export default Banner
