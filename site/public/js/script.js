/* TRANSIÇÃO NAVBAR */

const headerEl = document.querySelector('header');
const nav = document.querySelector('.link-nav');

window.addEventListener('scroll', () => {
    if(window.scrollY > 500){
        headerEl.classList.add('header-scrolled')
        nav.classList.add('link-nav-scrolled')
    }else if(window.scrollY <= 500){
        headerEl.classList.remove('header-scrolled')
        nav.classList.remove('link-nav-scrolled')
    }
})

/* CARROSSEL HOMEPAGE
    -- Tentativa de adotar o for 
*/

var counter = 1;

for (var i = 1; i <= 3; i++) {
    setInterval(function() {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 3) {
            counter = 1;
        }
    }, 7500 * i);
}
 

/* Função calculadora */

/* fazer mais algumas validações */

function verIdade(){
    div_resultado.innerHTML = ""
    var idadeCachorro = Number(input_idade_cachorro.value);
    var idade;
    if(idadeCachorro == ""){
        alert("Insira uma idade valida")
    }
    else if (document.getElementById('porte-pequeno').checked && idadeCachorro <= 2){
        idade = (idadeCachorro * 12.5)
        div_resultado.innerHTML = `A idade do seu cachorro seria em torno de ${idade}  <br>`
    }else if (document.getElementById('porte-medio').checked && idadeCachorro <= 2){
        idade = (idadeCachorro * 10.5)
        div_resultado.innerHTML = `A idade do seu cachorro seria em torno de ${idade}  <br>`
    }else if (document.getElementById('porte-grande').checked && idadeCachorro <= 2){
        idade = (idadeCachorro * 18)
        div_resultado.innerHTML = `A idade do seu cachorro seria em torno de ${idade}  <br>`
    }
    else if(document.getElementById('porte-pequeno').checked){
        idade = (2 * 12.5) + ((idadeCachorro - 2) * 4.5)
        div_resultado.innerHTML = `A idade do seu cachorro seria em torno de ${idade}  <br>`
    }else if(document.getElementById('porte-medio').checked){
        idade = (2 * 10.5) + ((idadeCachorro - 2) * 5.7)
        div_resultado.innerHTML = `A idade do seu cachorro seria em torno de ${idade}  <br>`
    }else if(document.getElementById('porte-grande').checked){
        idade = (2 * 18) + ((idadeCachorro - 2) * 8)
        div_resultado.innerHTML = `A idade do seu cachorro seria em torno de ${idade} anos <br>`
    }else{
        alert("Insira algum valor válido para começar")
    }
}


  /* Botão mostrar senha */

function mostrarSenha() {
    var campoSenha = document.getElementById("senha");
    var campoConfirmarSenha = document.getElementById("confirmarSenha");
    
    if (campoSenha.type === "password") {
        campoSenha.type = "text";
        campoConfirmarSenha.type = "text"
    } else {
        campoSenha.type = "password";
        campoConfirmarSenha.type = "password"
    }
}