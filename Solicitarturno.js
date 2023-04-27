let botonFormulario = document.getElementById("btnFormulario");

botonFormulario.addEventListener("click", procesarFormulario);

//ARRAY DE OBRAS SOCIALES
function obraSocial(nombre) {
    this.nombre = nombre;
}
let arrayDeObrasSociales = [new obraSocial("Galeno"), new obraSocial("Hospital Español"), new obraSocial("OSDE"), new obraSocial("OSEP"), new obraSocial("Swiss Medical"), new obraSocial("Particular")];
console.log(arrayDeObrasSociales);

//ARRAY DE PROFESIONALES

function Profesionales(nombre, edad, especialidad) {
    this.nombre = nombre;
    this.edad = edad;
    this.especialidad = especialidad;
    this.precioConsulta;
}

let arrayDeProfesionales = [new Profesionales("Catalina Lopez", 24, "Psicoanálisis", 2500), new Profesionales("Juan Barrera", 40, "Terapia cognitivo conductual", 3000), new Profesionales("Emiliano Gonzalez", 35, "Terapia sistémica breve", 1500), new Profesionales("Ana Carolina Contini", 45, "Terapia neuropsicológica", 1800), new Profesionales("Leticia Contini", 50, "Terapia Gestalt humanista", 5000), new Profesionales("Katherine Perez", 60, "Terapia racional-emotiva-conductual TREC", 5000), new Profesionales("Cristian Martinez", 32, "Terapia cognitiva", 5000), new Profesionales("Martín Robledo", 31, "Terapia breve centrada en soluciones", 5000)];

//PROCESAMIENTO DE TODO EL FORMULARIO
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

//ARMADO DE FORMULARIO DONDE SE COMPLETA CON LOS DATOS DEL ARRAY
function armarFormulario() {
    let selectProfesional = document.getElementById("profesional");
    arrayDeProfesionales.forEach((profesional, key) => {
        const { nombre, obraSocial } = profesional;

        let opcionHTML = document.createElement("option");
        opcionHTML.text = nombre;
        opcionHTML.value = key;
        selectProfesional.add(opcionHTML);
    });
}

function chequeoNombre(nombre) {
    if (!nombre || /^\s*$/.test(nombre)) return false;
    return true;
}

// //IMPLEMENTAR VALIDACIÓN DE DNI
// function chequeoDNI(dni) {
//     if (!dni || isNaN(dni)) return false;
//     return true;
// }

//APLICACIÓN DE FILTER.
function buscarObraSocial() {
    let inputObraSocial = document.getElementById("buscarObraSocial").value;
    let resultado = arrayDeObrasSociales.filter(function (obraSocial) {
        return obraSocial.nombre === inputObraSocial;
    });
    let resultadoBusqueda = document.getElementById("resultadoBusqueda");
    if (resultado.length > 0) {
        resultadoBusqueda.innerHTML = "La obra social " + inputObraSocial + " está disponible";
    } else {
        resultadoBusqueda.innerHTML = "La obra social " + inputObraSocial + " no se encuentra disponible";
    }
}

//GUARDADO DE TURNO
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
