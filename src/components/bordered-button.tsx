import React from 'react'

interface CustomBorderedButtonProps {
  color?: string
  borderColor?: string
  borderLine?: string
  children: React.ReactNode
}

const CustomBorderedButton: React.FC<CustomBorderedButtonProps> = ({
  color = '#0725b7',
  borderColor = '#ffffff',
  borderLine = 'rgba(255, 255, 255, 0.1)',
  children,
}) => {
  return (
    <div className='group relative inline-flex cursor-pointer px-[0.1875rem] min-w-[13.875rem] sm:min-h-[2.625rem] min-h-[2.125rem] transition-all'>
      {/* Corners */}
      <div
        className='absolute top-0 left-0 w-[3px] h-[3px]'
        style={{
          borderLeft: `1px solid ${borderColor}`,
          borderTop: `1px solid ${borderColor}`,
        }}
      />
      <div
        className='absolute top-0 right-0 w-[3px] h-[3px]'
        style={{
          borderRight: `1px solid ${borderColor}`,
          borderTop: `1px solid ${borderColor}`,
        }}
      />
      <div
        className='absolute bottom-0 left-0 w-[3px] h-[3px]'
        style={{
          borderLeft: `1px solid ${borderColor}`,
          borderBottom: `1px solid ${borderColor}`,
        }}
      />
      <div
        className='absolute bottom-0 right-0 w-[3px] h-[3px]'
        style={{
          borderRight: `1px solid ${borderColor}`,
          borderBottom: `1px solid ${borderColor}`,
        }}
      />

      {/* Border */}
      <div
        className='absolute inset-0'
        style={{border: `1px solid ${borderLine}`}}
      />

      {/* Inner Content */}
      <div className='relative flex items-center w-full h-full bg-white'>
        {/* Text Content */}
        <div className='relative z-10 text-black text-xs font-normal px-[3.1875rem] sm:px-[3.1875rem]  transition-colors duration-300 delay-100 group-hover:text-white'>
          {children}
        </div>

        {/* Fixed Width Spacer */}
        <div className='w-[2.625rem] h-[2.625rem] flex-shrink-0' />

        {/* Background Layer */}
        <div
          className='absolute top-0 right-0 bottom-0 w-[2.625rem] sm:group-hover:w-full transition-all duration-[600ms] ease-[cubic-bezier(0.67,0,0.05,1)]'
          style={{backgroundColor: color}}
        />

        {/* Icon */}
        <div className='absolute top-1/2 -translate-y-1/2 right-[0.65rem] sm:right-[0.98rem] sm:group-hover:right-[4.26rem] transition-all duration-[600ms] ease-[cubic-bezier(0.67,0,0.05,1)] flex items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-[0.46806rem] h-[0.68763rem] sm:w-[0.6745rem] sm:h-[0.991rem]'
            viewBox='0 0 12 16'
            fill='none'
          >
            <rect
              x='0.603882'
              y='12.9928'
              width='11.1117'
              height='4.15067'
              rx='2.07534'
              transform='rotate(-45 0.603882 12.9928)'
              fill='white'
              fillOpacity='0.62'
            />
            <rect
              x='3.5387'
              y='0.0720825'
              width='11.1117'
              height='4.15067'
              rx='2.07534'
              transform='rotate(45 3.5387 0.0720825)'
              fill='white'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CustomBorderedButton
