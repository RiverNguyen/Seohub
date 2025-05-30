'use client'

import Banner from '@/app/(main)/_components/banner/banner'
import Definition from '@/app/(main)/_components/definition/definition'
import ImpressivePost from '@/app/(main)/_components/impressive-post/impressive-post'
import ProcessAndField from '@/app/(main)/_components/process-and-field/process-and-field'
import ValueToCustomer from '@/app/(main)/_components/value-to-customer/value-to-customer'
import ListenToCustomer from '@/app/(main)/_components/listen-to-customer/listen-to-customer'
import {useStore} from '@/store/useStore'
import {useEffect} from 'react'

export default function Page() {
  const {data, loading, error, fetchData} = useStore()

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  console.log(data)

  return (
    <>
      <Banner bannerSlides={data?.banner_slides} />
      <Definition definition={data?.definition} />
      <ValueToCustomer valueToCustomer={data?.value_to_customer} />
      <ProcessAndField
        workflow={data?.workflow}
        commitment={data?.commitment}
      />
      <ImpressivePost impressivePost={data?.impressive_post} />
      <ListenToCustomer listenToCustomer={data?.listen_to_customer} />
    </>
  )
}
