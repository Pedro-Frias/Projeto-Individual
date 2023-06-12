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

for (var i = 1; i <= 3; i++) {
    (function(contador) {
      setInterval(function() {
        document.getElementById('radio' + contador).checked = true;
        contador = (contador % 3) + 1;
      }, 7500 * i);
    })(i);
  }
 

/* Função calculadora */

  /* Botão mostrar senha */

function mostrarSenha() {
    var campoSenha = document.getElementById("input_senha");
    var campoConfirmarSenha = document.getElementById("input_confirmar_senha");
    
    if (campoSenha.type === "password") {
        campoSenha.type = "text";
        campoConfirmarSenha.type = "text"
    } else {
        campoSenha.type = "password";
        campoConfirmarSenha.type = "password"
    }
}
 
/* Função de trocar imagens */

var fotosLoki = ["LokiBanco","LokiBanco2","LokiCoberta","LokiColo","LokiCorda","LokiFamilia","LokiNenem","LokiPrimeiroDia","LokiSol"]
function trocarFoto(){
var numero = parseInt(Math.random() * fotosLoki.length);
imagens_loki.innerHTML = `<img style="width: 500px"class="img-primeira" src="assets/fotosLoki/${fotosLoki[numero]}.jpeg" alt="">` 
}
setInterval(trocarFoto, 4500);


/* Função de alterar título do saiba mais */

function mudarTitulo(){
  var frases = ["Por que ter um cachorro?","Os benefícios do cachorro", "Por que ter um companheiro?","Quais as vantagens de ter um cachorro"];
  for (let i = 0; i < frases.length; i++) {
    setTimeout(function() {
      frase_saiba_mais.innerHTML = `${frases[i]}` 
    }, i * 2500);
  }
}

setInterval(mudarTitulo, 11000);

