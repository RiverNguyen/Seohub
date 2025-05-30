'use client'

import fetchData from '@/fetches/fetchData'
import type {IBanner} from '@/types/banner.interface'
import {useEffect, useState} from 'react'
import BannerPC from './components/banner-pc'
import BannerMobile from './components/banner-mobile'
import BannerSkeleton from './components/banner-skeleton'

const Banner = () => {
  const [banner_slides, setBannerSlides] = useState<IBanner[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBannerSlides = async () => {
      try {
        const {acf}: {acf: {banner_slides: IBanner[]}} = await fetchData({
          api: '/v2/pages/11?_fields=acf&acf_format=standard#',
          method: 'GET',
        })

        setBannerSlides(acf.banner_slides)
      } catch (error) {
        console.error('Error fetching banner slides:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBannerSlides()
  }, [])

  if (isLoading) {
    return <BannerSkeleton />
  }

  return (
    <section
      className='flex justify-center bg-[#f7f7f7] h-[41.38rem] max-w-full w-screen mx-auto pb-8'
      id='banner'
    >
      <BannerPC banner_slides={banner_slides} />
      <BannerMobile banner_slides={banner_slides} />
    </section>
  )
}

export default Banner
