// import {useEffect} from 'react'
// import gsap from 'gsap'
// import {ScrollTrigger} from 'gsap/ScrollTrigger'
// import {ScrollSmoother} from 'gsap/ScrollSmoother'

// export const useProcessAndFieldAnimation = () => {
//   useEffect(() => {
//     const windowWidth = window.innerWidth
//     const isDesktop = windowWidth > 639
//     const items = document.querySelectorAll('.item-snapping')

//     gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

//     if (isDesktop) {
//       // Create a wrapper for smooth scrolling
//       const wrapper = document.createElement('div')
//       wrapper.id = 'smooth-wrapper'
//       wrapper.style.cssText =
//         'position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden;'

//       const content = document.createElement('div')
//       content.id = 'smooth-content'
//       content.style.cssText = 'min-height: 100vh;'

//       wrapper.appendChild(content)
//       document.body.appendChild(wrapper)

//       // Move the main content into the smooth wrapper
//       const mainContent = document.querySelector('#warpper_section')
//       if (mainContent) {
//         content.appendChild(mainContent)
//       }

//       ScrollSmoother.create({
//         wrapper: '#smooth-wrapper',
//         content: '#smooth-content',
//         smooth: 1.5,
//         effects: true,
//         normalizeScroll: true,
//       })

//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: '#snapping-section',
//           start: 'top top',
//           end: `+=${(items.length - 3) * 100}%`,
//           scrub: 1,
//           pin: true,
//           invalidateOnRefresh: true,
//         },
//         defaults: {ease: 'none'},
//       })

//       items.forEach((item, index) => {
//         if (index === items.length - 1) {
//           timeline.to(
//             item,
//             {
//               width: '100%',
//             },
//             '<',
//           )
//           timeline.to(
//             item.querySelector('.last-item__btn svg'),
//             {
//               rotate: 720,
//               ease: 'power2.inOut',
//             },
//             '<',
//           )
//         } else {
//           timeline.to(item, {width: '7.61rem'})
//           timeline.to(item.querySelector('.item-desc'), {opacity: 0}, '<')
//         }
//       })

//       gsap.to('.fieldOfActivity', {
//         scrollTrigger: {
//           trigger: '.pin-section',
//           start: 'clamp(top top)',
//           end: 'bottom bottom',
//           pin: '.fieldOfActivity',
//           scrub: true,
//         },
//       })

//       gsap.to('.fieldOfActivity-title', {
//         scrollTrigger: {
//           trigger: '.fieldOfActivity_listImage',
//           start: 'top 65%',
//           end: 'bottom top',
//           toggleActions: 'play reverse play reverse',
//         },
//         filter: 'blur(3.5px)',
//       })

//       const images = document.querySelectorAll('.fieldOfActivity_listImage-img')

//       images.forEach((image) => {
//         const randomX = gsap.utils.random(-100, 100, 5, true)
//         gsap.to(image, {
//           x: randomX,
//           scrollTrigger: {
//             trigger: image,
//             start: 'top 120%',
//           },
//         })

//         gsap.to(image, {
//           filter: 'blur(0px)',
//           scrollTrigger: {
//             trigger: image,
//             start: 'top 65%',
//             end: '50% 27.5%',
//             toggleActions: 'play reverse play reverse',
//           },
//         })
//       })

//       const triggerProcedure = document.querySelector(
//         '#layer-background .badge__label .badge__label-text',
//       )
//       gsap.set(triggerProcedure, {width: '0%'})
//       gsap.to(triggerProcedure, {
//         width: '100%',
//         opacity: 1,
//         scrollTrigger: {
//           trigger: '#layer-background',
//           start: 'top 95%',
//           toggleActions: 'play none none none',
//         },
//       })

//       const triggerfieldOfActivity = document.querySelector(
//         '.fieldOfActivity-title .badge-lv .badge__label-text',
//       )
//       gsap.set(triggerfieldOfActivity, {width: '0%'})
//       gsap.to(triggerfieldOfActivity, {
//         width: '100%',
//         opacity: 1,
//         scrollTrigger: {
//           trigger: '.fieldOfActivity-title',
//           start: 'top 95%',
//           toggleActions: 'play none none none',
//         },
//       })
//     } else {
//       document.querySelectorAll('.item-snapping').forEach((el, index) => {
//         if (el instanceof HTMLElement) {
//           el.style.zIndex = String(index + 1)
//         }
//       })

//       const layerBackground = document.getElementById('layer-background')

//       ScrollTrigger.create({
//         trigger: '#snapping-section',
//         start: 'top top',
//         end: '50% bottom',
//         pin: layerBackground || undefined,
//         pinSpacing: false,
//         anticipatePin: 1,
//       })

//       const sections = gsap.utils.toArray('.card')
//       const lastSection = document.querySelector('.item-snapping.last-item')
//       sections.forEach((section, i) => {
//         const startpin = 68.25 * i
//         ScrollTrigger.create({
//           trigger: section as Element,
//           start: `top ${startpin}`,
//           endTrigger: lastSection || undefined,
//           end: `top ${67.5 * sections.length}`,
//           pin: true,
//           pinSpacing: false,
//         })
//       })

//       gsap.to('.fieldOfActivity', {
//         filter: 'blur(2px)',
//         scrollTrigger: {
//           trigger: '.pin-section',
//           start: 'top top',
//           end: '120% top',
//           pin: '.fieldOfActivity',
//           pinSpacing: false,
//           anticipatePin: 1,
//           toggleActions: 'play reverse play reverse',
//         },
//       })

//       const images = document.querySelectorAll('.fieldOfActivity_listImage-img')

//       images.forEach((image) => {
//         gsap.to(image, {
//           filter: 'blur(0px)',
//           scrollTrigger: {
//             trigger: image,
//             start: 'top 80%',
//             end: 'top top',
//             toggleActions: 'play reverse play reverse',
//           },
//         })
//       })

//       const triggerProcedure = document.querySelector(
//         '#layer-background .badge__label .badge__label-text',
//       )
//       gsap.set(triggerProcedure, {width: '0%'})
//       gsap.to(triggerProcedure, {
//         width: '100%',
//         opacity: 1,
//         scrollTrigger: {
//           trigger: '#layer-background',
//           start: 'top 85%',
//           toggleActions: 'play none none none',
//         },
//       })

//       const triggerfieldOfActivity = document.querySelector(
//         '.fieldOfActivity-title .badge-lv .badge__label-text',
//       )
//       gsap.set(triggerfieldOfActivity, {width: '0%'})
//       gsap.to(triggerfieldOfActivity, {
//         width: '100%',
//         opacity: 1,
//         scrollTrigger: {
//           trigger: '.fieldOfActivity-title',
//           start: 'top 85%',
//           toggleActions: 'play none none none',
//         },
//       })
//     }

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//       ScrollSmoother.get()?.kill()

//       // Clean up the smooth wrapper
//       const wrapper = document.getElementById('smooth-wrapper')
//       if (wrapper) {
//         const content = document.getElementById('smooth-content')
//         if (content) {
//           const mainContent = content.querySelector('#warpper_section')
//           if (mainContent) {
//             document.body.appendChild(mainContent)
//           }
//         }
//         wrapper.remove()
//       }
//     }
//   }, [])
// }
