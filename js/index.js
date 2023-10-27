//Con el window.onload hacemos que el código se ejecute una vez que cargó toda la página 
window.onload=function(){

var productos = ["","Quilmes Cristal","Quilmes Bock","Quilmes Stout","Stella Artois","Stella Noire","Andes Rubia","Andes Roja","Andes Negra","Corona","Heineken","Salta"];
var precios = ["","350","400","500","400","600","400","450","450","650","450","450"];

var producto = prompt("Elija un producto por número de inventario");
if(producto>0&&producto<12){
    if(confirm("Usted eligió "+productos[producto])){
        var cantidad = prompt("Ingrese la cantidad deseada");
        var precio = precios[producto]*cantidad;
        alert("El total de su compra es de: "+precio);
    }else{
        alert("Pedido cancelado.");
    }
}else{
    alert("Eligió un producto que no está en el inventario.");
}

}; 