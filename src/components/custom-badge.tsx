import React from 'react'
import clsx from 'clsx'

type CustomBadgeProps = {
  children: React.ReactNode
  background?: string
  align?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export const CustomBadge: React.FC<CustomBadgeProps> = ({
  children,
  background = '#1550e5',
  align = 'top-left',
}) => {
  const positionClasses = {
    'top-left': 'top-0 left-0 -translate-x-full -translate-y-full',
    'top-right': 'top-0 right-0 translate-x-full -translate-y-full',
    'bottom-left': 'bottom-0 left-0 -translate-x-full translate-y-full',
    'bottom-right': 'bottom-0 right-0 translate-x-full translate-y-full',
  }

  return (
    <div className='flex flex-col m-2.5'>
      <p
        className='relative flex items-center justify-center text-white text-xs leading-[1.005rem] whitespace-nowrap w-fit px-3 py-[0.25rem]'
        style={{backgroundColor: background}}
      >
        {children}
        <span
          className={clsx(
            'absolute w-[0.5355rem] h-[0.5355rem]',
            positionClasses[align],
          )}
          style={{backgroundColor: background}}
        />
      </p>
    </div>
  )
}
