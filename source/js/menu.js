window.addEventListener('load', ()=>{
  const buffer = null
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
  })
})