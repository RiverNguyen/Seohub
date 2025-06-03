'use client'

import {Skeleton} from '@/components/ui/skeleton'
import fetchData from '@/fetches/fetchData'
import {Category} from '@/types/category.interface'
import type {ImpressivePost, Post} from '@/types/post.interface'
import {useEffect, useState} from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import CategoryTabs from './components/category-tabs'
import FeaturedPost from './components/featured-post'
import ImpressivePostHeader from './components/impressive-post-header'
import PostGrid from './components/post-grid'
import CustomBorderedButton from '@/components/bordered-button'

const ImpressivePost = ({impressivePost}: {impressivePost: ImpressivePost}) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const categoriesData = await fetchData({
          api: '/v2/categories',
          method: 'GET',
        })

        setCategories(categoriesData)
        await fetchPostsByCategory('all')
      } finally {
        setIsLoading(false)
      }
    }

    fetchInitialData()
  }, [])

  const fetchPostsByCategory = async (categorySlug: string) => {
    setIsLoadingPosts(true)
    try {
      const apiUrl =
        categorySlug === 'all'
          ? '/api/v1/posts'
          : `/api/v1/posts?category=${categorySlug}`

      const posts = await fetchData({
        api: apiUrl,
        method: 'GET',
      })
      setFilteredPosts(posts)
    } finally {
      setIsLoadingPosts(false)
    }
  }

  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(slug)
    fetchPostsByCategory(slug)
  }

  if (isLoading) {
    return (
      <section className='relative w-full bg-white py-[4.25rem] z-10'>
        <div className='w-[93.375rem] mx-auto'>
          <div className='flex items-center justify-between mb-10'>
            <Skeleton className='h-[4rem] w-[30rem]' />
            <Skeleton className='h-[3rem] w-[10rem]' />
          </div>
          <div className='relative mb-[0.9375rem]'>
            <div className='flex gap-8'>
              <Skeleton className='h-8 w-32' />
              <Skeleton className='h-8 w-32' />
              <Skeleton className='h-8 w-32' />
            </div>
          </div>
          <div className='flex justify-between w-full'>
            <Skeleton className='h-[29.4375rem] w-[47rem] rounded-[1.25rem]' />
            <div className='grid grid-cols-2 gap-[0.8125rem] w-[45.5625rem]'>
              {[1, 2, 3, 4].map((i) => (
                <Skeleton
                  key={i}
                  className='h-[14.375rem] rounded-[1.25rem]'
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id='impressive-post'
      className='relative w-full bg-white py-[4.25rem] z-10'
    >
      <div className='w-[93.375rem] mx-auto xsm:w-full'>
        <ImpressivePostHeader impressivePost={impressivePost} />
        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
        <div className='flex justify-between w-full xsm:px-[0.75rem]'>
          <FeaturedPost
            post={filteredPosts[0]}
            isLoading={isLoadingPosts}
          />
          <div className='grid grid-cols-2 gap-[0.8125rem] flex-shrink-0 w-[45.5625rem] xsm:hidden'>
            <PostGrid
              posts={filteredPosts.slice(1, 5)}
              isLoading={isLoadingPosts}
            />
          </div>
        </div>
        <div className='hidden xsm:block'>
          <style
            jsx
            global
          >{`
            .blog-swiper .swiper-wrapper {
              padding: 0 0.75rem;
            }

            .swiper-button-next {
              right: -3.25rem;
              bottom: -2.675rem;
            }

            .swiper-button-prev {
              left: 0.75rem;
              bottom: -3.5rem;
            }

            .swiper-button-next,
            .swiper-button-prev {
              display: flex;
              width: 2rem;
              height: 2rem;
              padding: 0.44444rem 0.5rem 0.44444rem 0.38888rem;
              justify-content: center;
              align-items: center;
              border-radius: 1rem;
              background: rgba(194, 194, 194, 0.2);
              position: relative !important;
            }

            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background: rgba(194, 194, 194, 0.2);
            }

            .swiper-button-next:hover::after,
            .swiper-button-prev:hover::after {
              color: white;
            }

            .swiper-button-next::after,
            .swiper-button-prev::after {
              display: none;
            }

            .swiper-button-disabled {
              opacity: 0.35;
              cursor: auto;
              pointer-events: none;
            }
          `}</style>
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1.5}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{clickable: true}}
            className='w-full mt-[0.7rem] xsm:mx-[0.75rem] blog-swiper'
          >
            {filteredPosts.slice(1).map((post, index) => (
              <SwiperSlide key={index}>
                <PostGrid
                  posts={[post]}
                  isLoading={isLoadingPosts}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='flex justify-between items-center'>
            <div className=''>
              <div className='swiper-button-prev'>
                <svg
                  width='18'
                  height='19'
                  viewBox='0 0 18 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.61111 8.78841L11.6979 3.19813C11.8021 3.08239 11.9352 3.02452 12.0972 3.02452C12.2593 3.02452 12.3924 3.08239 12.4965 3.19813C12.6123 3.32545 12.6701 3.47591 12.6701 3.64952C12.6701 3.82313 12.6123 3.96781 12.4965 4.08355L7.82639 9.2398L12.4965 14.3961C12.6123 14.5118 12.6701 14.6565 12.6701 14.8301C12.6701 15.0037 12.6123 15.1542 12.4965 15.2815C12.3924 15.3972 12.2593 15.4551 12.0972 15.4551C11.9352 15.4551 11.8021 15.3972 11.6979 15.2815L6.61111 9.69119C6.49537 9.56387 6.4375 9.41341 6.4375 9.2398C6.4375 9.06619 6.49537 8.91573 6.61111 8.78841Z'
                    fill='#658191'
                  />
                </svg>
              </div>
              <div className='swiper-button-next'>
                <svg
                  width='19'
                  height='19'
                  viewBox='0 0 19 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.9414 8.78841L7.87191 3.19813C7.75617 3.08239 7.62017 3.02452 7.46392 3.02452C7.30767 3.02452 7.17168 3.08239 7.05594 3.19813C6.94019 3.32545 6.88232 3.47591 6.88232 3.64952C6.88232 3.82313 6.94019 3.96781 7.05594 4.08355L11.7434 9.2398L7.05594 14.3961C6.94019 14.5118 6.88232 14.6565 6.88232 14.8301C6.88232 15.0037 6.94019 15.1542 7.05594 15.2815C7.17168 15.3972 7.30767 15.4551 7.46392 15.4551C7.62017 15.4551 7.75617 15.3972 7.87191 15.2815L12.9414 9.69119C13.0571 9.56387 13.115 9.41341 13.115 9.2398C13.115 9.06619 13.0571 8.91573 12.9414 8.78841Z'
                    fill='#658191'
                  />
                </svg>
              </div>
            </div>
            <div className='hidden xsm:block absolute right-[0.75rem] bottom-[1.25rem]'>
              <CustomBorderedButton
                borderColor='#1550E5'
                color='#1550E5'
              >
                Khám phá Blog
              </CustomBorderedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpressivePost
