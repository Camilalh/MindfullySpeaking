document.addEventListener(
    "DOMContentLoaded",
    function () {
        //TRAIGO JSON GUARDADO.
        let turnoSolicitado = localStorage.getItem("turnos");
        turnoSolicitado = JSON.parse(turnoSolicitado);
        console.log(turnoSolicitado);
        const contenedorTurno = document.getElementById("cards"); //busco el id cards en el HTML
        console.log(contenedorTurno);
        turnoSolicitado.forEach((element) => {
            //recorre el array completo y por cada iteracción guarda la información en la variable element
            var htmlObject = document.createElement("div"); // creo variable para pasar el string a HTML
            const infoTurno = ` <div class="card w-50">
        <div class="card-body">
        <h5 class="card-title">Turno asignado con: ${element.nombreProfesional}</h5>
            <p class="card-text">Nombre del paciente: ${element.nombre}</p>
            <p class="card-text">DNI del paciente: ${element.dni}</p>
            <button type=button href="#" class="btn btn-primary cancelar">Cancelar turno</button>
            </div>
        </div>`;
            htmlObject.innerHTML = infoTurno; // Convierte el string al HTML.
            contenedorTurno.append(htmlObject); //abro el contenedor para agregar dentro el card que cree anteriormente
        });
        //CONTROLADOR DE EVENTO
        const botonesCancelar = document.querySelectorAll(".cancelar");
        botonesCancelar.forEach((boton) => {
            boton.addEventListener("click", cancelarturno);
        });
    },
    false
);

function cancelarturno(event) {
    const botonCancelar = event.target; //botón al que se hace click
    const tarjetaTurno = botonCancelar.closest(".card"); // tarjeta que contiene el boton
    const turnocancelado = document.createElement("div");
    turnocancelado.innerHTML = `El turno fue cancelado con éxito`;
    document.body.appendChild(turnocancelado);

    setTimeout(() => {
        document.body.removeChild(turnocancelado);
        tarjetaTurno.remove(); // elimino la tarjeta del turno cancelado del DOM
    }, 3000);
}
