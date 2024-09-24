document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', () => {
        const proximoPasso = button.getAttribute('data-proximo');
        const passoAtual = document.querySelector('.passo.ativo');
        const proximoElemento = document.getElementById('passo-' + proximoPasso);
        
        passoAtual.classList.remove('ativo');
        proximoElemento.classList.add('ativo');
    });
});