//Manejador principal.
import { obtenerDatosClima, datosClima } from './api_simulada.js';
import { mostrarDatosClima, mostrarLoadingState, mostrarErrorState } from './ui.js';

//SELECTS
const quickCities = document.getElementById('quick-cities');
const searchSection = document.getElementById('search-section');
const inputCity = searchSection.querySelector('input');
const errorEstate = document.getElementById('error-state');






/* -------------------------------------------------------------------------------------- */
/* ---------------------------------------Eventos---------------------------------------- */
/* -------------------------------------------------------------------------------------- */

//Al seleccionar alguno de los botones de las ciudades populares.
quickCities.addEventListener('click' ,(e) => {
    
    if (e.target.tagName === 'BUTTON') {
        mostrarLoadingState();


        //Obtener el boton exacto al que se le hizo click.
        const boton = e.target;

        const id = boton.dataset.id;

        const datosClima = obtenerDatosClima(id);

        //mostrar los datos.
        datosClima.then((ciudad) => {
            mostrarDatosClima(ciudad);
        })
        .catch(() => mostrarErrorState());

    }
});


//TODO: Anadir el evento para cuando el usuario escribe la ciudad que quiere consultar en el <input>.

//Funcion auxiliar 
const buscarCiudad = (inputNombre) => {
    
    let idciudad;
    let nombreHallado = false;

    //Obtener nombres de las ciudades.
    for (const idCiudad in datosClima) {

        //'hasOwnProperty' es un metodo que indica si una propiedad pertenece directamente al objeto, devuelve un valor booleano.
        if (datosClima.hasOwnProperty(idCiudad)) {
            const nombre = datosClima[idCiudad].nombre;
          
            if (inputNombre === nombre) {
                idciudad = idCiudad;

                nombreHallado = true;
                //TODO: anadir bandera para saber si se encontro el nombre.
                break;
            } 
        }
    }


    const dataClima = obtenerDatosClima(idciudad);

    dataClima.then((ciudad) => {
        mostrarDatosClima(ciudad);
    })
    .catch(() => mostrarErrorState());
};


searchSection.addEventListener('keydown', (e) => {

    if (e.key === 'Enter') {

        const nombre = inputCity.value;

        mostrarLoadingState();

        buscarCiudad(nombre);
    }

});

searchSection.addEventListener('click', (e) => {

    if (e.target.tagName === 'BUTTON') {

        const nombre = inputCity.value;

        mostrarLoadingState();

        buscarCiudad(nombre);
    }

});