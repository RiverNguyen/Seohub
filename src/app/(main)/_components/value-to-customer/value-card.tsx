import Image from 'next/image'
import {CustomBadge} from '@/components/custom-badge'
import {IValueToCustomerItem} from '@/types/value.interface'

interface ValueCardProps {
  value: IValueToCustomerItem
  index: number
}

const ValueCard = ({value, index}: ValueCardProps) => {
  return (
    <div className='relative flex-shrink-0 mb-[4.18rem] vtc__card-item'>
      <article className='relative p-[1.87163rem_6.375rem_1.87163rem_1.875rem] min-h-[20.07rem] flex items-start rounded-[0.875rem] bg-white shadow-[0px_-59.892px_74.865px_0px_rgba(3,33,7,0.04)] overflow-hidden'>
        <div className='flex-shrink-0 mr-[20.5625rem] inline-flex w-[3.05969rem] h-[3.05969rem] justify-center items-center rounded-[0.6875rem] bg-[#fe7301] shadow-[0px_4px_15.2px_0px_rgba(255,115,0,0.25)] text-white text-[1.2225rem] font-bold leading-[150%]'>
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className='relative w-[33.1875rem]'>
          <div className='flex items-start'>
            <div className='mt-[0.59rem] mr-[0.3125rem]'>
              <Image
                src='/images/arrowV3.svg'
                alt=''
                className='w-[0.67456rem] h-[0.991rem] object-cover'
                width={10}
                height={15}
              />
            </div>
            <h3
              dangerouslySetInnerHTML={{
                __html: value.title ?? '',
              }}
              className='flex-1 text-[#081d1a] text-[1.75rem] font-normal leading-[139%] tracking-[-0.0175rem]'
            ></h3>
          </div>
          <div className='my-[1.6375rem] w-full h-[0.0585rem] rounded-[0.0585rem] bg-gradient-to-r from-[rgba(112,115,124,0.22)] from-[24.3%] to-[rgba(112,115,124,0)] to-[82.57%]'></div>
          <div
            dangerouslySetInnerHTML={{
              __html: value.description ?? '',
            }}
            className='text-[#666d80] text-[0.875rem] font-normal leading-[150%]'
          ></div>
        </div>
        <div className='block xsm:hidden absolute bottom-0 right-0 w-[57.66rem] h-[12.91rem]'>
          <Image
            src='/images/Union.svg'
            alt=''
            className='w-full h-full object-cover'
            width={1000}
            height={1000}
          />
        </div>
        <div className='hidden xsm:block w-[63.19756rem] h-[15.886rem]'>
          <Image
            src='/images/UnionMb.svg'
            alt=''
            className='w-full h-full object-cover'
            width={1000}
            height={1000}
          />
        </div>
        <div className='flex items-end absolute w-[27.99125rem] h-[19.90981rem] right-0 bottom-[-0.1175rem]'>
          <Image
            src={`/images/frameVtc${index + 1}.svg`}
            alt=''
            className='w-[27.325rem] h-[19.325rem] object-cover'
            width={1000}
            height={1000}
          />
          <div className='absolute w-[16.44963rem] h-[19.21781rem] bottom-0 left-[5.03rem]'>
            {value.thumbnail && (
              <Image
                src={value.thumbnail.url}
                alt={value.title ?? ''}
                width={value.thumbnail.width}
                height={value.thumbnail.height}
              />
            )}
          </div>
          <div className='absolute bottom-[0.875rem] right-[3.5rem] z-10'>
            {value.tag && (
              <CustomBadge
                background={
                  index === 0 ? '#FF7300' : index === 1 ? '#1650E5' : '#00D3D0'
                }
              >
                {value.tag}
              </CustomBadge>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}

export default ValueCard
