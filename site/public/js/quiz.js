
function proximaQuestao() {

  var pergunta1 = document.getElementById("pergunta1");
  var pergunta2 = document.getElementById("pergunta2");
  var pergunta3 = document.getElementById("pergunta3");
  var pergunta4 = document.getElementById("pergunta4");
  var pergunta5 = document.getElementById("pergunta5");
  var pergunta6 = document.getElementById("pergunta6");


  if (pergunta1.style.display === "flex") {
      pergunta1.style.display = "none";
      pergunta2.style.display = "flex";
  } else if (pergunta2.style.display === "flex" ) {
      pergunta3.style.display = "flex"
      pergunta2.style.display = "none"
  } else if(pergunta3.style.display === "flex" ){
      pergunta3.style.display = "none"
      pergunta4.style.display = "flex"
  } else if(pergunta4.style.display === "flex" ){
      pergunta4.style.display = "none"
      pergunta5.style.display = "flex"
  } else if(pergunta5.style.display === "flex" ){
      pergunta5.style.display = "none"
      pergunta6.style.display = "flex"
  } else if(pergunta6.style.display === "flex" ){
    pergunta6.style.display = "none"
    pergunta1.style.display = "flex"
} 
}
