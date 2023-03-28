//TRAIGO JSON GUARDADO
let turnoSolicitado = localStorage.getItem("datosDeTurno");
turnoSolicitado = JSON.parse(turnoSolicitado);
// console.log(turnoSolicitado);

//GUARDO TURNOS EN UN ARRAY
let turnosArray = [];
turnosArray.push(turnoSolicitado);

//GUARDO INFO EN LOCALSTORAGE
let datosDeTurno = { nombre, dni, nombreProfesional: arrayDeProfesionales[numeroIngresado - 1].nombre };
turnosArray.push(datosDeTurno);
localStorage.setItem("datosDeTurno", JSON.stringify(turnosArray));
