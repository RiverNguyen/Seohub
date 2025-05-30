import Image from 'next/image'
import type {Credential} from '@/types/footer.interface'

interface FooterCredentialProps {
  credential: Credential
}

const FooterCredential = ({credential}: FooterCredentialProps) => {
  return (
    <div className='flex items-end border-b border-[#f1f1f1] relative'>
      <Image
        src={
          'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/footer-bg-1.png'
        }
        alt={credential.image.alt}
        width={1000}
        height={1000}
        className='absolute right-[-8rem] bottom-0 z-1 w-[36.8125rem] h-[10.1875rem]'
      />
      <Image
        src={credential.image.url}
        alt={credential.image.alt}
        width={143}
        height={143}
        className='hidden'
      />

      <div className='p-16 pr-[3.25rem] pb-[1.8575rem] pl-[2.06rem]'>
        <h4 className='text-[#333] text-2xl font-normal leading-8'>
          {credential.title ?? ''}
        </h4>
        <p
          className='text-[#666] text-sm font-normal leading-[1.125rem] w-[11.53772rem] mt-[0.575rem] mb-[1.5125rem]'
          dangerouslySetInnerHTML={{
            __html: credential.desc ?? '',
          }}
        />

        {credential.link_download && credential.link_download.url && (
          <a
            target='_blank'
            href={credential.link_download.url}
          >
            <button className='relative z-10 cursor-pointer border-none inline-flex max-w-[47.22188rem] bg-[#293844] pr-[0.4375rem] h-[2.925rem] group'>
              <p className='m-0 w-fit pt-[1.15rem] px-4 pb-[0.73rem] text-white overflow-hidden flex flex-col'>
                <span className='text top transition-all duration-300 group-hover:-translate-y-[250%] group-hover:animate-[flashColor_0.4s_ease-out_forwards]'>
                  {credential.link_download.title}
                </span>
                <span className='text bottom translate-y-full transition-all duration-300 group-hover:-translate-y-full'>
                  {credential.link_download.title}
                </span>
              </p>
              <Image
                src={
                  'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/arrow-download.svg'
                }
                alt={credential.image.alt}
                width={241}
                height={241}
                className='mt-4 w-4 h-4 transform translate-x-0 transition-all duration-600 opacity-0 relative z-10 -ml-4 group-hover:translate-x-[1.575rem] group-hover:opacity-100'
              />
              <div className='bg-white mt-[0.4375rem] w-[0.4rem] h-[0.4rem] transform rotate-0 transition-all duration-600 group-hover:w-[2.1875rem] group-hover:h-[2.125rem] group-hover:rotate-[-180deg]'></div>
            </button>
          </a>
        )}
      </div>

      {credential.image && (
        <div className='w-[15.45706rem] h-[8.69456rem] relative z-10 overflow-hidden'>
          <Image
            src={credential.image.url}
            alt={credential.image.alt}
            width={1000}
            height={1000}
            className='transform translate-y-4 shadow-[0px_4px_24.8px_0px_rgba(0,0,0,0.27)] transition-transform duration-500 hover:translate-y-0'
          />
        </div>
      )}
    </div>
  )
}

export default FooterCredential
