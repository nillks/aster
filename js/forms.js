document
	.querySelector('#subscriptionForm')
	.addEventListener('submit', function (event) {
		event.preventDefault();
		const email = document.querySelector('#email').value;
		const error = document.querySelector('#error');
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (emailPattern.test(email)) {
			error.classList.remove('show');
			alert('Спасибо за подписку!');
		} else {
			error.classList.add('show');
			alert('Неверный формат почты. Пожалуйста, введите корректный email.');
		}
	});
