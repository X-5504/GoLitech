window.onscroll = function(){
  var height = document.body.scrollHeight
  var menu = document.getElementsByClassName('categories')

  menu[0].addEventListener('click', ()=>{
    window.scrollTo(0, 0.028*height)
  })
  menu[1].addEventListener('click', ()=>{
    window.scrollTo(0, 0.2*height)
  })
  menu[2].addEventListener('click', ()=>{
    window.scrollTo(0, 0.38*height)
  })
  menu[3].addEventListener('click', ()=>{
    window.scrollTo(0, 0.56*height)
  })
  menu[4].addEventListener('click', ()=>{
    window.scrollTo(0, 0.745*height)
  })
}