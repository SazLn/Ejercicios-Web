/* Se encarga de pintar la interfaz de la pagina, exporta a 'main.js' */

//Referencias a los paneles principales.
const loadingState = document.getElementById('loading-state');
const emptyState = document.getElementById('empty-state');
const weatherData = document.getElementById('weather-data'); //Oculto por defecto.
const errorState = document.getElementById('error-state');

//Referencias a los elementos de datos del clima.
const cityName = document.getElementById('city-name');
const weatherDate = document.getElementById('weather-date');
const conditionBadge = document.getElementById('weather-condition-badge');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const feelsLike = document.getElementById('feels-like');
const visibility = document.getElementById('visibility');

//Referencias al pronostico.
const forecastDay1 = document.getElementById('forecast-day-1');
const forecastDay2 = document.getElementById('forecast-day-2');
const forecastDay3 = document.getElementById('forecast-day-3');
const forecastIcon1 = document.getElementById('forecast-icon-1');
const forecastIcon2 = document.getElementById('forecast-icon-2');
const forecastIcon3 = document.getElementById('forecast-icon-3');
const forecastMax1 = document.getElementById('forecast-max-1');
const forecastMax2 = document.getElementById('forecast-max-2');
const forecastMax3 = document.getElementById('forecast-max-3');
const forecastMin1 = document.getElementById('forecast-min-1');
const forecastMin2 = document.getElementById('forecast-min-2');
const forecastMin3 = document.getElementById('forecast-min-3');




/* -------------------------------------------------------------------------------------- */
/* -----------------------------Funciones para pintar la UI------------------------------ */
/* -------------------------------------------------------------------------------------- */

//Muestra el panel de carga y oculta el resto.
export const mostrarLoadingState = () => {

    //Oculta los demas paneles.
    emptyState.classList.add('hidden');
    weatherData.classList.add('hidden');
    errorState.classList.add('hidden');
    

    //Muestra el panel de carga.
    loadingState.classList.remove('hidden');
    loadingState.classList.add('block');
};




//Muestra el panel de datos del clima y oculta el resto.
export const mostrarDatosClima = (ciudad) => {

    //Oculta el panel de carga.
    loadingState.classList.add('hidden');
    loadingState.classList.remove('block');
    errorState.classList.add('hidden');

    //Muestra el panel de datos del clima.
    weatherData.classList.remove('hidden');
    weatherData.classList.add('block');

    //Asigna los valores de la ciudad a los elementos del DOM.
    cityName.textContent = ciudad.nombre;
    conditionBadge.textContent = ciudad.condicion;
    weatherIcon.textContent = ciudad.icono;
    temperature.textContent = ciudad.temperatura;
    weatherDescription.textContent = ciudad.descripcion;
    humidity.textContent = `${ciudad.humedad}%`;
    wind.textContent = `${ciudad.viento} km/h`;
    feelsLike.textContent = `${ciudad.sensacion}°`;
    visibility.textContent = `${ciudad.visibilidad} km`;

    //Asigna los valores del pronostico.
    forecastDay1.textContent = ciudad.pronostico[0].dia;
    forecastIcon1.textContent = ciudad.pronostico[0].icono;
    forecastMax1.textContent = `${ciudad.pronostico[0].max}°`;
    forecastMin1.textContent = `${ciudad.pronostico[0].min}°`;

    forecastDay2.textContent = ciudad.pronostico[1].dia;
    forecastIcon2.textContent = ciudad.pronostico[1].icono;
    forecastMax2.textContent = `${ciudad.pronostico[1].max}°`;
    forecastMin2.textContent = `${ciudad.pronostico[1].min}°`;

    forecastDay3.textContent = ciudad.pronostico[2].dia;
    forecastIcon3.textContent = ciudad.pronostico[2].icono;
    forecastMax3.textContent = `${ciudad.pronostico[2].max}°`;
    forecastMin3.textContent = `${ciudad.pronostico[2].min}°`;
};






//Muestra el panel de error y oculta el resto.
export const mostrarErrorState = () => {

    loadingState.classList.add('hidden');
    loadingState.classList.remove('block');
    weatherData.classList.add('hidden');
    emptyState.classList.add('hidden');

    errorState.classList.remove('hidden');
    errorState.classList.add('block');
};