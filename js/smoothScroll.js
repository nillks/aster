document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const menuBtn = document.getElementById('menu-btn');
	const menuIcon = document.getElementById('menu-icon');
	const closeIcon = document.getElementById('close-icon');
	const mobileMenu = document.getElementById('mobile-menu');
	const menuLinks = document.querySelectorAll('.mobile-menu a');

	menuBtn.addEventListener('click', () => {
			if (mobileMenu.classList.contains('show')) {
					mobileMenu.classList.remove('show');
					setTimeout(() => {
							mobileMenu.style.display = 'none';
					}, 500); // Match the transition duration
					menuIcon.style.display = 'inline';
			} else {
					mobileMenu.style.display = 'flex';
					setTimeout(() => {
							mobileMenu.classList.add('show');
					}, 10); // Slight delay to trigger transition
					menuIcon.style.display = 'none';
			}
	});

	closeIcon.addEventListener('click', () => {
			mobileMenu.classList.remove('show');
			setTimeout(() => {
					mobileMenu.style.display = 'none';
			}, 500); // Match the transition duration
			menuIcon.style.display = 'inline';
	});

	menuLinks.forEach(link => {
			link.addEventListener('click', () => {
					mobileMenu.classList.remove('show');
					setTimeout(() => {
							mobileMenu.style.display = 'none';
					}, 500); // Match the transition duration
					menuIcon.style.display = 'inline';
			});
	});
});

