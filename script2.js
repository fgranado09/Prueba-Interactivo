// VARIABLES ------------------------------------------------

// Declaro MOUSES
const mouseA = new Mouse ("M1", "Mouse Usb Logitech", 12, 369)
const mouseB = new Mouse ("M2","Mouse Genius", 12, 445)
const mouseC = new Mouse ("M3","Mouse Genius Dx 110", 12, 690)
const mouseD = new Mouse ("M4", "Mouse Logitech M185", 12, 990)
const mouseE = new Mouse ("M6", "Mouse Philips G403", 12, 1115)
const mouseF = new Mouse ("M5", "Mouse Trust Gav Gxt 101", 12, 1090)

// Declaro Teclados

const tecladoA = new Teclado ("T1", "Teclado Trust Ziva", 5, 590)
const tecladoB = new Teclado ("T2", "Teclado Logitech K120 USB", 5, 755)
const tecladoC = new Teclado ("T3", "Teclado Genius Black USB", 5, 799)
const tecladoD = new Teclado ("T4", "Teclado Genius Black USB", 5, 815)
const tecladoE = new Teclado ("T5", "Teclado Genius 118 Sp Black", 5, 949)
const tecladoF = new Teclado ("T6", "Teclado Genius Luxemate", 5, 1049)

// Declaro Mousepads

const mousepadA = new Mousepad ("P1", "Mouse Pad Estandar", 2, 450)
const mousepadB = new Mousepad ("P2", "Mouse Pad con Gel Cristal", 2, 849)
const mousepadC = new Mousepad ("P3", "Descansa Genius WP 100", 2, 990)

// Variable contenedora de productos comprados
let cantidadComprada;

// Variable contenedora de precio total de compra
let precioTotalVenta = 0;

// Declaro nombre de producto a comprar
let nombreCompra; 

// FIN VARIABLES

// ARRAYS -------------------------------------------

let listadoProductoTeclados = "\nEstos son nuestros productos: "

const listaTeclados = [tecladoA, tecladoB, tecladoC, tecladoD, tecladoE, tecladoF]

for (const teclado of listaTeclados){
    listadoProductoTeclados += "\n" + teclado.nombre + "- " + teclado.id
}

let listadoProductoMouses = "\nEstos son nuestros productos: "

const listaMouses = [mouseA, mouseB, mouseC, mouseD, mouseE, mouseF]

for (const mouse of listaMouses){
    listadoProductoMouses += "\n" + mouse.nombre + "- " + mouse.id
}

let listadoProductoMousepads = "\nEstos son nuestros productos: "

const listaMousepads = [mousepadA, mousepadB, mousepadC]

for (const mousepad of listaMousepads){
    listadoProductoMousepads += "\n" + mousepad.nombre + "- " + mousepad.id
}

//FUNCIONES -------------------------------------------------

// Funcion constructora de producto 
function Teclado (nombreTeclado, idTeclado, stockTeclado, precioTeclado){
    this.nombre = nombreTeclado;
    this.id = idTeclado;
    this.stock = stockTeclado;
    this.precio = precioTeclado;
    this.venta = function(cantidadComprada){
        this.stock -= cantidadComprada
        console.log ("El stock remanente es de: " + this.stock + " " + this.nombre)
    }
}

function Mouse (nombreMouse, idMouse, stockMouse, precioMouse){
    this.nombre = nombreMouse;
    this.id = idMouse;
    this.stock = stockMouse;
    this.precio = precioMouse;
    this.venta = function(cantidadComprada){
        this.stock -= cantidadComprada
        console.log ("El stock remanente es de: " + this.stock + " " + this.nombre)
    }
}

function Mousepad (nombreMousepad, idMousepad, stockMousepad, precioMousepad){
    this.nombre = nombreMousepad;
    this.id = idMousepad;
    this.stock = stockMousepad;
    this.precio = precioMousepad;
    this.venta = function(cantidadComprada){
        this.stock -= cantidadComprada
        console.log ("El stock remanente es de: " + this.stock + " " + this.nombre)
    }
}

// Funcion en caso de haber stock insuficiente
function stockInsuficiente(stock){
    alert("No hay stock suficiente, puede comprar hasta " + stock + " unidades")
}

