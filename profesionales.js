//FETCH
fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <p>Nombre:${producto.nombre}</p>
            <p>Edad:${producto.edad}</p>
            <p>Enfoque Psicologico:${producto.enfoquePsicologico}</p>
        `;
            document.body.append(li);
        });
    });
