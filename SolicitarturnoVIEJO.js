function procesarFormulario() {
    // //Definicion de clase
    // function Profesionales(nombre, edad, especialidad, obraSocial) {
    //     this.nombre = nombre;
    //     this.edad = edad;
    //     this.especialidad = especialidad;
    //     this.obraSocial = [obraSocial];
    //     this.precioConsulta;
    // }

    //Creacion de array y sus objetos
    // arrayDeProfesionales = [new Profesionales("Catalina Lopez", 24, "Psicoanálisis", "OSEP,OSDE,GALENO", 2500), new Profesionales("Camila Las Heras", 40, "Psicologia del deporte", "OSDE", 3000), new Profesionales("Emiliano Las Heras", 35, "Psicologia cognitiva", "Swiss medical", 1500), new Profesionales("Ana Carolina Puerta", 30, "Psicologia de la salud", "Hospital Español", 1800), new Profesionales("Leticia Puerta", 80, "Terapia Cognitivo Conductual", "Particular", 5000)];
    // console.log(arrayDeProfesionales);
    // mensaje = ""; //el alert empieza vacio y luego se completa con todos los elementos
    // //APLICACIÓN DE DESTRUCTURACIÓN
    // arrayDeProfesionales.forEach((persona) => {
    //     const { nombre } = persona;
    //     mensaje += `Nombre: ${nombre}\n`;
    //     const { edad } = persona;
    //     mensaje += `Edad: ${edad}\n`;
    //     const { especialidad } = persona;
    //     mensaje += `Especialidad: ${especialidad}\n`;
    //     const { obraSocial } = persona;
    //     mensaje += `Obra Social: ${obraSocial}\n\n`;
    // });

    // alert(mensaje); //Aca la variable ya tiene todos los objetos agregados.

    // // FILTRO DE PROFESIONALES
    // let filtro = prompt("Ingrese filtro que desee realizar (nombre, especialidad u obra social). Si no desea realizar un filtro seleccione -continuar-");
    // if (filtro) {
    //     let profesionalesFiltrados = arrayDeProfesionales.filter((profesional) => {
    //         return profesional.nombre.includes(filtro) || profesional.especialidad.includes(filtro) || profesional.obraSocial.join(",").includes(filtro);
    //     });

    //     // Mostrar resultados
    //     let mensajeFiltrado = "";
    //     profesionalesFiltrados.forEach((persona) => {
    //         mensajeFiltrado += `Nombre: ${persona.nombre}\n`;
    //         mensajeFiltrado += `Edad: ${persona.edad}\n`;
    //         mensajeFiltrado += `Especialidad: ${persona.especialidad}\n`;
    //         mensajeFiltrado += `Obra Social: ${persona.obraSocial}\n\n`;
    //     });
    //     //APLICACIÓN DE OPERADOR TERNARIO
    //     mensajeFiltrado != "" ? alert(`Profesionales encontrados:\n${mensajeFiltrado}`) : alert("No se encontraron profesionales que coincidan con la búsqueda.");
    // }

    // //SELECCION DE PROFESIONAL

    // function chequearValidez(numeroIngresado) {
    //     console.log(numeroIngresado);
    //     esNumeroDeUnDigito = numeroIngresado.length == 1; //chequear que sea numero de un digito
    //     noEsCero = numeroIngresado != 0; //no toma valor cero.
    //     return esNumeroDeUnDigito && noEsCero; //Si es un numero de un digito y no es cero, retornar true.
    // }
    // numeroIngresado = "";
    // do {
    //     numeroIngresado = eleccionProfesional(); // en este caso la eleccion profesional se trata del numero que ingresó el paciente.
    // } while (!chequearValidez(numeroIngresado)); //invierto

    // function eleccionProfesional() {
    //     //declarar funcion
    //     eleccion = "";
    //     arrayDeProfesionales.forEach((persona, i) => {
    //         opcion = i + 1;
    //         eleccion += `Seleccione ${opcion} para elegir a` + " " + arrayDeProfesionales[i].nombre + "\n"; //me permite no tener que modificar el codigo cada vez que agrego profesionales nuevos.
    //     });
    //     numeroIngresado = prompt(eleccion);
    //     return numeroIngresado; // devuelve el valor a donde se llame, en este caso al numero ingresado.
    // }
    //PEDIR DATOS DEL PACIENTE

    do {
        nombre = prompt("Ingrese su nombre completo para conseguir turno con " + arrayDeProfesionales[numeroIngresado - 1].nombre); // Primero llamo al array, pongo opcion menos 1 porque quiero saber el numero del indice que el paciente eligio, y luego quiero el nombre.
        if (!nombre || /^\s*$/.test(nombre)) {
            v; //Con estas validaciones me aseguro de que el paciente no puede seguir si no ingresa un dato correcto.
            alert("El nombre no puede estar vacío.");
            continue;
        }

        dni = parseInt(prompt("Ingrese su DNI o pasaporte"));
        if (!dni || isNaN(dni)) {
            //Validacion para ingresar solamente numeros.
            alert("El DNI o pasaporte no es válido.");
            continue;
        }
    } while (nombre == "" || dni == "");

    //MOSTRAR DATOS INGRESADOS POR EL PACIENTE
    const nombreYdni = `${nombre} ${dni}`;
    let precioConsulta = 2500;
    alert("Su nombre es: " + nombreYdni + " " + "A continuación se le asignará su turno. El costo es de" + " " + "$" + precioConsulta);

    //ASIGNAR NUMERO DE TURNO

    function diasDeTurnos(dia, horario) {
        this.dia = dia;
        this.horario = horario;
    }
    arrayDeTurnos = [new diasDeTurnos("Lunes", "16.15"), new diasDeTurnos("Martes", "17:15"), new diasDeTurnos("Miercoles", "20:15"), new diasDeTurnos("Jueves", "10:00"), new diasDeTurnos("Viernes", "9:00")];
    console.log(arrayDeTurnos);
    mensaje = "";
    arrayDeTurnos.forEach((turno, i) => {
        //aca se declaran las variables turno e i para ser usadas.
        mensaje += `OPCION ${i + 1}\n`;
        mensaje += `Dia: ${turno.dia}\n`;
        mensaje += `Horario: ${turno.horario}\n\n`;
    });

    opcionElegida = prompt(`Seleccione la opción del turno que desea:\n${mensaje}`); //Aca muestro el listado de todos los valores del array.
    alert("Su turno fue asignado para el día" + " " + arrayDeTurnos[opcionElegida - 1].dia + " " + "a las" + " " + arrayDeTurnos[opcionElegida - 1].horario);

    //INFORMAR DESCUENTO POR OBRA SOCIAL
    let obraSocial = parseInt(prompt("Elija opción correcta según su obra social: 1. Sin obra social, 2. Galeno, 3. OSDE, 4.OSEP, 5.SWISS MEDICAL, 6.HOSPITAL ESPAÑOL"));
    switch (obraSocial) {
        case 1:
            precioConsulta = precioConsulta;
            alert("El costo final de su consulta  sin descuento es de" + " " + "$" + precioConsulta);
            break;
        case 2:
            precioConsulta = precioConsulta * 0.3;
            alert("El costo final de su consulta con descuento es de" + " " + "$" + precioConsulta);
            break;
        case 3:
            precioConsulta = precioConsulta * 0.5;
            alert("El costo final de su consulta con descuento es de" + " " + "$" + precioConsulta);
            break;
        case 4:
            precioConsulta = precioConsulta * 0.2;
            alert("El costo final de su consulta con descuento es de" + " " + "$" + precioConsulta);
            break;
        case 5:
            precioConsulta = precioConsulta * 0.9;
            alert("El costo final de su consulta con descuento es de" + " " + "$" + precioConsulta);
            break;
        case 6:
            precioConsulta = precioConsulta * 0.8;
            alert("El costo final de su consulta con descuento es de" + " " + "$" + precioConsulta);
            break;
        default:
            alert("Usted ingresó una opción inexistente");
            break;
    }
    //GUARDADO DE DATOS EN JSON
    let datosDeTurno = { nombre, dni, nombreProfesional: arrayDeProfesionales[numeroIngresado - 1].nombre };
    turnosCargados = localStorage.getItem("datosDeTurno"); //Traigo turnos cargados en el local y lo guardo en la variable turnoCargados
    turnosCargados = JSON.parse(turnosCargados);
    turnosCargados.push(datosDeTurno); // se guarda el turno que acabo de crear a los turnos que ya estaban creados
    localStorage.setItem("datosDeTurno", JSON.stringify(turnosCargados));

    function mostrarResultados(resultados) {
        const contenedorResultados = document.getElementById("resultados");

        const titulo = document.createElement("h2");
        titulo.textContent = "Turno asignado:";
        contenedorResultados.appendChild(titulo);

        let parrafo1 = document.createElement("div"); //me estaba faltando esto.
        arrayDeProfesionales.map((profesional) => {
            return (parrafo1.innerHTML = `
                <strong>Profesional:${profesional.nombre}</strong><br>
                <strong>Especialidad:${profesional.especialidad}</strong><br>
                `);
        });
        let parrafo2 = document.createElement("div"); //me estaba faltando esto.
        arrayDeTurnos.map((turno) => {
            return (parrafo2.innerHTML = `
                <strong>Dia:${turno.dia}</strong><br>
                <strong>Horario:${turno.horario}</strong><br>
                `);
        });

        contenedorResultados.appendChild(parrafo1);
        contenedorResultados.appendChild(parrafo2);
    }
    mostrarResultados(resultados);
}

datosDelPaciente();
