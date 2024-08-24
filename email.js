// Inicialize o EmailJS com seu user ID
emailjs.init('XJi9EuWBeV7C7HQaYwpgf');

// Função para enviar o e-mail
function sendEmail(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtenha os valores dos campos do formulário
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Envie o e-mail usando EmailJS
    emailjs.send('XJi9EuWBeV7C7HQaYwpgf', 'template_6ziyy5b', {
        from_name: name,
        from_email: email,
        message: message
    }).then(response => {
        alert('Mensagem enviada com sucesso!');
        form.reset(); // Limpa o formulário após o envio
    }).catch(error => {
        console.error('Erro ao enviar mensagem:', error);
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
    });
}

// Adicione o evento de submit ao formulário
document.querySelector('.contato-form form').addEventListener('submit', sendEmail);
