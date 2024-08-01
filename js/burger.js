const burgerMenu = document.querySelector('#burgerMenu');
const dropdownMenu = document.querySelector('#dropdownMenu');
const header = document.querySelector('#header');

burgerMenu.addEventListener('mouseenter', function () {
	burgerMenu.classList.add('active');
	dropdownMenu.classList.add('show');
});

header.addEventListener('mouseleave', function () {
	burgerMenu.classList.remove('active');
	dropdownMenu.classList.remove('show');
});

dropdownMenu.addEventListener('mouseenter', function () {
	burgerMenu.classList.add('active');
	dropdownMenu.classList.add('show');
});

dropdownMenu.addEventListener('mouseleave', function () {
	burgerMenu.classList.remove('active');
	dropdownMenu.classList.remove('show');
});
