//SPREAD DE OBJETOS
const profesional1 = {
    nombre: "Ana Carolina Puerta",
    edad: 42,
    especialidad: "Psicologa cognitiva conductual",
};
const profesional2 = {
    ...profesional1,
    nombre: "Erica Lopez",
    edad: 29,
};

const datosProfesional1 = document.getElementById("profesional1");

datosProfesional1.innerHTML = `
    <p>Nombre: ${profesional1.nombre}</p>
    <p>Edad: ${profesional1.edad}</p>
    <p>Especialidad: ${profesional1.especialidad}</p>
`;
const datosProfesional2 = document.getElementById("profesional2");

datosProfesional2.innerHTML = `
    <p>Nombre: ${profesional2.nombre}</p>
    <p>Edad: ${profesional2.edad}</p>
    <p>Especialidad: ${profesional2.especialidad}</p>
`;
