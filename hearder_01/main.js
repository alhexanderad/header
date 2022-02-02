console.log("hla");

const header = document.getElementById('header')
const toggle = document.getElementById('toggle')
const navbar = document.getElementById('navbar')

document.addEventListener('click', (e)=>{
  console.log("Semdasñdl:",e.target.id);
  if(e.target.id !== 'header' && e.target.id !== 'toggle'&& e.target.id !== 'navbar'){
    toggle.classList.remove('active')
    navbar.classList.remove('active')
  }
})

toggle.addEventListener('click', ()=>{
  toggle.classList.toggle('active')
  navbar.classList.toggle('active')
})
  