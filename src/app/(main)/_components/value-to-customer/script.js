window.addEventListener('DOMContentLoaded', function () {
  const vtcWrapperEl = document.querySelector('.vtc__wrapper')
  const vtcHeaderEl = vtcWrapperEl?.querySelector('.vtc__header')
  const vtcTitleEl = vtcHeaderEl?.querySelector('.vtc__title')
  const vtcCardListEl = vtcWrapperEl?.querySelector('.vtc__card-list')
  if (!vtcWrapperEl || !vtcHeaderEl || !vtcCardListEl) return

  if (window.innerHeight < 700 && window.innerWidth < 638) {
    console.log('Chiều cao của cửa sổ trình duyệt:', window.innerHeight)
    const vtcCardItem = document.querySelectorAll('.vtc__card-item')
    vtcCardItem.forEach((e) => {
      const titleContent = e.querySelector(
        '.vtc__wrapper .vtc__card-item__title-content',
      )
      const titleDesc = e.querySelector(
        '.vtc__wrapper .vtc__card-item__desc-wrapper',
      )
      if (titleContent) {
        titleContent.style.fontSize = '1.05rem'
      }
      if (titleDesc) {
        titleDesc.style.fontSize = '0.775rem'
      }
    })
  }

  const isMobile = window.innerWidth < 640
  // Không dùng ScrollTrigger Pin trên mobile
  if (isMobile) {
    const triggerEndSectionEl = vtcWrapperEl.querySelector(
      '.trigger-end-section',
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const onTopViewPort = entry.isIntersecting
          vtcTitleEl.style.opacity = onTopViewPort ? 0 : 1
        })
      },
      {
        threshold: 0.5,
      },
    )
    observer.observe(triggerEndSectionEl)

    return
  }
  const handleScrollTriggerPinVtcHeaderEl = () => {
    const lastVtcCardItemEl = vtcCardListEl?.querySelector(
      '.vtc__card-item:last-child',
    )
    if (!lastVtcCardItemEl) return
    const offsetTop = isMobile ? 0 : 7.5
    ScrollTrigger.create({
      trigger: vtcHeaderEl,
      endTrigger: lastVtcCardItemEl,
      pin: true,
      start: `top ${offsetTop}%`,
      end: `top ${offsetTop}%`,
      pinSpacing: false,
      scrub: true,
      markers: false,
    })
  }
  const handleScrollTriggerPinVtcCardItemEl = () => {
    const items = vtcCardListEl.querySelectorAll('.vtc__card-item')
    const lastItem = vtcCardListEl.querySelector('.vtc__card-item:last-child')
    if (!items || !items.length) return

    const defaultOffsetTop = isMobile ? 10 : 30 // Tính theo phần trăm 30 = 30%
    const spaceOffsetTop = isMobile ? 10 : 12.875
    items.forEach((item, index) => {
      const offsetTop = defaultOffsetTop + spaceOffsetTop * index
      const offsetTopEnd =
        defaultOffsetTop + spaceOffsetTop * (items.length - 1)
      ScrollTrigger.create({
        trigger: item,
        endTrigger: lastItem,
        pin: true,
        start: `top ${offsetTop}%`,
        end: `top ${offsetTopEnd}%`,
        pinSpacing: false,
        scrub: true,
        // 				markers: true,
        anticipatePin: 1,
      })
    })
  }
  handleScrollTriggerPinVtcHeaderEl()
  handleScrollTriggerPinVtcCardItemEl()
})
