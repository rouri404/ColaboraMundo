document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const errorMessage = document.getElementById('errorMessage');

    if (form && errorMessage) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value.trim();
            const nome = document.getElementById('nome').value.trim();
            const telefone = document.getElementById('telefone').value.trim();

            const ajuda = document.querySelector('input[name="ajuda"]:checked');
            const concordar = document.getElementById('concordar').checked;

            if (!email || !nome || !telefone || !ajuda || !concordar) {
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'Erro: Todos os campos são obrigatórios!';
            } else {
                errorMessage.style.display = 'none';
                alert('Formulário enviado com sucesso!');
                form.reset();
                window.location.href = 'index.html';
            }
        });
    } else {
        console.error('Erro: Algum elemento necessário não foi encontrado.');
    }

    const disabledLinks = document.querySelectorAll('a[data-message]');
    disabledLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const message = link.getAttribute('data-message');
            alert(message);
        });
    });

    function copyToClipboard(text) {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = text;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
    }

    const emailLink = document.getElementById('email-link');
    const phoneLink = document.getElementById('phone-link');

    if (emailLink) {
        emailLink.addEventListener('click', function(event) {
            event.preventDefault();
            copyToClipboard('colaboramundoLTDA@gmail.com');
            alert('E-mail copiado para a área de transferência!');
        });
    }

    if (phoneLink) {
        phoneLink.addEventListener('click', function(event) {
            event.preventDefault();
            copyToClipboard('+55 (11) 2920-6119');
            alert('Telefone copiado para a área de transferência!');
        });
    }

    const userIcon = document.querySelector('a[href="/user"]');
    const notificationIcon = document.querySelector('a[href="/notificações"]');

    if (userIcon) {
        userIcon.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Em breve estará disponível');
        });
    }

    if (notificationIcon) {
        notificationIcon.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Em breve estará disponível');
        });
    }
});
