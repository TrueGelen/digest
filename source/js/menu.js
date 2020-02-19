window.addEventListener('load', () => {
  /* const buffer = null
  document.querySelector('body').addEventListener('click', ()=>{
    console.log(e.target)
    // if (e.target.classList.contain('burger') || e.target.parentNode.classList.contain('burger')){
      e.target.classList.contain('burger') ? buffer = e.target : false
      e.target.parentNode.classList.contain('burger') ? buffer = e.target.parentNode : false
      buffer.classList.add('hideBurger')
      if(buffer.classList.contain('hideBurger')){
        //аходим меню и добаляем класс showMenu
      }
    // }
  }) */

  const burgers = document.querySelectorAll('#burger')
  const menu = document.querySelector('#menu')
  const close = menu.querySelector('.menu__close')

  function burgersController(toggle) {
    if (toggle) {
      for (let i = 0; i < burgers.length; i++)
        burger[i].style.opacity = 1
    } else {
      for (let i = 0; i < burgers.length; i++)
        burger[i].style.opacity = 0
    }

  }

  for (let i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener('click', () => {
      console.log(1)
      burgersController(false)

      menu.classList.remove('hideMenu')
      menu.classList.add('showMenu')

      close.classList.remove('hideClose')
      close.classList.add('showClose')
      
    })
  }

  close.addEventListener('click', () => {
    console.log(2)
    burgersController(true)

    menu.classList.remove('showMenu')
    menu.classList.add('hideMenu')

    close.classList.remove('showClose')
    close.classList.add('hideClose')
  })

})