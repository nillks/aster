const acc = document.querySelectorAll('.about__question');
for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active');
		let panel = this.nextElementSibling;
		let icon = this.querySelector('.about__question-icon');
		let faq = this.parentElement;
		if (panel.style.display === 'block') {
			panel.style.display = 'none';
			icon.textContent = '+';
			faq.classList.remove('active');
		} else {
			panel.style.display = 'block';
			icon.textContent = '×';
			faq.classList.add('active');
		}
	});
}
