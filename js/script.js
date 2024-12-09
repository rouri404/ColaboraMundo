document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const errorMessage = document.getElementById('errorMessage');

    console.log('Elemento <form> encontrado:', form !== null);
    console.log('Elemento <div id="errorMessage"> encontrado:', errorMessage !== null);

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
});

document.addEventListener('DOMContentLoaded', () => {
    const disabledLinks = document.querySelectorAll('a[data-message]');

    disabledLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede a navegação
            const message = link.getAttribute('data-message');
            alert(message); // Mostra uma mensagem ao usuário
        });
    });
});

