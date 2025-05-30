'use client'

import fetchData from '@/fetches/fetchData'
import {Category} from '@/types/category.interface'
import type {ImpressivePost, Post} from '@/types/post.interface'
import {useState, useEffect} from 'react'
import {Skeleton} from '@/components/ui/skeleton'
import ImpressivePostHeader from './components/impressive-post-header'
import CategoryTabs from './components/category-tabs'
import FeaturedPost from './components/featured-post'
import PostGrid from './components/post-grid'

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
        <ImpressivePostHeader impressivePost={impressivePost} />
        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
        <div className='flex justify-between w-full'>
          <FeaturedPost
            post={filteredPosts[0]}
            isLoading={isLoadingPosts}
          />
          <div className='grid grid-cols-2 gap-[0.8125rem] flex-shrink-0 w-[45.5625rem]'>
            <PostGrid
              posts={filteredPosts.slice(1, 5)}
              isLoading={isLoadingPosts}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpressivePost
