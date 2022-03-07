function Producto(nombre, tipo){
    this.nombre = nombre;
    this.tipo = tipo;
}

let celu1 = new Producto("Noganet", "Teclado")

let celu2 = new Producto("Genius", "Mouse")

let celu3 = new Producto("Logitech", "Mouse")

let celu4 = new Producto("NovaElectrum", "Teclado")

let array = [celu1, celu2, celu3, celu4]

//Hasta aca nada nuevo. Constructor + objetos + array de objetos

/* Aplico el filter. Retorna un array */

const arrayFiltrado = array.filter(obj => obj.tipo == "Mouse");

console.log(arrayFiltrado)

/*El parametro “obj” (que puede tener cualquier nombre) es todo lo que contenga el array.

Es como iterar un array con foreach o for of, gracias a Js me ahorro ese paso y directo paso el parametro

parametro + flechita + condicion logica a matchear. En este caso, que la propertie tipo del objeto sea igual a mouse

El array filtrado es un array de 2 elementos que cumplen con esta condicion

*/