'use client'

import CustomBorderedButton from '@/components/bordered-button'
import fetchData from '@/fetches/fetchData'
import {cn} from '@/lib/utils'
import {Category} from '@/types/category.interface'
import type {ImpressivePost, Post} from '@/types/post.interface'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {Skeleton} from '@/components/ui/skeleton'

const ImpressivePost = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [impressivePost, setImpressivePost] = useState<ImpressivePost | null>(
    null,
  )
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [acfData, categoriesData] = await Promise.all([
          fetchData({
            api: '/v2/pages/11?_fields=acf&acf_format=standard#',
            method: 'GET',
          }),
          fetchData({
            api: '/v2/categories',
            method: 'GET',
          }),
        ])

        setImpressivePost(acfData.acf.impressive_post)
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

  const categoriesHavePosts = categories.filter(
    (category: Category) => category.count > 0,
  )

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

  if (!impressivePost) {
    return null
  }

  return (
    <section
      id='impressive-post'
      className='relative w-full bg-white py-[4.25rem] z-10'
    >
      <div className='w-[93.375rem] mx-auto'>
        <div className='flex items-center justify-between mb-10'>
          <h2
            className='text-[2.875rem] leading-[4rem] font-normal text-[#0725b7]'
            dangerouslySetInnerHTML={{
              __html: impressivePost.title,
            }}
          ></h2>
          {impressivePost.discovery_post &&
            impressivePost.discovery_post.url && (
              <a
                href={impressivePost.discovery_post.url}
                className='vtc__link-detail'
              >
                <CustomBorderedButton
                  color='#1550E5'
                  borderColor='#1550E5'
                  borderLine='rgb(134 132 132 / 10%)'
                >
                  {impressivePost.discovery_post.title}
                </CustomBorderedButton>
              </a>
            )}
        </div>
        <div className='relative mb-[0.9375rem]'>
          <ul className='flex list-none border-b border-[#e6e6e6] overflow-x-auto scrollbar-hide'>
            <li
              data-slug='all'
              onClick={() => handleCategoryClick('all')}
              className={cn(
                'flex-shrink-0 text-[0.875rem] font-bold leading-[170%] tracking-[-0.0225rem] cursor-pointer py-[0.375rem]',
                selectedCategory === 'all'
                  ? 'text-[#1550e5]'
                  : 'text-[#666d80]',
              )}
            >
              <p className='mr-[1.94rem]'>Tin tức mới nhất</p>
            </li>
            {categoriesHavePosts.map((item: Category) => (
              <li
                key={item.id}
                data-slug={item.slug}
                onClick={() => handleCategoryClick(item.slug)}
                className={cn(
                  'flex-shrink-0 text-[0.875rem] font-bold leading-[170%] tracking-[-0.0225rem] cursor-pointer py-[0.375rem] mr-[1.94rem]',
                  selectedCategory === item.slug
                    ? 'text-[#1550e5]'
                    : 'text-[#666d80]',
                )}
              >
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex justify-between w-full'>
          <div className='flex-shrink-0 h-[29.4375rem] w-[47rem] relative bg-[#ccc] rounded-[1.25rem] shadow-[0px_11.187px_14.916px_-5.594px_rgba(18,18,18,0.03),0.932px_1.865px_7.458px_0px_rgba(248,248,248,0.06)_inset] backdrop-blur-[11.65329360961914px] overflow-hidden'>
            {isLoadingPosts ? (
              <Skeleton className='w-full h-full rounded-[1.25rem]' />
            ) : (
              <a
                href={filteredPosts[0]?.link}
                className='relative w-full h-full'
              >
                <article className='relative w-full h-full'>
                  <div className='relative w-full h-full'>
                    <Image
                      src='/images/post-overlay.svg'
                      alt='post-overlay'
                      width={709}
                      height={162}
                      className='absolute bottom-[1.575rem] left-[1.575rem] pr-[3rem] w-full h-auto z-5 object-cover'
                    />
                    {filteredPosts[0]?.thumbnail && (
                      <Image
                        width={470}
                        height={294}
                        src={filteredPosts[0].thumbnail}
                        alt={filteredPosts[0].title}
                        className='w-full h-full object-cover'
                      />
                    )}
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/54'></div>
                  </div>
                  <div className='absolute top-[19.17rem] left-[2.59rem] w-[40.75rem] z-5'>
                    <div className='text-[1.50038rem] leading-[1.90956rem] font-normal text-[#081d1a] mb-[0.3125rem] line-clamp-1'>
                      {filteredPosts[0]?.title}
                    </div>
                    <p className='text-[1.09119rem] leading-[1.43713rem] text-[#666d80] line-clamp-1'>
                      {filteredPosts[0]?.excerpt}
                    </p>
                  </div>
                  <div className='absolute left-10 bottom-[3.25rem] z-5 text-[1.96719rem] leading-[1.72125rem] text-[#e6e8ea]'>
                    {filteredPosts[0]?.date}
                  </div>
                  <div className='absolute right-[1.475rem] bottom-[2.875rem] px-[2.87rem] pl-[4.5rem] z-5 flex items-center justify-center text-white text-[1.125rem] font-bold leading-[110%]'>
                    Xem chi tiết
                  </div>
                </article>
              </a>
            )}
          </div>
          <div className='grid grid-cols-2 gap-[0.8125rem] flex-shrink-0 w-[45.5625rem]'>
            {isLoadingPosts
              ? [1, 2, 3, 4].map((i) => (
                  <Skeleton
                    key={i}
                    className='h-[14.375rem] rounded-[1.25rem]'
                  />
                ))
              : filteredPosts.slice(1, 5).map((post: Post) => (
                  <a
                    key={post.id}
                    href={post.link}
                    className='relative p-[1.29rem_1.25rem_1.21rem] rounded-[1.25rem] border border-[#e4e4e4] bg-white shadow-[0px_4px_24.4px_0px_rgba(0,0,0,0.04)] h-[14.375rem] flex flex-col justify-between overflow-hidden group hover:border-[#1550e5] transition-all duration-300'
                  >
                    <article>
                      <div className='absolute inset-0 w-full h-full opacity-0 scale-120 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100'>
                        {post.thumbnail && (
                          <Image
                            width={470}
                            height={294}
                            src={post.thumbnail}
                            alt={post.title}
                            className='w-full h-full object-cover'
                          />
                        )}
                        <div className='absolute inset-0 bg-black/40'></div>
                      </div>
                      <div className='relative z-1 h-[11.875rem] w-full flex flex-col justify-between'>
                        <div className='text-[1.25rem] leading-[1.4375rem] text-[#081d1a] group-hover:text-white transition-colors duration-300'>
                          {post.title}
                        </div>
                        <div className='flex items-end justify-between pt-[0.625rem] border-t border-[#e8e8e8]'>
                          <div className='text-[1.875rem] leading-[1.72125rem] text-[#e6e8ea] group-hover:text-white transition-colors duration-300'>
                            {post.date}
                          </div>
                          <span className='text-[#1550e5] text-base leading-[1.39rem] group-hover:text-white transition-colors duration-300'>
                            Xem chi tiết
                          </span>
                        </div>
                      </div>
                    </article>
                  </a>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpressivePost
