// Handle nav background on scroll
const nav = document.getElementById('nav')
const burger = document.getElementById('burger')
const mobileMenu = document.getElementById('mob')

const handleScroll = () => {
  if (!nav) return
  if (window.scrollY > 12) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
}

window.addEventListener('scroll', handleScroll)
handleScroll()

// Mobile menu toggle
const toggleMenu = () => {
  if (!mobileMenu || !burger) return
  const isOpen = mobileMenu.classList.toggle('open')
  burger.classList.toggle('open', isOpen)
  document.body.classList.toggle('no-scroll', isOpen)
}

if (burger) {
  burger.addEventListener('click', () => {
    toggleMenu()
  })
}

// Close menu when clicking a link
if (mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        toggleMenu()
      }
    })
  })
}

// Close menu on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && mobileMenu?.classList.contains('open')) {
    toggleMenu()
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// Reveal animations using IntersectionObserver
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards'
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

const revealTargets = document.querySelectorAll('.feature-card, .pricing-card, .step')
revealTargets.forEach((el) => {
  el.style.opacity = '0'
  observer.observe(el)
})
