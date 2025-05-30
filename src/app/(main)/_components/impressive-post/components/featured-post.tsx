'use client'

import {Post} from '@/types/post.interface'
import Image from 'next/image'
import {Skeleton} from '@/components/ui/skeleton'

interface FeaturedPostProps {
  post: Post | undefined
  isLoading: boolean
}

const FeaturedPost = ({post, isLoading}: FeaturedPostProps) => {
  if (isLoading) {
    return (
      <div className='flex-shrink-0 h-[29.4375rem] w-[47rem] relative bg-[#ccc] rounded-[1.25rem] overflow-hidden'>
        <Skeleton className='w-full h-full rounded-[1.25rem]' />
        <div className='absolute top-[19.17rem] left-[2.59rem] w-[40.75rem] z-5'>
          <Skeleton className='h-[1.90956rem] w-[30rem] mb-[0.3125rem]' />
          <Skeleton className='h-[1.43713rem] w-[25rem]' />
        </div>
        <div className='absolute left-10 bottom-[3.25rem] z-5'>
          <Skeleton className='h-[1.72125rem] w-[8rem]' />
        </div>
        <div className='absolute right-[1.475rem] bottom-[2.875rem] px-[2.87rem] pl-[4.5rem] z-5'>
          <Skeleton className='h-[1.125rem] w-[6rem]' />
        </div>
      </div>
    )
  }

  if (!post) return null

  return (
    <div className='flex-shrink-0 h-[29.4375rem] w-[47rem] relative bg-[#ccc] rounded-[1.25rem] shadow-[0px_11.187px_14.916px_-5.594px_rgba(18,18,18,0.03),0.932px_1.865px_7.458px_0px_rgba(248,248,248,0.06)_inset] backdrop-blur-[11.65329360961914px] overflow-hidden'>
      <a
        href={post.link}
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
            {post.thumbnail && (
              <Image
                width={470}
                height={294}
                src={post.thumbnail}
                alt={post.title}
                className='w-full h-full object-cover'
              />
            )}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/54'></div>
          </div>
          <div className='absolute top-[19.17rem] left-[2.59rem] w-[40.75rem] z-5'>
            <div className='text-[1.50038rem] leading-[1.90956rem] font-normal text-[#081d1a] mb-[0.3125rem] line-clamp-1'>
              {post.title}
            </div>
            <p className='text-[1.09119rem] leading-[1.43713rem] text-[#666d80] line-clamp-1'>
              {post.excerpt}
            </p>
          </div>
          <div className='absolute left-10 bottom-[3.25rem] z-5 text-[1.96719rem] leading-[1.72125rem] text-[#e6e8ea]'>
            {post.date}
          </div>
          <div className='absolute right-[1.475rem] bottom-[2.875rem] px-[2.87rem] pl-[4.5rem] z-5 flex items-center justify-center text-white text-[1.125rem] font-bold leading-[110%]'>
            Xem chi tiết
          </div>
        </article>
      </a>
    </div>
  )
}

export default FeaturedPost
