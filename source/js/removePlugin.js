window.addEventListener('load', ()=>{
  const pageWrapper = document.querySelector('#page-wrapper')
  const wrapper = document.querySelector('#wrapper')
  const pluginStyles = document.querySelectorAll('link')[0]
  const href = pluginStyles.href
  console.log(href)
  function watcher(){
    if(window.innerWidth > 768){
      pageWrapper.id = 'page-wrapper'
      wrapper.id = 'wrapper'
      pluginStyles.href = href
      // pageWrapper.classList.remove('myPageWrapper')
      // wrapper.classList.remove('myWrapper')
    }else{
      pageWrapper.id = ''
      wrapper.id = ''
      pluginStyles.href = ''
      // pageWrapper.classList.add('myPageWrapper')
      // wrapper.classList.add('myWrapper')
    }
  }

  watcher()

  window.addEventListener('resize', ()=>{
    watcher()
  })
})