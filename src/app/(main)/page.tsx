import Definition from '@/app/(main)/_components/definition/definition'
import ImpressivePost from '@/app/(main)/_components/impressive-post/impressive-post'
import ProcessAndField from '@/app/(main)/_components/process-and-field/process-and-field'
import ValueToCustomer from '@/app/(main)/_components/value-to-customer/value-to-customer'
import ListenToCustomer from '@/app/(main)/_components/listen-to-customer/listen-to-customer'
export default function Page() {
  return (
    <div className='mt-[7.5rem]'>
      {/* <Banner /> */}
      <Definition />
      <ValueToCustomer />
      <ProcessAndField />
      <ImpressivePost />
      <ListenToCustomer />
    </div>
  )
}
