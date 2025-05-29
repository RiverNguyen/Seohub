document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.footer__link nav a')
  const title = document.querySelector('.desc__title p')
  const content = document.querySelector('.desc__content')

  function animateChange(newTitle, newContent) {
    title.classList.add('p--animating')
    content.classList.add('desc__content--animating')

    setTimeout(() => {
      title.textContent = newTitle
      content.textContent = newContent
      title.classList.remove('p--animating')
      content.classList.remove('desc__content--animating')
    }, 150)
  }

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      links.forEach((l) => l.classList.remove('active'))
      link.classList.add('active')

      const newTitle = link.getAttribute('data-title')
      const newContent = link.getAttribute('data-content')
      animateChange(newTitle, newContent)
    })
  })

  gsap.registerPlugin(ScrollTrigger)

  gsap.to('.footer-blur-overlay', {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: 'footer',
      start: 'top 75%',
      end: 'top center',
      scrub: true,
    },
  })

  // Lấy footer và section phía trên
  const footer = document.querySelector('footer')
  const prevSection = footer.previousElementSibling

  // Thiết lập z-index và position
  gsap.set(footer, {
    zIndex: 10,
    position: 'relative',
  })

  // Thiết lập overflow cho section trên để tránh cắt nội dung
  gsap.set(prevSection, {
    overflow: 'visible',
  })

  // Animate footer với margin-top âm
  gsap.fromTo(
    footer,
    {marginTop: '0px'},
    {
      marginTop: '-12.875vh', // Di chuyển lên đè 10% viewport height
      ease: 'none',
      scrollTrigger: {
        trigger: footer,
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    },
  )
})
