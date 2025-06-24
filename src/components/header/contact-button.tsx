'use client'
import type {ILink} from '@/types/header.interface'
import Image from 'next/image'
import Link from 'next/link'

interface ContactButtonProps {
  contact: ILink
}

const ContactButton = ({contact}: ContactButtonProps) => {
  return (
    <Link
      href={contact?.url ?? '#'}
      className='flex-shrink-0 cursor-pointer h-[2.5rem] max-w-[24.1075rem] border border-solid border-[#1A1A1A] bg-[#1A1A1A] inline-flex items-center justify-center no-underline xsm:hidden py-[0.5rem] px-[1.5625rem] cursor-pointer'
    >
      <span className='text-white text-[1rem] leading-[120%] font-normal mr-[0.75rem]'>
        {contact?.title ?? ''}
      </span>
      <Image
        alt=''
        width={20}
        height={20}
        src='/images/arrowV1.svg'
        className='w-[1.25rem] h-auto shrink-0'
      />
    </Link>
  )
}

export default ContactButton
