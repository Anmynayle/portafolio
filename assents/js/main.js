
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


