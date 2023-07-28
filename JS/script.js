/* Light Mode */

function darkMode() {
    let mode = document.querySelector('.mode')
    let body1 = document.querySelector('.toggle1')
    let body2 = document.querySelector('.toggle2')
    let body3 = document.querySelector('.toggle3')


    if(mode.classList.contains('fa-moon')){
        mode.classList.add('fa-sun');
        mode.classList.remove('fa-moon');
        body1.classList.remove('light')
        body2.classList.remove('light')
        body3.classList.remove('light')
    } else {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        body1.classList.add('light')
        body2.classList.add('light')
        body3.classList.add('light')
    }
}

/*validacao*/
const senha = document.getElementById('senha');
const usuario = document.getElementById('usuario');
const botao = document.querySelector('#btn');
const span2 = document.querySelector('.span2');

senha.addEventListener('keyup', () => {
    if(senha.value.length > 8 || senha.value.length == 0) {
        span2.style.color = 'transparent'
    } else {
        span2.style.color = 'red'
        botao.style.cursor = 'not-allowed'
    }
})
usuario.addEventListener('keyup', () => {
    let span = document.querySelector('.span')
    if(usuario.value.length < 10 && usuario.value.indexOf('@') !== -1 && usuario.value.indexOf('.com') !== -1) {
        span.style.display = 'block'
    } else {
        span.style.display = 'none'
    }
})

function entrar(){
    let alerta = document.querySelector('.alerta')
    if(senha.value.length < 8){
        alerta.classList.add('pop-up')
        alert('Preencha')
    } else {
        window.location.href = 'login.html'
    }
}