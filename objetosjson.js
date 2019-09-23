
(function callobjetos()
{
//Extension en tiempo de ejecucion
var objeto = {};
console.log(objeto);

objeto.nombre = "Ernesto";
console.log(objeto);

//Define la varibale y declara
var objeto2 = {nombre : "Ernesto Alvarez"};
console.log( objeto2);

//Definicion de objetos dentro de objetos
var objeto3= {
    nombre: "Ernesto",
    apellido: "Alvarez",
    direccion: {
        calle: "Pepe Viña",
        numero: "187",
        comuna: "La Reina"
    }
}

console.log( objeto3);
//Al encerra entre parentesis la funcion, esta se puede invocar de forma inmediata
})();
