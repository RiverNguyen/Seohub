import Image from 'next/image'
import {Workflow} from '@/types/workflow.interface'

type WorkflowItemType = Workflow['workflow_list'][0]

interface WorkflowItemProps {
  item: WorkflowItemType
  index: number
}

export const WorkflowItem = ({item, index}: WorkflowItemProps) => {
  const numberText = String(index + 1).padStart(2, '0')

  return (
    <div className='item-snapping flex-shrink-0 flex flex-col justify-between overflow-hidden p-5 pl-[1.875rem] w-[34.25rem] h-[22.6875rem] border-l border-[#e6e8ea] bg-gradient-to-b from-[#548beb] to-[#0059f1]'>
      <div className='item-snapping__warpper'>
        <p className='w-[34.25rem] opacity-70 text-white text-base font-normal mb-2 uppercase'>
          {numberText}. {item.title}
        </p>
        <Image
          src={item.icon.url}
          alt={item.title}
          width={3.125}
          height={3.00944}
          className='w-[3.125rem] h-[3.00944rem] object-contain'
        />
      </div>
      <div
        className='item-desc w-[25rem] text-white text-[1.25rem] leading-[1.5rem] font-normal'
        dangerouslySetInnerHTML={{
          __html: item.description,
        }}
      ></div>
    </div>
  )
}
