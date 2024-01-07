const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');

menuBtn.addEventListener('click', ()=>{
	navbar.classList.toggle('active');
})