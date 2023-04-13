//BOTON SOLICITAR TURNO
let solicitarTurno = document.getElementById("btnSolicitarTurno");
solicitarTurno.addEventListener("click", redireccionFormulario);

function redireccionFormulario() {
    window.location.href = "Solicitarturno.html";
}
//BOTON PARA CONOCER PROFESIONALES
let conocer = document.getElementById("conocelos");
conocer.addEventListener("click", respuestaConocelos);

function respuestaConocelos() {
    window.location.href = "profesionales.html";
}

let contactar1 = document.getElementById("contactar1");
contactar1.addEventListener("click", respuestaContactar1);

function respuestaContactar1() {
    Swal.fire({
        title: "Camila Las Heras",
        text: "Correo electronico:camila.westnet@gmail.com",
        showClass: {
            popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
            popup: "animate__animated animate__fadeOutUp",
        },
    });
}

//BOTON CONTACTAR PROFESIONALES
let contactar2 = document.getElementById("contactar2");
contactar2.addEventListener("click", respuestaContactar2);

function respuestaContactar2() {
    Swal.fire({
        title: "Paola Melo",
        text: "Correo electronico:paola.melo@gmail.com",
        showClass: {
            popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
            popup: "animate__animated animate__fadeOutUp",
        },
    });
}

let contactar3 = document.getElementById("contactar3");
contactar3.addEventListener("click", respuestaContactar3);

function respuestaContactar3() {
    Swal.fire({
        title: "Catalina Lopez",
        text: "Correo electronico:catalina.lopez@gmail.com",
        showClass: {
            popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
            popup: "animate__animated animate__fadeOutUp",
        },
    });
}
