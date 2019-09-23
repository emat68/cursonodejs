
// Esta funcion espera 2 parametros, solo hemos declarado uno, pero en la llmada le pasaremos el 2do
function funcionQueEsperaEjecucion(){
 console.log("funcionesQueEsperaEjeccion 5 " +
 "segundos antes de mostrar esto");
}

setTimeout(funcionQueEsperaEjecucion,5000);
