document.addEventListener('DOMContentLoaded', function () {
  const bookNowBtn = document.getElementById('bookNowBtn')
  const bookNowBtnMb = document.getElementById('bookNowBtnMB')
  const popupOverlay = document.getElementById('popupOverlay')
  const popupContainer = document.getElementById('popupContainer')
  const popupClose = document.getElementById('popupClose')

  function openPopup() {
    document.body.classList.add('tour-detail__popup-active')
  }

  function closePopup() {
    document.body.classList.remove('tour-detail__popup-active')
  }

  // Mở popup
  if (bookNowBtn) {
    bookNowBtn.addEventListener('click', openPopup)
  }

  if (bookNowBtnMb) {
    bookNowBtnMb.addEventListener('click', openPopup)
  }
  popupClose.addEventListener('click', closePopup)
  popupOverlay.addEventListener('click', closePopup)

  // Không đóng popup khi click vào container bên trong
  popupContainer.addEventListener('click', function (e) {
    e.stopPropagation()
  })

  // Đóng popup khi nhấn phím ESC
  document.addEventListener('keydown', function (e) {
    if (
      e.key === 'Escape' &&
      document.body.classList.contains('tour-detail__popup-active')
    ) {
      closePopup()
    }
  })

  // Thiết lập giá trị mặc định là 01 cho input number
  document
    .querySelectorAll('.number_group--right input[type="text"]')
    .forEach((input) => {
      input.value = '01'

      input.addEventListener('input', function () {
        let value = this.value

        // Chỉ cho phép nhập số từ 00 đến 99
        value = value.replace(/[^0-9]/g, '') // Loại bỏ bất kỳ ký tự không phải số nào

        if (value > 99) {
          value = '99' // Nếu nhập số lớn hơn 99, thay thế bằng 99
        } else if (value < 1) {
          value = '01' // Nếu nhập số nhỏ hơn 01, thay thế bằng 01
        } else {
          value = String(value).padStart(2, '0') // Đảm bảo luôn có 2 chữ số
        }

        this.value = value
      })
    })

  // Tăng/giảm số lượng
  document.querySelectorAll('.increment, .decrement').forEach((button) => {
    button.addEventListener('click', function () {
      const type = this.getAttribute('data-type')
      const input = document.getElementById(type)
      let currentValue = parseInt(input.value, 10)
      if (isNaN(currentValue)) currentValue = 1

      if (this.classList.contains('increment')) {
        currentValue = Math.min(currentValue + 1, 99)
      } else {
        currentValue = Math.max(currentValue - 1, 0)
      }

      input.value = String(currentValue).padStart(2, '0')
    })
  })

  // Hiệu ứng khi chọn checkbox và SVG
  document.querySelectorAll('.wpcf7-radio input').forEach((radio) => {
    radio.addEventListener('change', function () {
      const svg = `
<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="check-icon">
<path d="M15.8315 5.25L7.11862 13.9583L3.1582 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
`

      document.querySelectorAll('.wpcf7-radio input').forEach((rb) => {
        const label = rb.closest('label')
        if (!label) return

        const icon = label.querySelector('.check-icon')

        if (rb === this) {
          // Được chọn
          if (!icon) {
            label.insertAdjacentHTML('beforeend', svg)
          }
          label.style.backgroundColor = '#242421'
          label.style.color = '#f2f0e8'
        } else {
          // Không được chọn
          if (icon) icon.remove()
          label.style.backgroundColor = ''
          label.style.color = ''
        }
      })
    })
  })

  // Chọn checkbox đầu tiên mặc định + SVG
  const firstRadio = document.querySelector('.wpcf7-radio input')
  if (firstRadio) {
    firstRadio.checked = true
    firstRadio.dispatchEvent(new Event('change'))
  }

  const nameTour = document.querySelector('.tour-detail__banner-title')
  const nameTourForm = document.querySelector(
    '.tour-detail__popup-container input[name="name_tour_ex"]',
  )
  const linkTour = document.querySelector(
    '.tour-detail__popup-container input[name="link_tour_ex"]',
  )
  const currentUrl = window.location.href

  if (nameTour && nameTourForm) {
    nameTourForm.value = nameTour.dataset.title
  }

  if (linkTour && currentUrl) {
    linkTour.value = currentUrl
  }

  setTimeout(() => {
    // Restore tour name and link if they were cleared by form.reset()
    const nameTour = document.querySelector('.tour-detail__banner-title')
    const nameTourForm = document.querySelector(
      '.tour-detail__popup-container input[name="name_tour"]',
    )

    const linkTour = document.querySelector(
      '.tour-detail__popup-container input[name="link_tour"]',
    )
    const currentUrl = window.location.href

    if (nameTour && nameTourForm) {
      nameTourForm.value = nameTour.dataset.title
    }

    if (linkTour && currentUrl) {
      linkTour.value = currentUrl
    }
  }, 0) // Trì hoãn tương tự để DOM ổn định trước khi gán lại giá trị

  document.addEventListener(
    'wpcf7mailsent',
    function (event) {
      // Close the popup
      closePopup()

      // Reset the form
      const form = event.target.closest('form')
      if (form) {
        form.reset()
      }

      // Reset text inputs to "01"
      document
        .querySelectorAll('.number_group--right input[type="text"]')
        .forEach((input) => {
          // Ensure we are not resetting the hidden fields for tour name and link
          if (input.name !== 'name_tour' && input.name !== 'link_tour') {
            input.value = '01'
          }
        })

      // Re-check the first checkbox and dispatch its change event
      const firstRadio = document.querySelector('.wpcf7-radio input')

      firstRadio.checked = true
      firstRadio.dispatchEvent(new Event('change'))
    },
    false,
  )

  const bookSubmit = document.querySelector(
    '.tour-detail__popup-container .popup-submit',
  )

  function showLoading() {
    bookSubmit.classList.add('loading')
  }

  function hideLoading() {
    bookSubmit.classList.remove('loading')
  }

  // handle set loading and log form data
  bookSubmit.addEventListener('click', function () {
    showLoading()

    document.addEventListener(
      'wpcf7mailsent',
      function (event) {
        // Get the form ID
        var formId = event.detail.contactFormId
        if (formId === 303) {
          showFormNotification(
            'success',
            'Congratulation! Your Booking Confirm',
          )
          hideLoading()
        }
      },
      false,
    )

    // handle show error message
    const events = ['wpcf7invalid', 'wpcf7spam', 'wpcf7mailfailed']
    events.forEach(function (eventName) {
      document.addEventListener(
        eventName,
        function (event) {
          var formId = event.detail.contactFormId
          if (formId === 303) {
            showFormNotification(
              'error',
              'Form error',
              'Please be aware that there were errors in the form submission. We encourage you to check and complete it again.',
            )
            hideLoading()
          }
        },
        false,
      )
    })
  })
})
