let botonFormulario = document.getElementById("btnFormulario");

botonFormulario.addEventListener("click", procesarFormulario);

function Profesionales(nombre, edad, especialidad, obraSocial) {
    this.nombre = nombre;
    this.edad = edad;
    this.especialidad = especialidad;
    this.obraSocial = [obraSocial];
    this.precioConsulta;
}

let arrayDeProfesionales = [new Profesionales("Catalina Lopez", 24, "Psicoanálisis", "GALENO", 2500), new Profesionales("Juan Barrera", 40, "Psicologia del deporte", "OSDE", 3000), new Profesionales("Emiliano Gonzalez", 35, "Psicologia cognitiva", "Swiss medical", 1500), new Profesionales("Ana Carolina Contini", 30, "Psicologia de la salud", "Hospital Español", 1800), new Profesionales("Leticia Contini", 80, "Terapia Cognitivo Conductual", "Particular", 5000)];

function procesarFormulario() {
    let nombrePaciente = document.getElementById("nombre");
    let dniPaciente = document.getElementById("dni");
    let profesionalElegido = document.getElementById("profesional");
    let obraSocialPaciente = document.getElementById("obraSocial");
    console.log(nombrePaciente.value, dniPaciente.value, profesionalElegido.value, obraSocialPaciente.value);
    let esNombreValido = chequeoNombre(nombrePaciente.value);
    if (!esNombreValido) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Nombre inválido",
        });
        return;
    }
    let esDNIValido = chequeoDNI(dniPaciente.value);
    if (!esDNIValido) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "DNI inválido",
        });
        return;
    }
    guardarTurno(nombrePaciente.value, dniPaciente.value, profesionalElegido.value);
    //APLICACIÓN DE SWEET ALERT
    Swal.fire({
        icon: "success",
        title: "Su turno fue solicitado correctamente",
        text: "Puede ver el resumen de su turno en Mis turnos",
    });

    nombrePaciente.value = "";
    dniPaciente.value = "";
}

function armarFormulario() {
    let selectProfesional = document.getElementById("profesional");
    let selectObraSocial = document.getElementById("obraSocial");
    console.log("armarFormulario");
    arrayDeProfesionales.forEach((profesional, key) => {
        const { nombre, obraSocial } = profesional;

        let opcionHTML = document.createElement("option");
        opcionHTML.text = nombre;
        opcionHTML.value = key;
        selectProfesional.add(opcionHTML);

        let opcionHTML2 = document.createElement("option");
        opcionHTML2.text = obraSocial;
        opcionHTML2.value = key;
        selectObraSocial.add(opcionHTML2);
    });
}

function chequeoNombre(nombre) {
    if (!nombre || /^\s*$/.test(nombre)) return false;
    return true;
}
//IMPLEMENTAR
function chequeoDNI(dni) {
    if (!dni || isNaN(dni)) return false;
    return true;
}

function guardarTurno(nombre, dni, profesionalElegido) {
    let profesional = arrayDeProfesionales[profesionalElegido];
    let datosDeTurno = {
        nombre,
        dni,
        nombreProfesional: profesional.nombre,
        obraSocial: profesional.obraSocial,
    };

    turnos = localStorage.getItem("turnos");
    siExistenTurnos = turnos != null;
    if (siExistenTurnos) {
        console.log("existen turnos previos");
        turnos = JSON.parse(turnos);
        // agregar turno nuevo a los ya existentes
    } else {
        console.log("No existen turnos previos");
        //crear array de turnos
        turnos = [];
    }
    turnos.push(datosDeTurno);
    let jeison = JSON.stringify(turnos);
    localStorage.setItem("turnos", jeison);
}

armarFormulario();