// Funcion en caso de haber stock suficiente (Resta stock y realiza compra)
function stockSuficiente(precio){
    precioTotalVenta += cantidadComprada * precio;  
}

// Funcion que da paso a la compra
function compra(stock, precio, producto) {
    cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar: "));
    if(cantidadComprada <= stock){
    producto.venta(cantidadComprada)
    stockSuficiente(precio)
    }
    else{
        stockInsuficiente(stock)
    }
}

// Funcion que consulta el nombre del producto que desea comprar
function preguntarProducto(mensaje){
    nombreCompra = prompt("Ingrese el nombre del producto que quiere comprar: " + mensaje)
}

// Función de ejecución de compra
function generarCompra(){
    let tipoProducto = prompt("Seleccione el tipo de producto que desea comprar:  \n 1- Teclados \n 2- Mouses \n 3- Mousepads")
    if(tipoProducto == "Teclados"){
        preguntarProducto(listadoProductoTeclados)
        if (nombreCompra == listaTeclados[0].nombre){
            compra(listaTeclados[0].stock, listaTeclados[0].precio, listaTeclados[0])
        }
        else if (nombreCompra == listaTeclados[1].nombre){
            compra(listaTeclados[1].stock, listaTeclados[1].precio, listaTeclados[1])
        }
        else if (nombreCompra == listaTeclados[2].nombre){
            compra(listaTeclados[2].stock, listaTeclados[2].precio, listaTeclados[2])
        }
        else if (nombreCompra == listaTeclados[3].nombre){
            compra(listaTeclados[3].stock, listaTeclados[3].precio, listaTeclados[3])
        }
        else if (nombreCompra == listaTeclados[4].nombre){
            compra(listaTeclados[4].stock, listaTeclados[4].precio, listaTeclados[4])
        }
        else if (nombreCompra == listaTeclados[5].nombre){
            compra(listaTeclados[5].stock, listaTeclados[5].precio, listaTeclados[5])
        }
    }
    else if (tipoProducto == "Mouses"){
        preguntarProducto(listadoProductoMouses)
        if (nombreCompra == listaMouses[0].nombre){
            compra(listaMouses[0].stock, listaMouses[0].precio, listaMouses[0])
        }
        else if (nombreCompra == listaMouses[1].nombre){
            compra(listaMouses[1].stock, listaMouses[1].precio, listaMouses[1])
        }
        else if (nombreCompra == listaMouses[2].nombre){
            compra(listaMouses[2].stock, listaMouses[2].precio, listaMouses[2])
        }
        else if (nombreCompra == listaMouses[3].nombre){
            compra(listaMouses[3].stock, listaMouses[3].precio, listaMouses[3])
        }
        else if (nombreCompra == listaMouses[4].nombre){
            compra(listaMouses[4].stock, listaMouses[4].precio, listaMouses[4])
        }
        else if (nombreCompra == listaMouses[5].nombre){
            compra(listaMouses[5].stock, listaMouses[5].precio, listaMouses[5])
        }
    }
    else if (tipoProducto == "Mousepads"){
        preguntarProducto(listadoProductoMousepads)
        if (nombreCompra == listaMousepads[0].nombre){
            compra(listaMousepads[0].stock, listaMousepads[0].precio, listaMousepads[0])
        }
        else if (nombreCompra == listaMousepads[1].nombre){
            compra(listaMousepads[1].stock, listaMousepads[1].precio, listaMousepads[1])
        }
        else if (nombreCompra == listaMousepads[2].nombre){
            compra(listaMousepads[2].stock, listaMousepads[2].precio, listaMousepads[2])
        }
    }
    else{
        alert("No tenemos ese producto")
    }    
}

function darTotal(){
    alert("El precio total de su compra es de $" + precioTotalVenta)
    document.getElementById("value").value = precioTotalVenta
}

// FIN FUNCIONES


//CODIGO DE EJECUCIÓN --------------------------------------

alert("¡Bienvenido a la tienda de Kumita Gaming!")
generarCompra();
while (cantidadComprada >= 1){
    let respuestaUsuario = prompt("¿Desea comprar algo más? \n - Si \n - No")
    if (respuestaUsuario == "Si"){
        generarCompra()
    }
    else if (respuestaUsuario == "No"){
        darTotal()
        cantidadComprada = 0
    }
}
