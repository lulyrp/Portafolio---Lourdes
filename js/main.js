document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;

    // Validar nombre
    let name = document.getElementById('name');
    let nameError = document.getElementById('nameError');
    if (name.value.trim() === '') {
        nameError.textContent = 'El nombre no puede estar vacío.';
        valid = false;
    } else if (name.value.length > 50) {
        nameError.textContent = 'El nombre no puede tener más de 50 caracteres.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Validar correo electrónico
    let email = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'El correo electrónico no puede estar vacío.';
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Por favor ingresa un correo electrónico válido (ejemplo@dominio.com).';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Validar asunto
    let subject = document.getElementById('subject');
    let subjectError = document.getElementById('subjectError');
    if (subject.value.trim() === '') {
        subjectError.textContent = 'El asunto no puede estar vacío.';
        valid = false;
    } else if (subject.value.length > 50) {
        subjectError.textContent = 'El asunto no puede tener más de 50 caracteres.';
        valid = false;
    } else {
        subjectError.textContent = '';
    }

    // Validar mensaje
    let message = document.getElementById('message');
    let messageError = document.getElementById('messageError');
    if (message.value.trim() === '') {
        messageError.textContent = 'El mensaje no puede estar vacío.';
        valid = false;
    } else if (message.value.length > 300) {
        messageError.textContent = 'El mensaje no puede tener más de 300 caracteres.';
        valid = false;
    } else {
        messageError.textContent = '';
    }

    // Si alguna validación falla, evitar el envío del formulario
    if (!valid) {
        event.preventDefault();
    }
});
