// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Cấu hình chung cho pagination của Swiper
  const paginationConfig = {
    clickable: true,
    renderBullet: (index, className) => `
<span class="${className} ${index % 2 === 1 ? 'pagination-svg-reverse' : ''}">
<svg xmlns="http://www.w3.org/2000/svg" width="121" height="9" viewBox="0 0 121 9" fill="none">
<path d="M1.16561 4.73895C0.0303082 6.03128 0.947969 8.05893 2.66815 8.05893L118.203 8.05893C119.923 8.05893 120.84 6.03128 119.705 4.73895L116.332 0.898769C115.952 0.466526 115.404 0.21875 114.829 0.21875H6.04174C5.4664 0.21875 4.91892 0.466526 4.5392 0.898769L1.16561 4.73895Z"/>
</svg>
</span>
`,
  }

  // Khởi tạo PC Swiper
  const pcSwiper = new Swiper('.mySwiper', {
    pagination: {el: '.swiper-pagination', ...paginationConfig},
    effect: 'fade',
    autoplay: {delay: 5000, disableOnInteraction: false},
    allowTouchMove: false,
    loop: true,
    on: {
      init: setupHoverEffects,
      slideChangeTransitionEnd: setupHoverEffects,
    },
  })

  // Khởi tạo Mobile Swiper

  // Xử lý text highlight cho các đoạn văn
  setupTextHighlight()
})

// Quản lý trạng thái của các slide
const slideStates = {}

/**
 * Thiết lập hiệu ứng highlight cho văn bản
 */
function setupTextHighlight() {
  const paragraphs = document.querySelectorAll('.content-box2 .content-box-p')

  paragraphs.forEach((p) => {
    const originalText = p.textContent
    p.textContent = '' // Xóa nội dung hiện tại

    // Tạo span tạm để đo độ rộng
    const tempSpan = createTempSpan(p)
    const words = originalText.split(' ')
    let currentLine = createHighlightLine()
    p.appendChild(currentLine)
    let currentLineText = ''
    const maxWidth = p.offsetWidth

    // Chia văn bản thành các dòng
    words.forEach((word, index) => {
      const testText = currentLineText + (currentLineText ? ' ' : '') + word
      tempSpan.textContent = testText

      if (tempSpan.offsetWidth > maxWidth && currentLineText) {
        currentLine.textContent = currentLineText
        currentLine = createHighlightLine()
        p.appendChild(currentLine)
        currentLineText = word
      } else {
        currentLineText = testText
      }

      if (index === words.length - 1) {
        currentLine.textContent = currentLineText
      }
    })

    setupTextHighlightEffect(p)
    document.body.removeChild(tempSpan)
  })
}

/**
 * Tạo span tạm để đo độ rộng văn bản
 */
function createTempSpan(element) {
  const tempSpan = document.createElement('span')
  tempSpan.style.visibility = 'hidden'
  tempSpan.style.position = 'absolute'
  tempSpan.style.whiteSpace = 'nowrap'
  tempSpan.style.fontSize = window.getComputedStyle(element).fontSize
  tempSpan.style.fontFamily = window.getComputedStyle(element).fontFamily
  tempSpan.style.fontWeight = window.getComputedStyle(element).fontWeight
  document.body.appendChild(tempSpan)
  return tempSpan
}

/**
 * Tạo một span highlight-line
 */
function createHighlightLine() {
  const span = document.createElement('span')
  span.className = 'highlight-line'
  return span
}

/**
 * Thiết lập hiệu ứng highlight cho các dòng văn bản
 */
function setupTextHighlightEffect(container = document) {
  const highlightLines = container.querySelectorAll('.highlight-line')
  highlightLines.forEach((line) => {
    const innerSpan = document.createElement('span')
    innerSpan.className = 'inner-highlight-line'
    innerSpan.setAttribute('data-text', line.textContent)
    line.appendChild(innerSpan)
  })
}

/**
 * Xử lý hiệu ứng hover cho các slide
 */
function setupHoverEffects() {
  const dynamicContents = document.querySelectorAll('.dynamic-content-r')

  dynamicContents.forEach((element) => {
    element.removeEventListener('mouseenter', handleMouseEvent)
    element.removeEventListener('mouseleave', handleMouseEvent)
    element.addEventListener('mouseenter', handleMouseEvent)
    element.addEventListener('mouseleave', handleMouseEvent)
  })
  const swiperEl = document.querySelector('.mySwiper')
  swiperEl.addEventListener('mouseenter', () => this.autoplay.stop())
  swiperEl.addEventListener('mouseleave', () => this.autoplay.start())
}

/**
 * Xử lý sự kiện hover
 */
function handleMouseEvent(e) {
  const slide = e.currentTarget.closest('.swiper-slide')
  toggleSlideImages(slide)
}

/**
 * Toggle hiển thị các hình ảnh trong slide
 */
function toggleSlideImages(slide) {
  if (!slide) return
  const toggleImages = slide.querySelectorAll('.slide-image-toggle')
  toggleImages.forEach((img) => img.classList.toggle('hidden'))
}

/**
 * Thiết lập các nút change trên tất cả các slide
 */

