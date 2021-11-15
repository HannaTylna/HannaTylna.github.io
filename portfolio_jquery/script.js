
// Jquery

// $(document).ready(function(event) {
// 	$('.header__burger').click(function(event) {
// 		$('.header__burger,.header__menu').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });


// Javascript

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');

burger.addEventListener('click', (event) => {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('lock');
})