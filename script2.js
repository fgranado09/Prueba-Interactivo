// VARIABLES

let nombreMouseA = "M1";
let stockMouseA = 12;
let precioMouseA = 369;

let nombreMouseB = "M2";
let stockMouseB = 12;
let precioMouseB = 445;

let nombreMouseC = "M3";
let stockMouseC = 12;
let precioMouseC = 690;

let nombreMouseD = "M4";
let stockMouseD = 12;
let precioMouseD = 990;

let nombreMouseF = "M5";
let stockMouseF = 12;
let precioMouseF = 1090;

let nombreMouseE = "M6";
let stockMouseE = 12;
let precioMouseE = 1115;

let nombreTecladoA = "T1";
let stockTecladoA = 5;
let precioTecladoA = 590;

let nombreTecladoB = "T2";
let stockTecladoB = 5;
let precioTecladoB = 755;

let nombreTecladoC = "T3";
let stockTecladoC = 5;
let precioTecladoC = 799;

let nombreTecladoD = "T4";
let stockTecladoD = 5;
let precioTecladoD = 815;

let nombreTecladoE = "T5";
let stockTecladoE = 5;
let precioTecladoE = 949;

let nombreTecladoF =  "T6";
let stockTecladoF = 5;
let precioTecladoF = 1049;

let nombreMousePadA = "P1";
let stockMousePadA = 2;
let precioMousePadA = 450;

let nombreMousePadB = "P2";
let stockMousePadB = 2;
let precioMousePadB = 849;

let nombreMousePadC = "P3";
let stockMousePadC = 2;
let precioMousePadC = 990;

let mensajeProductoTeclado = "\n T1- Teclado Trust Ziva \n T2- Teclado Logitech K120 USB \n T3- Teclado Genius Black USB \n T4- Teclado Genius Black USB \n T5- Teclado Genius 118 Sp Black \n T6- Teclado Genius Luxemate"

let mensajeProductoMouse = "\n M1- Mouse Usb Logitech \n M2- Mouse Genius \n M3- Mouse Genius Dx 110 \n M4- Mouse Logitech M185 \n M5- Mouse Trust Gav Gxt 101 \n M6- Mouse Philips G403"

let mensajeProductoMousepad = "\n P1- Mouse Pad Estandar \n P2- Mouse Pad con Gel Cristal \n P3- Descansa Genius WP 100"

let cantidadComprada;
let precioTotalVenta = 0;
let nombreCompra; 

// FIN VARIABLES

//FUNCIONES

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

function preguntarProducto(mensaje){
    nombreCompra = prompt("Ingrese el nombre del producto que quiere comprar: " + mensaje)
}

// FIN FUNCIONES


//CODIGO DE EJECUCIÓN 

alert("¡Bienvenido a la tienda de Kumita Gaming!")
let tipoProducto = prompt("Seleccione el tipo de producto que desea comprar:  \n 1- Teclados \n 2- Mouses \n 3- Mousepads")
if(tipoProducto == "Teclados"){
    preguntarProducto(mensajeProductoTeclado)
    if (nombreCompra == nombreTecladoA){
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
}
else if (tipoProducto == "Mouses"){
    preguntarProducto(mensajeProductoMouse)
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
}
else if (tipoProducto == "Mousepads"){
    preguntarProducto(mensajeProductoMousepad)
    if (nombreCompra == nombreMousePadA){
        compra(stockMousePadA, precioMousePadA, nombreMousePadA)
    }
    else if (nombreCompra == nombreMousePadB){
        compra(stockMousePadB, precioMousePadB, nombreMousePadB)
    }
    else if (nombreCompra == nombreMousePadC){
        compra(stockMousePadC, precioMousePadC, nombreMousePadC)
    }
}
else{
    alert("No tenemos ese producto")
}
alert("El precio total de su compra es de $" + precioTotalVenta)
