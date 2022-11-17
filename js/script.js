const menuBtn = document.querySelector('#menu')
const menuBtnClose = document.querySelector('#close-menu')
const menu = document.querySelector('#mobile-navbar')

const desktopLinks = document.querySelectorAll('#navbar a')
const mobileLinks = document.querySelectorAll('#mobile-navbar a')
const allLinks = [...desktopLinks, ...mobileLinks] 

function smoothScroll(e) {
  

  const href = this.getAttribute('href')
  const offSetTop = document.querySelector(href).offSetTop

  scroll({
    top: offSetTop,
    behavior: 'smooth'
  })

  setTimeout(() => {
    if(menu.classList.contains('menu-active')){
      menu.classList.remove('menu-active')
    }
  }, 300)
}

const arr = [menuBtn, menuBtnClose].forEach(btn => {
  btn.addEventListener('click', e => {
    menu.classList.toggle('menu-active')
  })
})

allLinks.forEach(link => {
  link.addEventListener('click', smoothScroll)
})
