//Importa de 'productos.js' y exporta su contenido.

//IMPORTS
import { productos } from "./productos.js";


//SELECTS
const listaItems = document.querySelector('#contenedor-carrito'); //Es un <ul>


/* ******************************************************************************************* */
/*-------------------------------- Anadir catalogo a la pagina --------------------------------*/
/* ******************************************************************************************* */

const listaProductos = document.querySelector('#contenedor-catalogo');


//Para cada producto se crea su bloque html con su contenido respectivo.
//Van el <div> de catalogo de productos.

export const anadirCatalogo = () => {

    //Convertir el objeto en un arreglo y recorrerlo. (se convierte con 'Object.values')
    //'map()' se usa para recorrer un arreglo, devuelve otro arreglo diferente sin modificar el original.
    const catalogo = Object.values(productos).map(producto => `
    <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
        <div class="h-48 overflow-hidden bg-slate-100 relative">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
            <span class="absolute top-3 left-3 bg-indigo-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">${producto.categoria}</span>
        </div>
        <div class="p-5 flex flex-col justify-between flex-grow">
            <div>
                <h3 class="font-bold text-slate-800 text-lg mb-2">${producto.nombre}</h3>
                <p class="text-2xl font-extrabold text-indigo-600 mb-4">$${producto.precio.toFixed(2)}</p>
            </div>
            
            <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-sm flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Agregar al carrito
            </button>
        </div>
    </div>
`).join(''); //Para cada producto del catalogo se crea ese bloque html en puro texto, el 'join()' une todo ese texto en uno solo, el valor dentro de los parentesis es solo un caracter que se usa como separador, yo le puse un caracter vacio.

    //Para meter todo eso en el html se usa 'innerHTML' que mete bloques de codigo enteros eliminando lo que habia antes.
    //Se mete todo ese html dentro del <div> del catalogo.
    listaProductos.innerHTML = catalogo;

};



/* ******************************************************************************************* */
/*----------------------------------- Renderizar carrito --------------------------------------*/
/* ******************************************************************************************* */

//Es una funcion que se ejecuta en un evento de 'click' y anade los productos al carrito.

//El parametro 'item' es un elemento html, creo. (ACTUALIZAR COMENTARIO)
export function anadirAlCarrito (producto) {

    const itemHTML = `
    <li class="py-4 flex items-center justify-between gap-4 anim-fade-in">
        <div class="flex items-center gap-3">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="w-12 h-12 rounded-lg object-cover bg-slate-100 flex-shrink-0">
            <div>
                <h4 class="text-sm font-semibold text-slate-800 line-clamp-1">${producto.nombre}</h4>
                <p class="text-sm text-indigo-600 font-medium">$${producto.precio.toFixed(2)}</p>
            </div>
        </div>
        
        <!-- Botón de eliminar del carrito estilizado -->
        <button class="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-lg transition-colors flex items-center justify-center" aria-label="Eliminar del carrito">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </button>
    </li>
    `;

    // Si está el mensaje de "El carrito está vacío", lo limpiamos
    const mensajeVacio = listaItems.querySelector('li.italic');
    if (mensajeVacio) {
        listaItems.innerHTML = '';
    }

    // Insertar el elemento en el carrito.
    //Ubica el bloque en una posicion dentro del padre sin eliminar lo que ya existe.
    //'bedoreend' literalmente significa "antes del final", es decir, antes de la etiqueta de cierre.
    //La sintaxis es: 'padre.listaItems.insertAdjacentHTML(posicion, bloque_html)'
    listaItems.insertAdjacentHTML('beforeend', itemHTML);

    // Mostrar botón de pagar si hay productos en el carrito
    const botonPagar = document.querySelector('#boton-pagar');
    if (botonPagar) {
        botonPagar.style.display = 'block';
    }
}


/* ******************************************************************************************* */
/*------------------------------------- Ventana de pago exitoso --------------------------------*/
/* ******************************************************************************************* */

export const pagoExitoso = () => {
    const ventanaPago = `
    <div id="modal-pago-exitoso" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-xl shadow-xl p-8 max-w-md mx-auto relative anim-scale-in">
            <button onclick="document.getElementById('modal-pago-exitoso').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="text-center">
                <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-slate-800 mb-2">¡Pago Exitoso!</h3>
                <p class="text-slate-600">Tu compra ha sido procesada correctamente.</p>
            </div>
            <button onclick="document.getElementById('modal-pago-exitoso').remove()" class="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200">
                Cerrar
            </button>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', ventanaPago);
}