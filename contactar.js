let contactar1 = document.getElementById("contactar1");
contactar1.addEventListener("click", respuestaContactar1);

function respuestaContactar1() {
    const fundadores = {
        "Correo Electrónico": "camila.westnet@gmail.com",
    };

    const fundadoresJSON = JSON.stringify(fundadores);

    alert(fundadoresJSON);
}

let contactar2 = document.getElementById("contactar2");
contactar2.addEventListener("click", respuestaContactar2);

function respuestaContactar2() {
    const fundadores = {
        "Correo Electrónico": "paola.melo@gmail.com",
    };

    const fundadoresJSON = JSON.stringify(fundadores);

    alert(fundadoresJSON);
}

let contactar3 = document.getElementById("contactar3");
contactar3.addEventListener("click", respuestaContactar3);

function respuestaContactar3() {
    const fundadores = {
        "Correo Electrónico": "catalina.lopez@gmail.com",
    };

    const fundadoresJSON = JSON.stringify(fundadores);

    alert(fundadoresJSON);
}
