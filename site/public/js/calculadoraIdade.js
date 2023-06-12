
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
        idade = (2 * 18) + ((idadeCachorro - 2) * 6)
        div_resultado.innerHTML = `A idade do seu cachorro seria em torno de ${idade} anos <br>`
    }else{
        alert("Insira algum valor válido para começar")
    }
}