//Datos y api simulada.

//Como es un simulador, debe contener los datos, ademas de la logica para obtenerlos, es decir, debe simular el consumo de una API


export const datosClima = {
  BSAS: {
    nombre: "Buenos Aires",
    temperatura: 28,
    descripcion: "Cielo despejado",
    humedad: 55,
    viento: 18,
    sensacion: 26,
    visibilidad: 10,
    condicion: "Soleado",
    icono: "☀️",
    pronostico: [
      { dia: "Sábado", icono: "☀️", max: 30, min: 20 },
      { dia: "Domingo", icono: "⛅", max: 27, min: 19 },
      { dia: "Lunes", icono: "🌤️", max: 29, min: 21 },
    ],
  },


  MAD: {
    nombre: "Madrid",
    temperatura: 34,
    descripcion: "Oleada de calor",
    humedad: 30,
    viento: 12,
    sensacion: 36,
    visibilidad: 12,
    condicion: "Muy caluroso",
    icono: "🔥",
    pronostico: [
      { dia: "Sábado", icono: "☀️", max: 36, min: 24 },
      { dia: "Domingo", icono: "☀️", max: 35, min: 23 },
      { dia: "Lunes", icono: "⛅", max: 32, min: 22 },
    ],
  },


  TKO: {
    nombre: "Tokio",
    temperatura: 26,
    descripcion: "Lluvia ligera",
    humedad: 78,
    viento: 22,
    sensacion: 28,
    visibilidad: 6,
    condicion: "Lluvioso",
    icono: "🌧️",
    pronostico: [
      { dia: "Sábado", icono: "🌧️", max: 25, min: 20 },
      { dia: "Domingo", icono: "☁️", max: 27, min: 21 },
      { dia: "Lunes", icono: "⛅", max: 28, min: 22 },
    ],
  },


  NYC: {
    nombre: "Nueva York",
    temperatura: 22,
    descripcion: "Parcialmente nublado",
    humedad: 62,
    viento: 25,
    sensacion: 21,
    visibilidad: 14,
    condicion: "Nublado",
    icono: "⛅",
    pronostico: [
      { dia: "Sábado", icono: "⛅", max: 23, min: 17 },
      { dia: "Domingo", icono: "🌤️", max: 25, min: 18 },
      { dia: "Lunes", icono: "☀️", max: 27, min: 19 },
    ],
  },


  LON: {
    nombre: "Londres",
    temperatura: 18,
    descripcion: "Cielo cubierto",
    humedad: 72,
    viento: 30,
    sensacion: 16,
    visibilidad: 8,
    condicion: "Nublado",
    icono: "☁️",
    pronostico: [
      { dia: "Sábado", icono: "☁️", max: 19, min: 13 },
      { dia: "Domingo", icono: "🌧️", max: 17, min: 12 },
      { dia: "Lunes", icono: "⛅", max: 20, min: 14 },
    ],
  },


  BOG: {
    nombre: "Bogotá",
    temperatura: 16,
    descripcion: "Lluvia moderada",
    humedad: 85,
    viento: 10,
    sensacion: 15,
    visibilidad: 5,
    condicion: "Lluvioso",
    icono: "🌦️",
    pronostico: [
      { dia: "Sábado", icono: "🌦️", max: 17, min: 11 },
      { dia: "Domingo", icono: "☁️", max: 18, min: 12 },
      { dia: "Lunes", icono: "🌤️", max: 19, min: 12 },
    ],
  },
}




/* -------------------------------------------------------------------------------------- */
/* ------------------------Logica para consumir la API----------------------------------- */
/* -------------------------------------------------------------------------------------- */

//Es una funcion que recibe por parametro el id y devuelve el objeto.

export const obtenerDatosClima = (idCiudad) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const ciudad = datosClima[idCiudad];

            if (ciudad) {
                resolve(ciudad);

            } else {
                reject(new Error("Ciudad no encontrada"));
            }

        }, 2000);
    });
};