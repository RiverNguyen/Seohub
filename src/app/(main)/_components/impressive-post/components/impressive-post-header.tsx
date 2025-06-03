'use client'

import CustomBorderedButton from '@/components/bordered-button'
import type {ImpressivePost} from '@/types/post.interface'

interface ImpressivePostHeaderProps {
  impressivePost: ImpressivePost
}

const ImpressivePostHeader = ({impressivePost}: ImpressivePostHeaderProps) => {
  return (
    <div className='flex items-center justify-between mb-10 xsm:mb-[1.5rem]'>
      <h2
        className='text-[2.875rem] leading-[4rem] font-normal text-[#0725b7] xsm:mb-title-h3 xsm:pl-[0.75rem]'
        dangerouslySetInnerHTML={{
          __html: impressivePost?.title,
        }}
      ></h2>
      {impressivePost?.discovery_post &&
        impressivePost?.discovery_post?.url && (
          <a
            href={impressivePost?.discovery_post?.url}
            className='vtc__link-detail xsm:hidden'
          >
            <CustomBorderedButton
              color='#1550E5'
              borderColor='#1550E5'
              borderLine='rgb(134 132 132 / 10%)'
            >
              {impressivePost?.discovery_post?.title}
            </CustomBorderedButton>
          </a>
        )}
    </div>
  )
}

export default ImpressivePostHeader
