var chutes = require('./chutes');
const palavras = require('./palavra');
var vidas = chutes.vidas;
var palavra = palavras.palavra;
var letrasChutadas = chutes.letrasChutadas;
const palavraCerta = palavras.palavraCerta;
var limitadorFinal = 0;
var certo = false;
var contador = true;
class Forca {
  chutar(letra) {
    
  
 
  var letraChute = letra;
  limitadorFinal = letraChute.length;
   
    for (var m =0; m<letrasChutadas.length; m++){
      if(letra == letrasChutadas[m]){
        contador = false;
      }}

      for(var u= 0; u<palavraCerta.length; u++){
        if(letra== palavraCerta[u]){
          certo = true;
        }
      }


   
    if(limitadorFinal>1){
        return null
    } else if(contador == false){
        return null
    } else if  (certo == true){
         letrasChutadas.push(letra);
        for (var g=0; g<palavraCerta.length; g++){
          if(letra == palavraCerta[g]){ //problema aqui, looping não funciona a partir da segunda repetição
            palavra.splice(palavra[g], 1, letra);
           
          }
          else if (contador ==true || certo==false) {
              letrasChutadas.push(letra);
        vidas -=1;
     
        break;
            }
        }
    }
  
  
}

  buscarEstado() { 
    if (vidas <= 0){
      return "perdeu"
    }else if (palavra==palavraCerta){
      return "ganhou"
    } else  return "aguardando chute"; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas, // Deve conter todas as letras chutadas
          vidas, // Quantidade de vidas restantes
          palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}


module.exports = Forca;
