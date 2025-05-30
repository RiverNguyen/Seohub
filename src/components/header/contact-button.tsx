'use client'

import CustomBorderedButton from '@/components/bordered-button'
import type {ILink} from '@/types/header.interface'

interface ContactButtonProps {
  contact: ILink
}

const ContactButton = ({contact}: ContactButtonProps) => {
  return (
    <a
      href={contact.url}
      className='flex-shrink-0 cursor-pointer h-[2.5rem] max-w-[24.1075rem] inline-flex items-center justify-center no-underline xsm:hidden'
    >
      <CustomBorderedButton
        color='#00D3D0'
        borderColor='#000'
        borderLine='rgb(134 132 132 / 10%)'
      >
        {contact.title}
      </CustomBorderedButton>
    </a>
  )
}

export default ContactButton
