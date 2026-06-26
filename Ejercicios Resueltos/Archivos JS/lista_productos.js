// Seleccionar elementos html
const formulario = document.querySelector('form');
const entradaTexto = document.querySelector('#input-producto'); // 1. Volvemos a seleccionar el input
const listaProductos = document.querySelector('ul');

function anadirProducto(e) {
    e.preventDefault(); 

    const texto = entradaTexto.value;

    //Limpiar con .value
    entradaTexto.value = "";

    // Validar la entrada de texto
    if (texto.trim() === "") {

        return;
    }

    // Crear item de lista
    const itemLista = document.createElement('li');

    // Crear producto (contenedor con flexbox y clase group para detectar el hover)
    const producto = document.createElement('div');
    producto.className = "flex justify-between items-center p-4 hover:bg-slate-50 transition-all duration-200 group";

    // Crear texto del producto
    const textoProducto = document.createElement('span');
    textoProducto.className = "text-slate-700 font-medium";
    textoProducto.textContent = texto;

    // Crear boton de eliminar con estilos premium y opacidad suave al hacer hover
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 font-semibold px-3 py-1.5 rounded-lg text-xs transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-sm";

    // Agregar funcionalidad para eliminar el elemento al hacer click
    botonEliminar.addEventListener('click', () => {
        itemLista.classList.add('opacity-0', 'transition-opacity', 'duration-200');
        setTimeout(() => itemLista.remove(), 200); // Remueve el elemento después de la animación
    });

    // Ensamblar los elementos
    producto.appendChild(textoProducto);
    producto.appendChild(botonEliminar);
    itemLista.appendChild(producto);
    listaProductos.appendChild(itemLista);


}

formulario.addEventListener('submit', anadirProducto);
