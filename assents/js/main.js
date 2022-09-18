
/* Menu Navbar */
const btnOpen = document.querySelector('.hero button')
const btnClose = document.querySelector('.navbar ul .icon-x')
const menu = document.querySelector('.navbar ul')

btnOpen.addEventListener('click', function () {
  menu.classList.toggle('active')
})

btnClose.addEventListener('click', function (e) {
  menu.classList.remove('active')
})

/* Secciones con ID */
window.addEventListener('scroll', function (e) {
  const scrollY = window.pageYOffset

  for (const section of sections) {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 58
    const sectionId = section.getAttribute('id')

    const current = document.querySelector('.hero__nav-link[href*=' + sectionId + ']')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      current.classList.add('active')
    } else {
      current.classList.remove('active')
    }
  }
})


