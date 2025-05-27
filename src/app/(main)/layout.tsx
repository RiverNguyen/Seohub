import {Toaster} from '@/components/ui/sonner'
import GsapProvider from '@/provider/GsapProvider'
import {ViewTransitions} from 'next-view-transitions'
import NextTopLoader from 'nextjs-toploader'

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <ViewTransitions>
      <GsapProvider>{children}</GsapProvider>
      <Toaster richColors />
      <NextTopLoader
        color='linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%)'
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing='ease'
        speed={200}
        shadow='0 0 10px #2299DD,0 0 5px #2299DD'
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
    <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
    </ViewTransitions>
  )
}
