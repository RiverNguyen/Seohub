'use client'

import {Post} from '@/types/post.interface'
import Image from 'next/image'
import {Skeleton} from '@/components/ui/skeleton'

interface PostGridProps {
  posts: Post[]
  isLoading: boolean
}

const PostGrid = ({posts, isLoading}: PostGridProps) => {
  if (isLoading) {
    return (
      <>
        {[1, 2, 3, 4].map((i) => (
          <Skeleton
            key={i}
            className='h-[14.375rem] rounded-[1.25rem]'
          />
        ))}
      </>
    )
  }

  return (
    <>
      {posts.map((post: Post) => (
        <a
          key={post.id}
          href={post.link}
          className='relative p-[1.29rem_1.25rem_1.21rem] rounded-[1.25rem] border border-[#e4e4e4] bg-white shadow-[0px_4px_24.4px_0px_rgba(0,0,0,0.04)] h-[14.375rem] flex flex-col justify-between overflow-hidden group hover:border-[#1550e5] transition-all duration-300 xsm:border-none xsm:shadow-none xsm:h-auto xsm:p-0 xsm:rounded-none'
        >
          <article>
            <div className='absolute inset-0 w-full h-full opacity-0 scale-120 xsm:scale-100 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100'>
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
            <div className='relative z-1 h-[11.875rem] xsm:h-auto w-full flex flex-col justify-between'>
              {post.thumbnail && (
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={1000}
                  height={1000}
                  className='w-[14.625rem] h-[8.125rem] object-cover rounded-[0.625rem] xsm:block hidden xsm:mb-[0.375rem]'
                />
              )}
              <div className='text-[1.25rem] leading-[1.4375rem] text-[#081d1a] group-hover:text-white transition-colors duration-300 xsm:mb-body-14 xsm:line-clamp-2 xsm:w-[14rem]'>
                {post.title}
              </div>
              <div className='flex items-end justify-between pt-[0.625rem] xsm:pt-[0.375rem] border-t border-[#e8e8e8] xsm:border-none'>
                <div className='text-[1.875rem] leading-[1.72125rem] text-[#e6e8ea] group-hover:text-white transition-colors duration-300 xsm:text-[0.75rem] xsm:leading-[0.73rem]'>
                  {post.date}
                </div>
                <span className='text-[#1550e5] text-base leading-[1.39rem] group-hover:text-white transition-colors duration-300 xsm:hidden'>
                  Xem chi tiết
                </span>
              </div>
            </div>
          </article>
        </a>
      ))}
    </>
  )
}

export default PostGrid
