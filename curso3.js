var a = function(){
    console.log("funcion a");
}

var b= function(){
    console.log("funcion b");
}

module.exports ={
    a:a,
    b:b
}

console.log(module.exports);