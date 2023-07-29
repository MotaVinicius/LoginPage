/* Light Mode */

const senha = document.querySelector('.senha');
const usuario = document.querySelector('.usuario');

function darkMode() {
    let mode = document.querySelector('.mode')
    let body1 = document.querySelector('.toggle1')
    let body2 = document.querySelector('.toggle2')
    let body3 = document.querySelector('.toggle3')
    let logo = document.querySelector('.logoh')


    if(mode.classList.contains('fa-moon')){
        mode.classList.add('fa-sun');
        mode.classList.remove('fa-moon');
        body1.classList.remove('light')
        body2.classList.remove('light')
        body3.classList.remove('light')
        logo.classList.remove('light')
    } else {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        body1.classList.add('light')
        body2.classList.add('light')
        body3.classList.add('light')
        logo.classList.add('light')
    }
}

/*validacao*/

const botao = document.querySelector('#btn');
const span2 = document.querySelector('.span2');
const fechar = document.querySelector('#btn-pop');
const alerta = document.querySelector('.alerta')

senha.addEventListener('keyup', () => {
    if(senha.value.length > 8 || senha.value.length == 0) {
        span2.style.color = 'transparent'
        botao.style.cursor = 'pointer'
    } else {
        span2.style.color = 'red'
        botao.style.cursor = 'not-allowed'
    }
})
usuario.addEventListener('keyup', () => {
    let span = document.querySelector('.span')
    if(usuario.value.length > 5 || usuario.value.length == 0) {
        span.style.color = 'transparent'
        botao.style.cursor = 'pointer'
    } else {
        span.style.color = 'red'
        botao.style.cursor = 'not-allowed'
    }
})

function entrar(){
    if(senha.value.length > 8 && usuario.value.length > 5){
        window.location.href = 'home.html'
    } else {
        alerta.classList.add('aparecer')
    }
}

fechar.addEventListener('click', () => {
    alerta.classList.remove('aparecer')
})

