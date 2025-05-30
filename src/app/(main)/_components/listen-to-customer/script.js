window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.listen-customer__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    allowTouchMove: false, // Disable touch/mouse drag
    // Autoplay
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    // Effect
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  })

  const starFirstEl = document.querySelector(
    '.listen-customer .star_icon-first',
  )
  const starSecondEl = document.querySelector(
    '.listen-customer .star_icon-second',
  )

  // Function to create square movement pattern
  const createSquareMovement = (element) => {
    if (!element) return

    const tl = gsap.timeline({repeat: -1, yoyo: true})

    // Square movement pattern
    tl.to(element, {
      x: 5,
      y: 0,
      duration: 1,
      ease: 'sine.inOut',
    })
      .to(element, {
        x: 5,
        y: 5,
        duration: 1,
        ease: 'sine.inOut',
      })
      .to(element, {
        x: 0,
        y: 5,
        duration: 1,
        ease: 'sine.inOut',
      })
      .to(element, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'sine.inOut',
      })
  }
  // Function to create circular movement pattern
  const createCircularMovement = (element) => {
    if (!element) return

    const tl = gsap.timeline({repeat: -1, yoyo: true})

    // Circular movement pattern
    tl.to(element, {
      x: 5,
      y: 5,
      duration: 1,
      ease: 'sine.inOut',
    })
      .to(element, {
        x: -5,
        y: 5,
        duration: 1,
        ease: 'sine.inOut',
      })
      .to(element, {
        x: -5,
        y: -5,
        duration: 1,
        ease: 'sine.inOut',
      })
      .to(element, {
        x: 5,
        y: -5,
        duration: 1,
        ease: 'sine.inOut',
      })
      .to(element, {
        x: 5,
        y: 5,
        duration: 1,
        ease: 'sine.inOut',
      })
      .to(element, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'sine.inOut',
      })
  }
  if (starFirstEl) {
    createSquareMovement(starFirstEl)
  }
  if (starSecondEl) {
    createCircularMovement(starSecondEl)
  }

  const listenCustomerBadgeEls = document.querySelectorAll(
    '.listen-customer .listen-customer__badge',
  )

  // Function to animate badges
  const animateBadges = () => {
    if (listenCustomerBadgeEls && listenCustomerBadgeEls.length) {
      listenCustomerBadgeEls.forEach((badgeEl) => {
        // Set initial width to 0
        gsap.set(badgeEl, {
          width: 0,
        })

        const tl = gsap.timeline()
        tl.to(badgeEl, {
          width: 'auto',
          duration: 1,
          ease: 'power2.inOut',
        }).to(badgeEl, {
          delay: 2,
          width: 0,
          duration: 1.25,
          ease: 'power2.inOut',
        })
      })
    }
  }
  animateBadges()

  // Add slide change event
  swiper.on('slideChange', () => {
    const realIndex = swiper.realIndex
    animateBadges()
  })
})
