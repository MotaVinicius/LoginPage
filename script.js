/* Light Mode */

const senha = document.querySelector('.senha');
const usuario = document.querySelector('.user');

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
        senha.classList.remove('light')
        usuario.classList.remove('light')
    } else {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        body1.classList.add('light')
        body2.classList.add('light')
        body3.classList.add('light')
        logo.classList.add('light')
        senha.classList.add('light')
        usuario.classList.add('light')
    }
}

/*validacao*/

const botao = document.querySelector('#btn');
const span2 = document.querySelector('.span2');
const fechar = document.querySelector('#btn-pop');
const alerta = document.querySelector('.alerta')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

senha.addEventListener('keyup', () => {
    

    if(regex.test(senha.value) && senha.value.length >= 8 || senha.value.length == 0) {
        span2.style.color = 'transparent'
        botao.style.cursor = 'pointer'
        two.classList.remove('wrong')
    } else {
        span2.style.color = 'red'
        botao.style.cursor = 'not-allowed'
        two.classList.add('wrong')
    }
})
usuario.addEventListener('keyup', () => {
    let span = document.querySelector('.span')
    if(usuario.value.length >= 5 || usuario.value.length == 0) {
        span.style.color = 'transparent'
        botao.style.cursor = 'pointer'
        one.classList.remove('wrong')
    } else {
        span.style.color = 'red'
        botao.style.cursor = 'not-allowed'
        one.classList.add('wrong')
    }
})

function entrar(){
    if(regex.test(senha.value) && senha.value.length >= 8 && usuario.value.length > 5){
        window.location.href = 'home.html'
    } else {
        alerta.classList.add('aparecer')
    }
}

fechar.addEventListener('click', () => {
    alerta.classList.remove('aparecer')
})
