let botonFormulario = document.getElementById("btnFormulario"); //llamo al botón btnFormulario de SolicitarTurno.html para que pueda ejecutarse la funcion que pongo a continuación
botonFormulario.addEventListener("click", procesarFormulario);
// DEFINIR CLASE PROFESIONALES
function Profesionales(nombre, edad, especialidad, obraSocial) {
    this.nombre = nombre;
    this.edad = edad;
    this.especialidad = especialidad;
    this.obraSocial = [obraSocial];
    this.precioConsulta;
}
//DEFINIR ARRAY DE PROFESIONALES
let arrayDeProfesionales = [new Profesionales("Catalina Lopez", 24, "Psicoanálisis", "GALENO", 2500), new Profesionales("Camila Las Heras", 40, "Psicologia del deporte", "OSDE", 3000), new Profesionales("Emiliano Las Heras", 35, "Psicologia cognitiva", "Swiss medical", 1500), new Profesionales("Ana Carolina Puerta", 30, "Psicologia de la salud", "Hospital Español", 1800), new Profesionales("Leticia Puerta", 80, "Terapia Cognitivo Conductual", "Particular", 5000)];
//PROCESAR DATOS DEL FORMULARIO
function procesarFormulario() {
    let nombrePaciente = document.getElementById("nombre"); //guardo las respuestas del paciente en una variable
    let dniPaciente = document.getElementById("dni");
    let profesionalElegido = document.getElementById("profesional");
    let obraSocialPaciente = document.getElementById("obraSocial");
    console.log(nombrePaciente.value, dniPaciente.value, profesionalElegido.value, obraSocialPaciente.value);
    let esNombreValido = chequeoNombre(nombrePaciente.value);
    //mejorar esta validación
    if (!esNombreValido) {
        alert("nombreinvalido");
    }

    //GUARDADO EN LOCALSTORAGE
    guardarTurno(nombrePaciente.value, dniPaciente.value, profesionalElegido.value);
}

//POBLAR DE INFORMACIÓN EL FORMULARIO
function armarFormulario() {
    let selectProfesional = document.getElementById("profesional"); //llamo al select
    let selectObraSocial = document.getElementById("obraSocial");
    console.log("armarFormulario");
    arrayDeProfesionales.forEach((profesional, key) => {
        //recorro el array creado con todos los profesionales

        let opcionHTML = document.createElement("option");
        //APLICACIÓN DE DESESTRUCTURACIÓN
        const { nombre, obraSocial } = profesional;

        opcionHTML.text = nombre; //al objeto le estoy agregando el nombre
        opcionHTML.value = key; //al objeto le agrego un valor en base al índice
        selectProfesional.add(opcionHTML); //agrego un hijo al objeto select

        let opcionHTML2 = document.createElement("option");
        opcionHTML2.text = obraSocial;
        opcionHTML2.value = key;
        selectObraSocial.add(opcionHTML2);
    });
}
//CHEQUEO DE INFORMACIÓN
function chequeoNombre(nombre) {
    console.log(typeof nombre);
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
