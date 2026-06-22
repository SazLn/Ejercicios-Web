//Seleccionar <span>
const textArea = document.getElementById("editor");
const span = document.getElementById("contador");


//Añadir evento con 'eventListener'
textArea.addEventListener("input", () => {

    let caracteres = textArea.value.length;

    span.textContent = caracteres + "/500";

    //Validar la cantidad máxima de caracteres.
    if (caracteres > 499) {
        textArea.value = textArea.value.substring(0, 499);

        caracteres = 499;
        textArea.style.borderColor = "red";
    }

});