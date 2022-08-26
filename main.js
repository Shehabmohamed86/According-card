const dropDwownIMg = document.querySelector('.down')
const isActive  = document.querySelector('.a')
const dropDwownIMg2 = document.querySelector('.down2')
const isActive2  = document.querySelector('.company')

 dropDwownIMg.addEventListener('click',active)
 dropDwownIMg2.addEventListener('click',active2)

function active(){
  isActive.classList.toggle('b');
  if(dropDwownIMg.src.match('icon-arrow-down.svg')){
     dropDwownIMg.src='icon-arrow-up.svg'
  }else{
    dropDwownIMg.src='icon-arrow-down.svg'
  }
}
  
function active2(){
  isActive2.classList.toggle('b');
  if(dropDwownIMg2.src.match('icon-arrow-down.svg')){
     dropDwownIMg2.src='icon-arrow-up.svg'
  }else{
    dropDwownIMg2.src='icon-arrow-down.svg'
  }
}