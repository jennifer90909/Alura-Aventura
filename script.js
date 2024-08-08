const avanca =Document.querySelectorAll('.btn-proximo');

avanca.forEach(button =>{
    button.addEventListener('click', function (){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        DocumentTimeline.getElementById(proximoPasso).claassLint.add('ativo');
    })
})