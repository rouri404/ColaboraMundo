const botoesSaibaMais = document.querySelectorAll('.saiba-mais');
const descricaoElemento = document.getElementById('descricao');

botoesSaibaMais.forEach((botao) => {
    botao.addEventListener('click', (event) => {
        event.preventDefault();

        const cardText = botao.closest('.card-body').querySelector('.card-text').textContent;

        
        descricaoElemento.textContent = cardText;


        window.location.href = 'form.html';
    });
});

const form = document.getElementById('form');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (event) => {
    event.preventDefault();  

    const email = document.getElementById('email').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    const ajuda = document.querySelector('input[name="ajuda"]:checked');
    const tipoAjuda = ajuda ? ajuda.nextElementSibling.textContent : null;

    const concordar = document.getElementById('concordar').checked;

    
    if (!email || !nome || !telefone || !ajuda || !concordar) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Erro: Todos os campos são obrigatórios!';
    } else {
        errorMessage.style.display = 'none';
        console.log('Email:', email);
        console.log('Nome:', nome);
        console.log('Telefone:', telefone);
        console.log('Tipo de Ajuda:', tipoAjuda ? tipoAjuda.trim() : 'Nenhum selecionado');
        console.log('Concordou:', concordar ? 'Sim' : 'Não');
        alert('Formulário enviado com sucesso!');
        form.reset();

       
        window.location.href = 'index.html';
    }
});
