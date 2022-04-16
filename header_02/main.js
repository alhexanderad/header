/**Codigo de header */
window.addEventListener('scroll', (event) =>{
  const header = document.querySelector('header');
  /*console.log(window.scrollY);*/
  header.classList.toggle('sticky',window.scrollY > 0)
});

/**Links */
document.querySelectorAll('.link').forEach(link =>{
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    
    /*console.log(link.href.split('#')[1]);*/
    const hrefHash = link.href.split('#')[1];
    const element = document.getElementById(hrefHash)
    element.scrollIntoView({
      block:'start',
      behavior: 'smooth'
    })

  })
})

const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.links')
navToggle.addEventListener('click', () =>{
  navLinks.classList.toggle('nav-menu-visible')
})