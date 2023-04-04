const form = document.getElementById('form-numeros');
let formValido = false;


function validaNumeros(N1, N2) {
    N1 = parseInt(N1);
    N2 = parseInt(N2);
    return N2 > N1;
}



form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numero1 = document.getElementById('campoA');
    const numero2 = document.getElementById('campoB');
    let message = document.getElementById('message');

    const mensagemSucesso = `O número <b>${numero2.value}</b> é maior que o número <b>${numero1.value}</b>`;
    const mensagemError  = `O segundo número deve ser maior que o primeiro. ${numero2.value} não é maior do que ${numero1.value}`;

    formValido = validaNumeros(numero1.value, numero2.value);
    console.log(formValido)

    if (!formValido) {
        /* Caso o formulário esteja incorreto*/
        numero1.style.border = '1px solid red';
        numero2.style.border = '1px solid red';

        message.innerHTML = mensagemError;
        message.classList.remove('success-message');
        message.classList.add('error-message');

        numero1.value = '';
        numero2.value = '';

    } else {
        /* Lógica caso o formulário esteja correto*/
        message.classList.remove('error-message');
        message.classList.add('success-message');
        message.innerHTML = mensagemSucesso;

        numero1.style.border = '';
        numero2.style.border = ''

        numero1.value = '';
        numero2.value = '';
    }
})