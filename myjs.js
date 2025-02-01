// Пример простого JavaScript для обработки формы
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Спасибо за ваше сообщение, ' + name + '! Мы свяжемся с вами в ближайшее время.');
        sign = window.prompt(); //  open the blank prompt window
        document.getElementById('contact-form').reset();
        
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});
