window.addEventListener('load', () => {

  const burger = document.querySelector('#burger')
  const menu = document.querySelector('#menu')
  const close = menu.querySelector('.menu__close')

  burger.addEventListener('click', () => {
    burger.style.opacity = 0

    menu.classList.remove('hideMenu')
    menu.classList.add('showMenu')

    close.classList.remove('hideClose')
    close.classList.add('showClose')
    
  })

  close.addEventListener('click', () => {
    burger.style.opacity = 1

    menu.classList.remove('showMenu')
    menu.classList.add('hideMenu')

    close.classList.remove('showClose')
    close.classList.add('hideClose')
  })

})