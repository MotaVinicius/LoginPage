/* Light Mode */

const senha = document.querySelector('.senha');
const senha2 = document.querySelector('.nova');
const senha3 = document.querySelector('.confirmacao');


function darkMode() {
    let mode = document.querySelector('.mode')
    let body1 = document.querySelector('.toggle1')
    let body2 = document.querySelector('.toggle2')
    let body3 = document.querySelector('.toggle3')
    let logo = document.querySelector('.logoh')
    let back = document.querySelector('.fa-arrow-left')


    if(mode.classList.contains('fa-moon')){
        mode.classList.add('fa-sun');
        mode.classList.remove('fa-moon');
        body1.classList.remove('light')
        body2.classList.remove('light')
        body3.classList.remove('light')
        logo.classList.remove('light')
        senha.classList.remove('light')
        senha2.classList.remove('light')
        senha3.classList.remove('light')
        back.classList.remove('light')
    } else {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        body1.classList.add('light')
        body2.classList.add('light')
        body3.classList.add('light')
        logo.classList.add('light')
        senha.classList.add('light')
        senha2.classList.add('light')
        senha3.classList.add('light')
        back.classList.add('light')
    }
}

/*validacao*/

const botao = document.querySelector('#btn');
const span2 = document.querySelector('.span2');
const fechar = document.querySelector('#btn-pop');
const span1 = document.querySelector('.span');
const alerta = document.querySelector('.alerta');
const span3 = document.querySelector('.span3');
const ok = document.querySelector('.ok');


senha.addEventListener('keyup', () => {
    if(senha.value.length >= 8 || senha.value.length == 0) {
        span1.style.color = 'transparent'
        botao.style.cursor = 'pointer'
    } else {
        span1.style.color = 'red'
        botao.style.cursor = 'not-allowed'
    }
})

senha2.addEventListener('keyup', () => {
    if(senha2.value.length >= 8 || senha2.value.length == 0) {
        span2.style.color = 'transparent'
        botao.style.cursor = 'pointer'
    } else {
        span2.style.color = 'red'
        botao.style.cursor = 'not-allowed'
    }
})
senha3.addEventListener('keyup', () => {
    if(senha3.value === senha2.value || senha3.value.length == 0){
        span3.style.color = 'transparent'
        botao.style.cursor = 'pointer'
    } else {
        span3.style.color = 'red'
        botao.style.cursor = 'not-allowed'
    }
})

function confirmar() {
    if(senha.value.length >= 8 && senha2.value.length >= 8 && senha3.value === senha2.value) {
        ok.classList.add('aparecer')
        senha.value = '';
        senha2.value = '';
        senha3.value = '';
    } else {
        alerta.classList.add('aparecer')
    }
}

fechar.addEventListener('click', () => {
    alerta.classList.remove('aparecer')
})

function redirecionar() {
    window.location.href = 'index.html'
}

