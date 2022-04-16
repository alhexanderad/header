/**codigo para menu */
const navBar = document.querySelector('.header .navbar')
const menuButton = document.querySelector('.header .menu')

menuButton.addEventListener('click', () =>{
  navBar.classList.toggle('show');
  menuButton.classList.toggle('fa-times');
})

/**Codigo para scroll */
document.onscroll=()=>{
  navBar.classList.remove('show');
  menuButton.classList.remove('fa-times');

  if(window.scrollY>0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }
}

document.onload = () =>{
  if(window.scrollY>0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }
}