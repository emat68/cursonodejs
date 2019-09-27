var arrclientes2 = [];

class Direccion{
    constructor(_calle,_numero,_comuna,_region){
        this.calle = _calle;
        this.numero = _numero;
        this.comuna = _comuna;
        this.region = _region;
    }
}

class Cliente {
    constructor(P_id,P_nombre,P_fecha,P_calle,P_numero,P_comuna,P_region)
    {   
        this.idcliente = P_id;
        this.nombre = P_nombre;
        this.fechacreacion = P_fecha;
        this.direccion = new Direccion(P_calle,P_numero ,P_comuna, P_region);
    }

    arrclientes2.push(n1_cliente);

    getnombres2() {
        return arrclientes2;
    }
}


//let n1_cliente = new Cliente("1","Ernesto","2019-09-22","Pepe Vila","187","La Reina","13");
//let n2_cliente = new Cliente("1","juan","2019-09-24","Pepe Vila","187","La Reina","13");
//let n3_cliente = new Cliente("1","Pedro","2019-09-27","Pepe Vila","187","La Reina","13");
//arrclientes2.push(n1_cliente);
//arrclientes2.push(n2_cliente);
//arrclientes2.push(n3_cliente);

// var getnombres2 = function()
//   {
//     return arrclientes2;
// };


module.exports = { 
    cli2:getnombres2
}

