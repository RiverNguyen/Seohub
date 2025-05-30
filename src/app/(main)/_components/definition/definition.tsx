import DefinitionMarquee from '@/app/(main)/_components/definition/components/definition-marquee'
import fetchData from '@/fetches/fetchData'
import type {Definition} from '@/types/definition.interface'
import DefinitionClient from './components/definition-client'
import DefinitionBackground from './components/definition-background'
import DefinitionArticle from './components/definition-article'
import DefinitionCard from './components/definition-card'
import DefinitionCompany from './components/definition-company'

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
        <DefinitionBackground />

        <DefinitionArticle
          title={definition.definition_title}
          content={definition.definition_content}
        />

        <div className='flex w-[92.39375rem] xsm:flex-col-reverse max-w-full items-start justify-between mx-auto relative z-50 xsm:py-[0.625rem]'>
          <div className='grid grid-cols-2 gap-[0.75rem] mt-[4.275rem] xsm:px-[0.625rem] xsm:mt-[1.125rem] xsm:pb-[3.125rem]'>
            {definition.definition_tag.map((item) => (
              <DefinitionCard
                key={item.definition_tag_content}
                emp={item.definition_tag_emp}
                value={item.value}
                content={item.definition_tag_content}
              />
            ))}
          </div>

          <DefinitionCompany
            imageUrl={definition.definition_img_company.url}
            imageAlt={definition.definition_img_company.alt}
            imageWidth={definition.definition_img_company.width}
            imageHeight={definition.definition_img_company.height}
          />
        </div>
      </section>
    </>
  )
}

export default Definition
