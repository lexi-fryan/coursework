 {
    let CharacterPos = 0;
    let MsgBuffer = "";
    let TypingSpeed = 50; // Millisecond
    let NxtMsgDelay = 1000; // Millisecond
    let MsgIndex = 0;
    let delay;
    let deletePos = 1;
    let deleteSpeed = 5; // Millisecond
    let id = document.getElementById("typing-deleting-text");

    let messages = [
      "Welcome to html-codes-generator.com!",
      "JavaScript Typewriter Text Scrolling Generator",
      "Online HTML Code Generator"
    ];

    const StartTyping = () => {
        if (CharacterPos != messages[MsgIndex].length) {
            MsgBuffer += messages[MsgIndex].charAt(CharacterPos);
            id.value = MsgBuffer + (CharacterPos != messages[MsgIndex].length - 1 ? "_" : "");
            delay = TypingSpeed;
            id.scrollTop = id.scrollHeight; //auto scroll bottom
        } else {
            deletePos = 1;
            setTimeout(deleteTyping, NxtMsgDelay);
            return;
        }
        CharacterPos++;
        setTimeout(StartTyping, delay);
    };
    const deleteTyping = () => {
        if (deletePos != messages[MsgIndex].length) {
            id.value = messages[MsgIndex].slice(0, -deletePos);
        } else {
            MsgBuffer = "";
            CharacterPos = 0;
            if (MsgIndex != messages.length - 1) {
                MsgIndex++;
            } else {
                MsgIndex = 0;
            }
            StartTyping();
            return;
        }
        deletePos++;
        setTimeout(deleteTyping, deleteSpeed);
    };
    StartTyping();
};



document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Спасибо за ваше сообщение, ' + name + '! Мы свяжемся с вами в ближайшее время.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});
