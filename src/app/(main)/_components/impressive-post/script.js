window.addEventListener('DOMContentLoaded', () => {
  const impressivePostSection = document.getElementById('impressive-post')
  const parentPostListEl = impressivePostSection.querySelector(
    '.impress-post__content',
  )
  const biggestPostItem = parentPostListEl.querySelector(
    '.impress-post__content__post-biggest-wrapper',
  )
  const postListEl = parentPostListEl.querySelector(
    '.impress-post__content__post-list',
  )
  const tabItems = impressivePostSection.querySelectorAll(
    '.impress-post__filter-item',
  )
  const biggestPostTemplate = document.getElementById(
    'template-post-card-biggest',
  )
  const normalPostTemplate = document.getElementById(
    'template-post-card-normal',
  )
  const loading = document.getElementById('loading')

  async function fetchPosts(slug, page) {
    biggestPostItem.innerHTML = ''
    console.log(biggestPostItem)
    postListEl.innerHTML = ''
    if (loading && loading.classList.contains('hidden')) {
      loading.classList.remove('hidden')
    }
    // 		const url = `${ENV.siteUrl}/wp-json/api/v1/posts?${slug ? 'category=' + slug + '&' : ''}page=${page ? page : '1'}&limit=5`;
    const url = `https://seohub.okhub-tech.com/wp-json/api/v1/posts?${
      slug ? 'category=' + slug + '&' : ''
    }`
    try {
      const response = await fetch(url)
      const posts = await response.json()
      renderPosts(posts)
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu:', error)
    }
  }
  function updateUrl(page) {
    const url = new URL(window.location.href)
    url.searchParams.set('pageds', page) // cập nhật hoặc thêm pageds
    window.history.pushState({page}, '', url.toString())
  }
  function renderPosts(posts) {
    if (!biggestPostItem || !postListEl) return
    if (loading) {
      loading.classList.add('hidden')
    }

    posts.forEach((post, index) => {
      const postLink = post?.link ?? '/'
      const postTitle = post?.title ?? ''
      const postThumbnail = post?.thumbnail ?? ''
      const postPublish = post?.date
      const postDesc = post?.excerpt
      if (index === 0) {
        const postClone = biggestPostTemplate.content.cloneNode(true)
        const linkEl = postClone.querySelector('a')
        const titleEl = postClone.querySelector(
          '.impressive-post__content__post-biggest__header-title',
        )
        const descEl = postClone.querySelector(
          '.impressive-post__content__post-biggest__header-desc',
        )
        const timeEl = postClone.querySelector(
          '.impressive-post__content__post-biggest__publish-time',
        )
        const thumbEl = postClone.querySelector(
          '.impress-post__content__post-biggest-background img',
        )
        if (linkEl) {
          linkEl.href = postLink
        }
        if (titleEl) {
          titleEl.textContent = postTitle
        }
        if (descEl) {
          descEl.textContent = postDesc
        }
        if (timeEl) {
          timeEl.textContent = postPublish
        }
        if (thumbEl) {
          thumbEl.src = postThumbnail
        }
        biggestPostItem.appendChild(postClone)
      } else {
        const postClone = normalPostTemplate.content.cloneNode(true)
        const linkEl = postClone.querySelector('a')
        const titleEl = postClone.querySelector(
          '.impress-post__content__post-item__title',
        )
        const timeEl = postClone.querySelector(
          '.impress-post__content__post-item__publish',
        )
        const thumbEl = postClone.querySelector(
          '.impress-post__content__post-item__background img',
        )
        if (linkEl) {
          linkEl.href = postLink
        }
        if (titleEl) {
          titleEl.textContent = postTitle
        }
        if (timeEl) {
          timeEl.textContent = postPublish
        }
        if (thumbEl) {
          thumbEl.src = postThumbnail
        }
        postListEl.appendChild(postClone)
      }
    })
  }
  tabItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (!item.classList.contains('active')) {
        const currentUrl = new URL(window.location.href)
        if (item.getAttribute('data-slug') !== 'all') {
          tabItems.forEach((tab) => tab.classList.remove('active'))
          item.classList.add('active')
          fetchPosts(item.getAttribute('data-slug'), 1)
        } else {
          tabItems.forEach((tab) => tab.classList.remove('active'))
          fetchPosts()
        }
      }
    })
  })
})

window.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector(
    '.impress-post__btn-pagination-item.impress-post__btn-pagination-item--prev',
  )
  const nextBtn = document.querySelector(
    '.impress-post__btn-pagination-item.impress-post__btn-pagination-item--next',
  )
  const postList = document.querySelector('.impress-post__content__post-list')
  const posts = document.querySelectorAll('.impress-post__content__post-item')
  const postWidth = posts[0].offsetWidth
  const gap = 12 // 0.75rem gap between posts
  let currentIndex = 0

  if (prevBtn && nextBtn && postList) {
    // Function to update button states
    const updateButtonStates = () => {
      prevBtn.disabled = currentIndex === 0
      nextBtn.disabled = currentIndex === posts.length - 1
    }
    // Function to scroll to post
    const scrollToPost = (index) => {
      const scrollPosition = index * (postWidth + gap)
      postList.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      })
    }
    // Handle prev button click
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--
        scrollToPost(currentIndex)
        updateButtonStates()
      }
    })
    // Handle next button click
    nextBtn.addEventListener('click', () => {
      if (currentIndex < posts.length - 1) {
        currentIndex++
        scrollToPost(currentIndex)
        updateButtonStates()
      }
    })
    // Initialize button states
    updateButtonStates()
  }
})
