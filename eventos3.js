var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

//Pemrite capturar error
var error = new Error();
console.log(error);

//Declaro el evento, lo dejo activo (on)
//Se le da un nombre al evento por ej: "primerEvento"
//Luego puedo invocar una funcion
emitter.on('primerEvento', function a(arg1,arg2) {
    if (arg1 == "D1"){
        console.log(`Evento invocado, D1 Args: ${arg1}, ${arg2}`);
    }
   
})
emitter.on('primerEvento', function b(arg1,arg2) {
    if (arg2=="D2"){
        console.log(`Evento invocado, D2 Args: ${arg1}, ${arg2}`);
    }
   // console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})
emitter.on('primerEvento', function c(arg1,arg2) {
    console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})
emitter.on('primerEvento', function c(arg1,arg2) {
    console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})
emitter.on('primerEvento', function c(arg1,arg2) {
    console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})
emitter.on('primerEvento', function c(arg1,arg2) {
    console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})
emitter.on('primerEvento', function c(arg1,arg2) {
    console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})
emitter.on('primerEvento', function c(arg1,arg2) {
    console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})
emitter.on('primerEvento', function c(arg1,arg2) {
    console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})
emitter.on('primerEvento', function c(arg1,arg2) {
    console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})
emitter.on('primerEvento', function c(arg1,arg2) {
    console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})
emitter.on('primerEvento', function c(arg1,arg2) {
    console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})
emitter.on('primerEvento', function c(arg1,arg2) {
    console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})
emitter.on('primerEvento', function c(arg1,arg2) {
    console.log(`Evento invocado, Args: ${arg1}, ${arg2}`);
})

process.on('warning', (warning) => {
    console.log("Errores");
    console.warn(warning.name);    // Print the warning name
    console.warn(warning.message); // Print the warning message
    console.warn(warning.stack);   // Print the stack trace
})

emitter.emit('primerEvento',"D1","D2");
console.log(emitter.listeners("primerEvento"));
emitter.emit('primerEvento',"D1","D2");