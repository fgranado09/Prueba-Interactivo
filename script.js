let nombreMouseA = "Mouse Usb Logitech";
let stockMouseA = 12;
let precioMouseA = 369;

let nombreMouseB = "Mouse Genius";
let stockMouseB = 12;
let precioMouseB = 445;

let nombreMouseC = "Mouse Genius Dx 110";
let stockMouseC = 12;
let precioMouseC = 690;

let nombreMouseD = "Mouse Logitech M185";
let stockMouseD = 12;
let precioMouseD = 990;

let nombreMouseF = "Mouse Trust Gav Gxt 101";
let stockMouseF = 12;
let precioMouseF = 1090;

let nombreMouseE = "Mouse Philips G403";
let stockMouseE = 12;
let precioMouseE = 1115;

let nombreTecladoA = "Teclado Trust Ziva";
let stockTecladoA = 5;
let precioTecladoA = 590;

let nombreTecladoB = "Teclado Logitech K120 USB";
let stockTecladoB = 5;
let precioTecladoB = 755;

let nombreTecladoC = "Teclado Genius Black USB";
let stockTecladoC = 5;
let precioTecladoC = 799;

let nombreTecladoD = "Teclado Genius Black USB";
let stockTecladoD = 5;
let precioTecladoD = 815;

let nombreTecladoE = "Teclado Genius 118 Sp Black";
let stockTecladoE = 5;
let precioTecladoE = 949;

let nombreTecladoF =  "Teclado Genius Luxemate";
let stockTecladoF = 5;
let precioTecladoF = 1049;

let nombreMousePadA = "Mouse Pad Estandar";
let stockMousePadA = 2;
let precioMousePadA = 450;

let nombreMousePadB = "Mouse Pad con Gel Cristal";
let stockMousePadB = 2;
let precioMousePadB = 849;

let nombreMousePadC = "Descansa Genius WP 100";
let stockMousePadC = 2;
let precioMousePadC = 990;

let cantidadComprada;
let precioTotalVenta = 0;

function stockInsuficiente(stock){
    alert("No hay stock suficiente, puede comprar hasta " + stock + " unidades")
}

function stockSuficiente(stock, precio, nombre ){
    stock -= cantidadComprada;
    precioTotalVenta += cantidadComprada * precio;
    console.log("Quedan " + stock + nombre)    
}

function compra(stock, precio, nombre) {
    cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar: "));
    if(cantidadComprada <= stock){
    stockSuficiente(stock, precio, nombre)
    }
    else{
        stockInsuficiente(stock)
    }
}

alert("¡Bienvenido a la tienda de Kumita Gaming! Tenemos los siguientes productos: \n 1- Teclados \n 2- Mouses \n 3- Mousepads")
let cantidadProductosComprados = parseInt(prompt("Ingrese la cantidad de productos que quiere comprar"))


for(let i = 0; i < cantidadProductosComprados ; i++){ 
    let nombreCompra = prompt ("Ingrese el nombre del producto que quiere comprar: ")

if (nombreCompra == nombreMouseA){
    compra(stockMouseA, precioMouseA, nombreMouseA)
}
else if (nombreCompra == nombreMouseB){
    compra(stockMouseB, precioMouseB, nombreMouseB)
}
else if (nombreCompra == nombreMouseC){
    compra(stockMouseC, precioMouseC, nombreMouseC)
}
else if (nombreCompra == nombreMouseD){
    compra(stockMouseD, precioMouseD, nombreMouseD)
}
else if (nombreCompra == nombreMouseE){
    compra(stockMouseE, precioMouseE, nombreMouseD)
}
else if (nombreCompra == nombreMouseF){
    compra(stockMouseF, precioMouseF, nombreMouseF)
}
else if (nombreCompra == nombreTecladoA){
    compra(stockTecladoA, precioTecladoA, nombreTecladoA)
}
else if (nombreCompra == nombreTecladoB){
    compra(stockTecladoB, precioTecladoB, nombreTecladoB)
}
else if (nombreCompra == nombreTecladoC){
    compra(stockTecladoC, precioTecladoC, nombreTecladoC)
}
else if (nombreCompra == nombreTecladoD){
    compra(stockTecladoD, precioTecladoD, nombreTecladoD)
}
else if (nombreCompra == nombreTecladoE){
    compra(stockTecladoE, precioTecladoE, nombreTecladoE)
}
else if (nombreCompra == nombreTecladoF){
    compra(stockTecladoF, precioTecladoF, nombreTecladoF)
}
else if (nombreCompra == nombreMousePadA){
    compra(stockMousePadA, precioMousePadA, nombreMousePadA)
}
else if (nombreCompra == nombreMousePadB){
    compra(stockMousePadB, precioMousePadB, nombreMousePadB)
}
else if (nombreCompra == nombreMousePadC){
    compra(stockMousePadC, precioMousePadC, nombreMousePadC)
}
else{
    alert("No tenemos ese producto")
    }
}
alert("El precio total de su compra es de $" + precioTotalVenta)