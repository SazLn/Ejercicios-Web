// Input donde se escribe la nueva tarea
const entradaTexto = document.getElementById('entrada-texto');

// Botón para añadir la tarea
const botonAnadir = entradaTexto.nextElementSibling;

// Contenedor donde se renderizan las tareas pendientes
const listaPendientes = document.getElementById('lista-pendientes');

// Contenedor donde se renderizan las tareas completadas
const listaCompletadas = document.getElementById('lista-completadas');

// Span que muestra el número de tareas pendientes
let contadorPendientes = document.querySelector('#lista-pendientes').parentElement.querySelector('h3 + span');

// Span que muestra el número de tareas completadas
let contadorCompletadas = document.querySelector('#lista-completadas').parentElement.querySelector('h3 + span');



//Funcion para el boton de insertar tareas y la entrada de texto.
const insertarTareas = (e) => {
    if (e.type === 'click' || e.key === 'Enter') {
        const texto = entradaTexto.value;

        //Limpiar la entrada de texto.
        entradaTexto.value = "";

        if (!texto || texto.trim() === "") {return;}

        //Crear elemento en html.
        const tarea = document.createElement("div");

        //Definir la estructura del <div>
        tarea.style.display = "flex";
        tarea.style.justifyContent = "space-between";
        tarea.style.alignItems = "center";
        tarea.style.gap = "0.625rem";
        tarea.style.padding = "0.625rem";
        tarea.style.border = "1px solid rgba(255, 255, 255, 0.15)";
        tarea.style.borderRadius = "0.5rem";
        tarea.style.backgroundColor = "#253A6E";

        //Crear el contenido del la tarea
        const  descripcion = document.createElement("p");

        //Estilos de la descripcion.
        descripcion.style.color = "#ECEFF8";

        //Anadir texto a la descripcion.
        descripcion.textContent = texto;

        
        //Botones de completar y eliminar
        const contenedorBotones = document.createElement("div");
        contenedorBotones.style.display = "flex";
        contenedorBotones.style.gap = "0.5rem";

        const btnCompletar = document.createElement("button");
        btnCompletar.classList.add("btn-completar");
        btnCompletar.textContent = "✅ Completar";
        btnCompletar.style.backgroundColor = "#10B981";
        btnCompletar.style.color = "white";
        btnCompletar.style.border = "none";
        btnCompletar.style.borderRadius = "0.375rem";
        btnCompletar.style.padding = "0.313rem 0.625rem";
        btnCompletar.style.cursor = "pointer";



        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "🗑️ Eliminar";
        btnEliminar.style.backgroundColor = "#EF4444";
        btnEliminar.style.color = "white";
        btnEliminar.style.border = "none";
        btnEliminar.style.borderRadius = "0.375rem";
        btnEliminar.style.padding = "0.313rem 0.625rem";
        btnEliminar.style.cursor = "pointer";

        //Anadir botones a la tarea.
        contenedorBotones.appendChild(btnCompletar);
        contenedorBotones.appendChild(btnEliminar);

        //Anadir descripcion a la tarea.
        tarea.appendChild(descripcion);
        tarea.appendChild(contenedorBotones);


        //Anadir la tarea a la lista de pendientes.
        listaPendientes.appendChild(tarea);

        //Actualizar el contador de tareas pendientes.
        contPendientes++;
        
        contadorPendientes.textContent = String(contPendientes);



        //evento para completar tareas
        btnCompletar.addEventListener('click', () => {
            listaCompletadas.appendChild(tarea);

            //Actualizar contadores
            contPendientes--;
            contCompletadas++;

            contadorPendientes.textContent = String(contPendientes);
            contadorCompletadas.textContent = String(contCompletadas);

            btnCompletar.style.display = "none";
        });

        
        //Evento para eliminar tareas.
        btnEliminar.addEventListener('click', () => {
            
            if (btnEliminar.closest('#lista-pendientes') === document.querySelector('#lista-pendientes')) {
                contPendientes--;
                contadorPendientes.textContent = String(contPendientes);
            } else {
                contCompletadas--;
                contadorCompletadas.textContent = String(contCompletadas);
            }

            tarea.remove();
        });
    }
}




//Para aactualizar los contadores
let contCompletadas = 0;
let contPendientes = 0;

botonAnadir.addEventListener('click', insertarTareas);
entradaTexto.addEventListener('keydown', insertarTareas);