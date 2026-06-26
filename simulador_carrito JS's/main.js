/* Es el manejador principal, importa de los demas js
   Su funcion es manejar los eventos.
*/

//IMPORTS
import { productos } from "./productos.js";
import { anadirCatalogo, anadirAlCarrito, pagoExitoso } from "./utilidades.js";

// Ejecutar la función para mostrar el catálogo al cargar el script
anadirCatalogo();








//--------------------- Valor total dinamico del carrito ---------------------//

//Es un evento del boton de "Agregar al carrito"

//Como se puede seleccionar el objeto correcto?
//en este caso creo que seria recorrer el DOM hacia aabajo desde el padre hasta encontrar el elemento que contiene el nombre del producto.

const catalogo = document.querySelector('#contenedor-catalogo');



//Se usa delegacion de eventos con el catalogo.

//Obtener nombres de producto.
const nombres = document.querySelectorAll('div > h3');

//Bandera de accion para funcion auxiliar. 'a' de "agregar/anadir"
const accion = 'a';
let precioProducto = 0; //Para la funcion auxiliar.

catalogo.addEventListener('click', (e) => {

    if (e.target.tagName === "BUTTON") {

        //Obtener nombre del producto.
        const boton = e.target;
        const hermano = boton.previousElementSibling;
        const nombreProducto = hermano.querySelector('h3').textContent;

        for (let i = 0; i < nombres.length; i++) {
            if (nombreProducto.trim() === nombres[i].textContent) {
                const producto = productos[i+1];
                anadirAlCarrito(producto);

                precioProducto = producto.precio;

                break;
            }

        }

        actualizarTotal(accion, precioProducto);
        
    }

});



//Evento para eliminar del carrito.
const carrito = document.querySelector('aside');

carrito.addEventListener('click', (e) => {


        
    const accion = 'e' //De "eliminar"
    let precioProducto = 0;



    //Obtener nombre del producto.
    const boton = e.target.closest('button');
    if (!boton || boton.id === 'boton-pagar') {return;}

    const hermano = boton.previousElementSibling;
    const nombreProducto = hermano.querySelector('h4').textContent;

    for (let i = 0; i < nombres.length; i++) {
        if (nombreProducto.trim() === nombres[i].textContent) {

            precioProducto = productos[i + 1].precio;

            break;
        }

    }

    actualizarTotal(accion, precioProducto);
    const itemEliminar = boton.parentElement;
    itemEliminar.classList.remove('anim-fade-in');
    itemEliminar.classList.add('anim-fade-out');
    itemEliminar.addEventListener('animationend', () => {
        itemEliminar.remove();

        // Ocultar botón de pagar si el carrito queda vacío
        const itemsEnCarrito = document.querySelectorAll('#contenedor-carrito > li:not(.italic)');
        if (itemsEnCarrito.length === 0) {
            const botonPagar = document.querySelector('#boton-pagar');
            if (botonPagar) {
                botonPagar.style.display = 'none';
            }
        }
    });

});



//Funcion auxiliar
const actualizarTotal = (accion, precio) => {

    let suma  = 0;
    let resta = 0;
    
    const contenedorValor = document.getElementById("total-carrito");
    const precioAnterior = parseFloat(contenedorValor.textContent.replace('$', '')); //Eliminar el signo '$'

    if (accion === 'a') {

        //Sumar al valor total.
        suma = precio + precioAnterior;

        contenedorValor.textContent = '$' + String(suma.toFixed(2));

    }     else {
        resta = precioAnterior - precio;
        contenedorValor.textContent = '$' + String(resta.toFixed(2));
    }
}

// Evento del botón de pagar
const botonPagar = document.querySelector('#boton-pagar');
if (botonPagar) {
    botonPagar.addEventListener('click', () => {
        pagoExitoso();

        //Para vaciar el carrito
        const contenedorCarrito = document.querySelector('#contenedor-carrito');
        contenedorCarrito.innerHTML = '<li class="py-4 text-sm text-slate-500 italic text-center">El carrito está vacío</li>';

        // Resetear total
        document.querySelector('#total-carrito').textContent = '$0';

        // Ocultar botón de pagar
        document.querySelector('#boton-pagar').style.display = 'none';
    });
}