import {CustomBadge} from '@/components/custom-badge'
import gsap from 'gsap'

interface BadgesProps {
  firstRule: string
  secondRule: string
  index: number
  onRef: (el: HTMLDivElement | null, index: number) => void
}

export const Badges = ({firstRule, secondRule, index, onRef}: BadgesProps) => {
  return (
    <>
      <div className='absolute top-[17rem] left-[1.9375rem] overflow-hidden'>
        <div
          ref={(el) => {
            onRef(el, index * 2)
          }}
        >
          <CustomBadge
            background='#01D3D0'
            align='top-right'
            classText='text-[1.208rem] px-1.5 py-0'
            className='w-fit'
          >
            {firstRule}
          </CustomBadge>
        </div>
      </div>
      <div className='absolute top-[19.25rem] left-[3.8725rem] overflow-hidden'>
        <div
          ref={(el) => {
            onRef(el, index * 2 + 1)
          }}
        >
          <CustomBadge
            background='#FF7300'
            align='bottom-left'
            classText='text-[1.208rem] px-1.5 py-0'
            className='w-fit'
          >
            {secondRule}
          </CustomBadge>
        </div>
      </div>
    </>
  )
}

export const animateBadges = (badgeRefs: (HTMLDivElement | null)[]) => {
  badgeRefs.forEach((badgeEl) => {
    if (!badgeEl) return

    gsap.set(badgeEl, {
      width: 0,
    })

    const tl = gsap.timeline()
    tl.to(badgeEl, {
      width: 'auto',
      duration: 1,
      ease: 'power2.inOut',
    }).to(badgeEl, {
      delay: 2,
      width: 0,
      duration: 1.25,
      ease: 'power2.inOut',
    })
  })
}
