window.addEventListener('load', ()=>{
  const video = document.querySelector('#page-wrapper #wrapper .slide4video .slide4video__video')
  const btn = document.querySelector('#page-wrapper #wrapper .slide4video .button')

  btn.addEventListener('click', ()=>{
    const path = document.querySelector('#page-wrapper #wrapper .slide4video .slide4video__video source').getAttribute('data-src')
    video.src = path
    video.setAttribute('controls', '')
  })
})