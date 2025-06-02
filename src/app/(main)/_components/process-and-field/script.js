document.addEventListener('DOMContentLoaded', function () {
  const windowWidth = window.innerWidth
  window.isDesktop = windowWidth > 639
  const items = document.querySelectorAll('.item-snapping')
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  if (window.isDesktop) {
    let smoother = ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
    })
    // gsap.to("#warpper_section_1", {
    //     scrollTrigger: {
    //         trigger: "#warpper_section",
    //         start: "top bottom",
    //         end: "bottom bottom",
    //         pin: "#warpper_section_1",
    //         scrub: true,
    //         markers: true,
    //     },
    // });
    // quy trình
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#snapping-section',
        start: 'top top',
        end: `+=${(items.length - 3) * 100}%`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        // markers: true,
      },
      defaults: {ease: 'none'},
    })

    items.forEach((item, index) => {
      if (index === items.length - 1) {
        timeline.to(
          item,
          {
            width: '100%',
          },
          '<',
        )
        timeline.to(
          item.querySelector('.last-item__btn svg'),
          {
            rotate: 720,
            ease: 'power2.inOut',
          },
          '<',
        )
      } else {
        timeline.to(item, {width: '7.61rem'})
        timeline.to(item.querySelector('.item-desc'), {opacity: 0}, '<')
      }
    })
    // Lĩnh vực

    gsap.to('.fieldOfActivity', {
      scrollTrigger: {
        trigger: '.pin-section',
        start: 'clamp(top top)',
        end: 'bottom bottom',
        pin: '.fieldOfActivity',
        scrub: true,
        // 								markers: true,
      },
    })

    gsap.to('.fieldOfActivity-title', {
      scrollTrigger: {
        trigger: '.fieldOfActivity_listImage',
        start: 'top 65%',
        end: 'bottom top',
        toggleActions: 'play reverse play reverse',
        // 				scrub: true,
        // 				markers: true,
      },
      filter: 'blur(3.5px)',
    })

    const images = document.querySelectorAll('.fieldOfActivity_listImage-img')

    images.forEach((image, i) => {
      const randomX = gsap.utils.random(-100, 100, 5, true) // Random X position
      // 			const randomZ = Math.random() < 0.5 ? -1 : 0;
      // 			image.style.zIndex = randomZ;
      gsap.to(image, {
        x: randomX,
        scrollTrigger: {
          trigger: image,
          start: 'top 120%',
        },
      })
      // 			if (i < images.length - 3) {
      gsap.to(image, {
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: image,
          start: 'top 65%',
          end: '50% 27.5%',
          toggleActions: 'play reverse play reverse',
          // 					markers: true,
        },
      })
      // 			}
    })

    const triggerProcedure = document.querySelector(
      '#layer-background .badge__label .badge__label-text',
    )
    gsap.set(triggerProcedure, {width: '0%'})
    gsap.to(triggerProcedure, {
      width: '100%',
      opacity: 1,
      scrollTrigger: {
        trigger: '#layer-background',
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
    })
    const triggerfieldOfActivity = document.querySelector(
      '.fieldOfActivity-title .badge-lv .badge__label-text',
    )
    gsap.set(triggerfieldOfActivity, {width: '0%'})
    gsap.to(triggerfieldOfActivity, {
      width: '100%',
      opacity: 1,
      scrollTrigger: {
        trigger: '.fieldOfActivity-title',
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
    })
  }
  if (!window.isDesktop) {
    // 		let smoother = ScrollSmoother.create({
    // 		    smooth: 2,
    // 		    effects: true,
    // 		});
    // 		smoother.effects(".card", { speed: "auto" });
    document.querySelectorAll('.item-snapping').forEach((el, index) => {
      el.style.zIndex = index + 1
    })
    const layerBackground = document.getElementById('layer-background')

    ScrollTrigger.create({
      trigger: '#snapping-section',
      start: 'top top',
      end: '50% bottom',
      pin: layerBackground,
      pinSpacing: false,
      anticipatePin: 1,
      // 			markers: true,
    })

    const sections = gsap.utils.toArray('.card')
    const lastSection = document.querySelector('.item-snapping.last-item')
    sections.forEach((section, i) => {
      const startpin = 68.25 * i
      ScrollTrigger.create({
        trigger: section,
        start: `top ${startpin}`,
        endTrigger: lastSection,
        end: `top ${67.5 * sections.length}`,
        pin: true,
        pinSpacing: false,
        // 				markers: true
      })
    })

    // linh vuc
    gsap.to('.fieldOfActivity', {
      filter: 'blur(2px)',
      scrollTrigger: {
        trigger: '.pin-section',
        start: 'top top',
        end: '120% top',
        pin: '.fieldOfActivity',
        pinSpacing: false,
        anticipatePin: 1,
        toggleActions: 'play reverse play reverse',
        // 								markers: true,
      },
    })
    const images = document.querySelectorAll('.fieldOfActivity_listImage-img')

    images.forEach((image, i) => {
      // const randomZ = Math.random() < 0.5 ? -1 : 0;
      // image.style.zIndex = randomZ;
      // if (i < images.length - 3) {
      gsap.to(image, {
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: image,
          start: 'top 80%',
          end: 'top top',
          toggleActions: 'play reverse play reverse',
          // markers: true,
        },
      })
      // }
    })
    const triggerProcedure = document.querySelector(
      '#layer-background .badge__label .badge__label-text',
    )
    gsap.set(triggerProcedure, {width: '0%'})
    gsap.to(triggerProcedure, {
      width: '100%',
      opacity: 1,
      scrollTrigger: {
        trigger: '#layer-background',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
    const triggerfieldOfActivity = document.querySelector(
      '.fieldOfActivity-title .badge-lv .badge__label-text',
    )
    gsap.set(triggerfieldOfActivity, {width: '0%'})
    gsap.to(triggerfieldOfActivity, {
      width: '100%',
      opacity: 1,
      scrollTrigger: {
        trigger: '.fieldOfActivity-title',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }
})
