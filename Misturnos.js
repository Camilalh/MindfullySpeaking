document.addEventListener(
    "DOMContentLoaded",
    function () {
        //TRAIGO JSON GUARDADO
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
        <h5 class="card-title">Turno asignado con: ${element.nombre}</h5>
            <p class="card-text">Nombre del paciente: ${element.nombreProfesional}</p>
            <a href="#" class="btn btn-primary" id="cancelar">Cancelar turno</a>
            </div>
        </div>`;
            htmlObject.innerHTML = infoTurno; // Convierte el string al HTML.
            contenedorTurno.append(htmlObject); //abro el contenedor para agregar dentro el card que cree anteriormente
        });
    },
    false,
    function cancelarTurno() {
        let cancelar=getElementById("cancelar-turno")
        cancelar.addEventListener("click",confirmacionDeCa)
    }
    function cancelarTurno
);
