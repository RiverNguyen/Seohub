import Definition from '@/app/(main)/_components/definition/definition'
import ProcessAndField from '@/app/(main)/_components/process-and-field/process-and-field'
import ValueToCustomer from '@/app/(main)/_components/value-to-customer/value-to-customer'

export default function Page() {
  return (
    <div className='h-[10000px] mt-[7.5rem]'>
      {/* <Banner /> */}
      <Definition />
      <ValueToCustomer />
      <ProcessAndField />
    </div>
  )
}
