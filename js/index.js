//Con el window.onload hacemos que el código se ejecute una vez que cargó toda la página 
window.onload=function(){

var saldo = [0,35000,200,0,0];

var opciones = parseInt(prompt("Bienvenido a cajeros Banelco\r\nPor favor seleccione una opción para operar:\r\n1. Consulta de saldo\r\n2. Extracción\r\n3. Transferencias\r\n4. Cambio de clave\r\nPara salir presione cancelar."));

var consulta = function(){
    var opciones2 = parseInt(prompt("Elija una opción\r\n1. Caja de ahorro en pesos\r\n2. Caja de ahorro en dólares\r\n3. Cuenta corriente en pesos\r\n4. Cuenta corriente en dólares\r\nPara salir presione cancelar."));
    switch(opciones2){
        case 1: alert('Su saldo es: '+saldo[1]);
        break;
        case 2: alert('Su saldo es: '+saldo[2]);
        break;
        case 3: alert('Su saldo es: '+saldo[3]);
        break;
        case 4: alert('Su saldo es: '+saldo[4]);
        break;
    }
}
var extraccion = function(){
    var sacar = function(monto,opcion){
        if(monto<=saldo[opcion]){
            saldo[opcion] = saldo[opcion]-monto;
            alert('Su saldo restante en cuenta es de: '+saldo[opcion]+'\r\nPor favor retire su dinero.');
        }else{
            alert("El monto solicitado es mayor que el disponible en cuenta.\r\nSu saldo es: "+saldo[opcion]);
        }
    }
    var opciones3 = parseInt(prompt("Elija una opción\r\n1. Caja de ahorro en pesos\r\n2. Caja de ahorro en dólares\r\n3. Cuenta corriente en pesos\r\n4. Cuenta corriente en dólares\r\nPara salir presione cancelar."));
    switch(opciones3){
        case 1: var monto = parseInt(prompt("Ingrese un monto a extraer:"));sacar(monto,1);
        break;
        case 2: var monto = parseInt(prompt("Ingrese un monto a extraer:"));sacar(monto,2);
        break;
        case 3: var monto = parseInt(prompt("Ingrese un monto a extraer:"));sacar(monto,3);
        break;
        case 4: var monto = parseInt(prompt("Ingrese un monto a extraer:"));sacar(monto,4);
        break;
    }
}

var transferencia = function(){
    var transferir = function(monto,opcion,CBU){
        if(monto<=saldo[opcion]){
            saldo[opcion] = saldo[opcion]-monto;
            alert('Se ha realizado una transferencia al CBU: '+CBU+' por '+monto+'.-\r\nEl saldo restante en su cuenta es de: '+saldo[opcion]+'\r\nPor favor retire su comprobante.');
        }else{
            alert("El monto a transferir es mayor que el disponible en cuenta.\r\nSu saldo es: "+saldo[opcion]);
        }
    }
    var opciones4 = parseInt(prompt("Elija una opción\r\n1. Caja de ahorro en pesos\r\n2. Caja de ahorro en dólares\r\n3. Cuenta corriente en pesos\r\n4. Cuenta corriente en dólares\r\nPara salir presione cancelar."));
    switch(opciones4){
        case 1: var CBU = parseInt(prompt("Ingrese un CBU numérico:"));var monto = parseInt(prompt("Ingrese un monto a extraer:"));transferir(monto,1,CBU);
        break;
        case 2: var CBU = parseInt(prompt("Ingrese un CBU numérico:")); var monto = parseInt(prompt("Ingrese un monto a extraer:"));transferir(monto,2,CBU);
        break;
        case 3: var CBU = parseInt(prompt("Ingrese un CBU numérico:")); var monto = parseInt(prompt("Ingrese un monto a extraer:"));transferir(monto,3,CBU);
        break;
        case 4: var CBU = parseInt(prompt("Ingrese un CBU numérico:")); var monto = parseInt(prompt("Ingrese un monto a extraer:"));transferir(monto,4,CBU);
        break;
    }
}

var clave = function(){
    var claveNueva1 = prompt("Ingrese su nueva clave alfanumérica: ");
    var claveNueva2 = prompt("Ingrese otra vez la nueva clave alfanumérica: ");

    if(claveNueva1==claveNueva2){
        alert("Su clave se ha cambiado con éxito");
    }else{
        alert("Las claves ingresadas no coinciden, vuelva a intentarlo.");
    }
}

switch(opciones){
    case 1: consulta();
    break;
    case 2: extraccion();
    break;
    case 3: transferencia();
    break;
    case 4: clave();
    break;
}

alert("Gracias por elegir Banelco");

}; 