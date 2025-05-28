import DefinitionMarquee from '@/app/(main)/_components/definition/definition-marquee'
import fetchData from '@/fetches/fetchData'
import type {Definition} from '@/types/definition.interface'
import Image from 'next/image'
import DefinitionClient from './definition-client'
import {CustomBadge} from '@/components/custom-badge'

const Definition = async () => {
  const {acf} = await fetchData({
    api: '/v2/pages/11?_fields=acf&acf_format=standard#',
    method: 'GET',
  })

  const definition: Definition = acf.definition

  return (
    <>
      <DefinitionClient />
      <DefinitionMarquee definition_partner={definition.definition_partner} />

      <section className='h-[50.625rem] xsm:h-auto relative mt-[1rem] overflow-hidden'>
        <div className='absolute left-0 top-0 z-10 bg-no-repeat'>
          <Image
            width={2181}
            height={1110}
            src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/definition-bg-1.png'
            alt=''
            className='w-[75rem] h-[36.25rem] opacity-50 bg-contain xsm:hidden block'
            draggable='false'
          />
        </div>
        <div className='absolute right-0 bottom-0 z-10 bg-no-repeat'>
          <Image
            src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/definition-bg-2.png'
            alt=''
            className='w-[75rem] h-[36.25rem] opacity-40'
            draggable='false'
            width={1891}
            height={1122}
          />
        </div>
        <Image
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xsm:hidden block h-[42.28856rem] w-[67.66169rem] opacity-80 bg-no-repeat bg-cover z-20'
          src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/bg-mark.png'
          alt=''
          draggable='false'
          width={2166}
          height={1354}
        />
        <article className='flex xsm:flex-col-reverse flex-row items-center justify-between xsm:mt-[0rem] mt-[5rem] w-[92.39375rem] xsm:w-full max-w-full mx-auto relative z-30'>
          <div
            dangerouslySetInnerHTML={{__html: definition.definition_content}}
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
              dangerouslySetInnerHTML={{__html: definition.definition_title}}
              className='text-[2.875rem] leading-[4rem] whitespace-nowrap text-right text-[#0725b7] font-normal xsm:text-[1.625rem] xsm:leading-[1.95rem] xsm:text-left'
            ></h2>
          </div>
        </article>
        <div className='flex w-[92.39375rem] xsm:flex-col-reverse max-w-full items-start justify-between mx-auto relative z-50 xsm:py-[0.625rem]'>
          <div className='grid grid-cols-2 gap-[0.75rem] mt-[4.275rem] xsm:px-[0.625rem] xsm:mt-[1.125rem] xsm:pb-[3.125rem]'>
            {definition.definition_tag.map((item) => (
              <div
                className='relative w-[16.7455rem] h-[11.151rem] definition__card xsm:w-[10.75813rem] xsm:h-[7.1642rem]'
                key={item.definition_tag_content}
              >
                <div
                  className='absolute inset-0 w-full h-full origin-center'
                  id='cardImage'
                >
                  <svg
                    width='269'
                    height='180'
                    viewBox='0 0 269 180'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-full h-full'
                  >
                    <defs>
                      <linearGradient
                        id='blueGradient'
                        x1='134.5'
                        y1='0'
                        x2='134.5'
                        y2='180'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop
                          offset='0%'
                          stopColor='#001CB3'
                        ></stop>
                        <stop
                          offset='88.7%'
                          stopColor='#548BEB'
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      id='svgPath'
                      d='M0.537598 162.891V16.5414C0.537598 7.6863 7.71608 0.507812 16.5712 0.507812H217.578C221.815 0.507812 225.88 2.18509 228.884 5.17311L263.738 39.838C266.764 42.8473 268.465 46.9388 268.465 51.2063V162.891C268.465 171.746 261.287 178.924 252.432 178.924H16.5712C7.71608 178.924 0.537598 171.746 0.537598 162.891Z'
                      fill='white'
                      stroke='#E2E2E2'
                    ></path>
                  </svg>
                </div>
                <div
                  className='absolute z-20 opacity-0 scale-0 -top-[1rem] right-[3.5rem]'
                  id='sparkle1'
                >
                  <Image
                    src={'/images/sparkle-large.svg'}
                    alt=''
                    width={32}
                    height={41}
                  />
                </div>
                <div
                  className='absolute z-20 opacity-0 scale-0 right-[2.5rem] top-[0.5rem]'
                  id='sparkle2'
                >
                  <Image
                    src={'/images/sparkle.svg'}
                    alt=''
                    width={26}
                    height={29}
                  />
                </div>
                <div
                  className='relative z-10 w-full h-full p-[1.95rem_1.23rem_1.21rem_1.42rem] origin-center'
                  id='cardContent'
                >
                  <div className='flex flex-col justify-center h-full'>
                    <p
                      className='relative text-[3.93488rem] font-bold leading-[3.66038rem] w-fit bg-gradient-to-b from-[#001cb3] to-[#548beb] bg-clip-text text-transparent xsm:text-[2.52681rem] xsm:leading-[2.3505rem]'
                      id='cardNumber'
                    >
                      {item.definition_tag_emp}
                      <span
                        className='absolute -top-[1.25rem] -right-[1rem] text-[2.90363rem] leading-[2.70106rem] font-bold [-webkit-text-stroke:1.39px_#fff] bg-gradient-to-b from-[#ff7300] to-white bg-clip-text text-transparent xsm:text-[1.8625rem]'
                        id='cardPlus'
                      >
                        {item.value}
                      </span>
                    </p>
                    <hr
                      className='border border-[#e2e2e2] my-[0.875rem] xsm:my-[0.5rem] xsm:border-[0.025rem]'
                      id='cardLine'
                    />
                    <p
                      className='text-base text-[#081d1a] xsm:text-[0.75rem] xsm:leading-[1.0425rem] xsm:w-[9.05rem]'
                      id='cardText'
                    >
                      {item.definition_tag_content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='-mr-[2rem] relative'>
            <div className='drawler'>
              <svg
                width='732'
                height='126'
                viewBox='0 0 732 126'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                id='triangleSVG'
                className='w-[46.67963rem] h-[7.87013rem] ml-20 -mb-9 xsm:w-[18.5rem] xsm:h-[3.25rem] xsm:-mb-[0.85rem] xsm:ml-[2.875rem] xsm:mt-[0.875rem]'
              >
                <path
                  d='M113.5 96C247.5 134.5 357.5 126.5 313 57C379 118 457 84 462.5 23C460.5 89 534 108 571.5 68.5C559.707 111.799 594.316 106.079 654.5 97'
                  fill='none'
                  stroke='#1550E5'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
                <path
                  d='M479.726 36.5654C480.054 42.5475 480.906 55.2491 481.693 58.1992'
                  fill='none'
                  stroke='#1550E5'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
                <path
                  d='M79.5 67C117.5 83 205.7 113.2 254.5 106'
                  fill='none'
                  stroke='#1550E5'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </div>
            <Image
              src={definition.definition_img_company.url}
              className='w-[54.20319rem] h-[25.10856rem] object-contain xsm:w-[23.22413rem] xsm:h-[10.75813rem]'
              alt={definition.definition_img_company.alt}
              width={definition.definition_img_company.width}
              height={definition.definition_img_company.height}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Definition