function setupAllChangeButtons(swiper) {
  gsap.registerPlugin(SplitText)
  const slides = document.querySelectorAll('.mobileSwiper .swiper-slide')

  slides.forEach((slide, index) => {
    const textItem = slide.querySelector('.content-text.new')
    let split // để lưu animation timeline

    if (!textItem) {
      console.warn(`Không tìm thấy .content-text.new trong slide ${index}`)
      return
    }

    const splitText = SplitText.create(textItem, {
      type: 'words,lines',
      linesClass: 'line',
      autoSplit: true,
      mask: 'lines',
    })

    // Tạo animation sau khi chắc chắn đã có lines
    if (splitText && splitText.lines?.length) {
      split = gsap.from(splitText.lines, {
        duration: 1.5,
        yPercent: 100,
        opacity: 1,
        stagger: 0.1,
        ease: 'expo.out',
        delay: 1,
        paused: true, // không chạy ngay
      })
    }

    const changeButton = slide.querySelector('.change')
    if (!changeButton) {
      console.warn(`Không tìm thấy nút change trên slide ${index}`)
      return
    }

    const realIndex = slide.getAttribute('data-swiper-slide-index') || index
    slideStates[realIndex] = slideStates[realIndex] || {isChanged: false}

    // Xóa và thêm lại event listener
    if (changeButton._clickHandler) {
      changeButton.removeEventListener('click', changeButton._clickHandler)
      if (split) {
        // Kiểm tra split đã được khởi tạo
        split.timeScale(1).play(0)
      }
    }

    changeButton._clickHandler = () => {
      slideStates[realIndex].isChanged = !slideStates[realIndex].isChanged
      updateSlideUI(slide, slideStates[realIndex].isChanged)
      if (slideStates[realIndex].isChanged) {
        swiper.autoplay.stop()
      } else {
        swiper.autoplay.start()
      }
      if (split) {
        // Kiểm tra split đã được khởi tạo
        split.timeScale(1).play(0)
      }
    }

    changeButton.addEventListener('click', changeButton._clickHandler)
    updateSlideUI(slide, slideStates[realIndex].isChanged)
  })
}

/**
 * Cập nhật UI của slide dựa trên trạng thái
 */
function updateSlideUI(slide, isChanged) {
  const elements = {
    original: slide.querySelectorAll('.original'),
    new: slide.querySelectorAll('.new'),
    originalText: slide.querySelector('.content-text.original'),
    newText: slide.querySelector('.content-text.new'),
    changeButton: slide.querySelector('.change'),
    changeDes: slide.querySelector('.change__des'),
    changeDesBefore: slide.querySelector('.change__des__before'),
    changeDesAfter: slide.querySelector('.change__des__after'),
    changeDesText1: slide.querySelector('.change__des__text1'),
    changeDesText2: slide.querySelector('.change__des__text2'),
    leftArrow: slide.querySelector('.change__arrow.left'),
    rightArrow: slide.querySelector('.change__arrow.right'),
  }

  if (!elements.originalText || !elements.newText || !elements.changeButton) {
    console.error('Thiếu phần tử cần thiết trong slide')
    console.error('Không tìm thấy các phần tử cần thiết trong slide')
    return
  }

  elements.original.forEach((el) => el.classList.toggle('hidden', isChanged))
  elements.new.forEach((el) => el.classList.toggle('hidden', !isChanged))

  if (isChanged) {
    elements.changeButton.style.transform = `translate(2.5rem, ${
      elements.newText.offsetHeight - elements.originalText.offsetHeight
    }px)`
    if (elements.changeDes) {
      elements.changeDes.style.cssText = `
width: 9.23681rem;
border-radius: 1.27619rem;
border: 1px solid var(--Stroke-80, #e6e6e6);
`
    }
    if (elements.changeDesText2) elements.changeDesText2.style.opacity = '1'
    if (elements.changeDesText1) elements.changeDesText1.style.opacity = '0'
    if (elements.changeDesAfter) elements.changeDesAfter.style.opacity = '1'
    if (elements.changeDesBefore) elements.changeDesBefore.style.opacity = '0'
    if (elements.leftArrow) {
      elements.leftArrow.style.transform = 'scale(1)'
      elements.leftArrow.style.opacity = '1'
    }
    if (elements.rightArrow) {
      elements.rightArrow.style.transform = 'scale(0)'
      elements.rightArrow.style.opacity = '0'
    }
  } else {
    elements.changeButton.style.transform = 'translate(0, 0)'
    if (elements.changeDes)
      elements.changeDes.style.cssText = `width: 6.94181rem;`
    if (elements.changeDesText2) elements.changeDesText2.style.opacity = '0'
    if (elements.changeDesText1) elements.changeDesText1.style.opacity = '1'
    if (elements.changeDesBefore) elements.changeDesBefore.style.opacity = '1'
    if (elements.changeDesAfter) elements.changeDesAfter.style.opacity = '0'
    if (elements.leftArrow) {
      elements.leftArrow.style.transform = 'scale(0)'
      elements.leftArrow.style.opacity = '0'
    }
    if (elements.rightArrow) {
      elements.rightArrow.style.transform = 'scale(1)'
      elements.rightArrow.style.opacity = '1'
    }
  }
}
