document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Создаем элемент для сообщения
        const messageElement = document.createElement('div');
        messageElement.textContent = 'Спасибо за ваше сообщение, ' + name + '! Мы свяжемся с вами в ближайшее время.';
        messageElement.style.backgroundColor = '#4CAF50'; // Зеленый фон
        messageElement.style.color = '#fff'; // Белый текст
        messageElement.style.padding = '15px';
        messageElement.style.borderRadius = '5px';
        messageElement.style.marginTop = '20px';
        messageElement.style.textAlign = 'center';

        // Добавляем сообщение перед формой
        const form = document.getElementById('contact-form');
        form.parentNode.insertBefore(messageElement, form.nextSibling);

        // Очищаем форму
        form.reset();

        // Удаляем сообщение через 5 секунд
        setTimeout(() => {
            messageElement.remove();
        }, 5000); // 5000 миллисекунд = 5 секунд
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});
