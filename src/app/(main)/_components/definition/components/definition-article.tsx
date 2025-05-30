import {CustomBadge} from '@/components/custom-badge'

interface DefinitionArticleProps {
  title: string
  content: string
}

const DefinitionArticle = ({title, content}: DefinitionArticleProps) => {
  return (
    <article className='flex xsm:flex-col-reverse flex-row items-center justify-between xsm:mt-[0rem] mt-[5rem] w-[92.39375rem] xsm:w-full max-w-full mx-auto relative z-30'>
      <div
        dangerouslySetInnerHTML={{__html: content}}
        className='[&_li]:relative [&_li]:pl-[1.675rem] [&_li]:mb-[0.5625rem] [&_li]:w-[31.6875rem] [&_li]:text-[#081d1a] [&_li]:text-[1.125rem] [&_li]:leading-[1.5rem] [&_li]:font-[400] [&_li]:after:bg-[url(/images/arrow-right-blue.svg)] [&_li]:after:bg-no-repeat [&_li]:after:bg-contain [&_li]:after:w-[1.17456rem] [&_li]:after:h-[1.491rem] [&_li]:after:absolute [&_li]:after:left-0 [&_li]:after:top-[0.5rem] [&_li]:after:translate-y-[-50%] [&_strong]:text-[#1550E5] [&_strong]:font-[400] xsm:[&_li]:w-full xsm:[&_li]:text-[0.875rem] xsm:[&_li]:leading-[1.3125rem] xsm:px-[0.625rem] xsm:py-[0.625rem] xsm:[&_li]:after:w-[0.75rem] xsm:[&_li]:after:h-[0.75rem] xsm:[&_li]:pl-[0.8125rem]'
      ></div>
      <div className='flex flex-col items-end xsm:items-start xsm:w-full xsm:px-[0.625rem] xsm:py-[0.625rem] xsm:mb-[1.125rem]'>
        <div
          className='flex flex-col'
          id='badge'
        >
          <CustomBadge>Tinh thần luôn theo đuổi</CustomBadge>
        </div>
        <h2
          dangerouslySetInnerHTML={{__html: title}}
          className='text-[2.875rem] leading-[4rem] whitespace-nowrap text-right text-[#0725b7] font-normal xsm:text-[1.625rem] xsm:leading-[1.95rem] xsm:text-left'
        ></h2>
      </div>
    </article>
  )
}

export default DefinitionArticle
