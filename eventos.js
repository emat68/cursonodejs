var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

//Declaro el evento, lo dejo activo (on)
//Se le da un nombre al evento por ej: "primerEvento"
//Luego puedo invocar una funcion
emitter.on('primerEvento', function (arg1,arg2) {
    console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})

emitter.emit('primerEvento',"Dato 1","Dato 2");