// ARRAYS --------------------------------------------------------------------------------------------------------------

let Productos = [];

//Declaro Mouses
Productos.push (new Producto ("M1", "Mouse Usb Logitech", "Mouse", 12, 369));
Productos.push (new Producto ("M1", "Mouse Usb Logitech", "Mouse", 12, 369));
Productos.push (new Producto ("M2","Mouse Genius", "Mouse", 12, 445));
Productos.push (new Producto ("M3","Mouse Genius Dx 110", "Mouse", 12, 690));
Productos.push  (new Producto ("M4", "Mouse Logitech M185", "Mouse", 12, 990));
Productos.push (new Producto ("M6", "Mouse Philips G403", "Mouse", 12, 1115));
Productos.push (new Producto ("M5", "Mouse Trust Gav Gxt 101", "Mouse", 12, 1090));

const filtroMouses = Productos.filter((el) => el.tipo === 'Mouse')
console.log(filtroMouses) 

// Declaro Teclados
Productos.push (new Producto ("T1", "Teclado Trust Ziva", "Teclado", 5, 590));
Productos.push (new Producto ("T2", "Teclado Logitech K120 USB", "Teclado", 5, 755));
Productos.push (new Producto ("T3", "Teclado Genius Black USB", "Teclado", 5, 799));
Productos.push (new Producto ("T4", "Teclado Genius Black USB", "Teclado", 5, 815));
Productos.push (new Producto ("T5", "Teclado Genius 118 Sp Black", "Teclado", 5, 949));
Productos.push (new Producto ("T6", "Teclado Genius Luxemate", "Teclado", 5, 1049));

const filtroTeclados = Productos.filter((el) => el.tipo === 'Teclado')
console.log(filtroTeclados) 

// Declaro Mousepads
Productos.push (new Producto ("P1", "Mouse Pad Estandar", "Mousepad", 2, 450));
Productos.push (new Producto ("P2", "Mouse Pad con Gel Cristal", "Mousepad", 2, 849));
Productos.push (new Producto ("P3", "Descansa Genius WP 100", "Mousepad", 2, 990));

const filtroMousepads = Productos.filter((el) => el.tipo === 'Mousepad')
console.log(filtroMousepads) 

let listadoProductos = ("\nEstos son nuestros productos: ")

for (const producto of Productos){
    listadoProductos += "\n" + producto.nombre + "- " + producto.id
}

// VARIABLES --------------------------------------------------------------------

// Variable contenedora de productos comprados
let cantidadComprada;

// Variable contenedora de precio total de compra
let precioTotalVenta = 0;

// Declaro nombre de producto a comprar
let nombreCompra; 

// FIN VARIABLES


//FUNCIONES -------------------------------------------------

// Funcion constructora de producto 
function Producto (nombre, id, tipo, stock, precio){
    this.nombre = nombre;
    this.id = id;
    this.tipo = tipo;
    this.stock = stock;
    this.precio = precio;
    this.venta = function (cantidadComprada){
        this.stock -= cantidadComprada
        console.log ("El stock remantente es de: " + this.stock + " " + this.nombre)
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
    preguntarProducto(listadoProductos);
    let encontrado = false;
    for (let i = 0; i < Productos.length; i++){
        if (Productos[i].nombre == nombreCompra){
            encontrado = true;
            compra(Productos[i].stock, Productos[i].precio, Productos[i]);
            break;
        }
    }
    if (!encontrado){
        alert("No tenemos ese producto");
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