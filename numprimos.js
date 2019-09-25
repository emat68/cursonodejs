(function(){
  var j = 1;
  var numerosPrimos = []; 


let intervalo = setInterval(numerosprimos,500);
 setTimeout(()=>{clearInterval(intervalo)},5000);

function numerosprimos(){
    if (primo(j)) {
      numerosPrimos.push(j);
    }
    j++;
    console.log("Numeros Primos" + numerosPrimos);
};

function primo(numero) {
    for (var i = 2; i < numero; i++) { 
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }
})();

   