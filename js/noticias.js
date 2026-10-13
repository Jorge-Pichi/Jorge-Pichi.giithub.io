document.addEventListener("DOMContentLoaded", function () {

    fetch("datos/noticias.json")
        .then(response => {

            if (!response.ok) {
                throw new Error("Error al cargar las noticias");
            }

            return response.json();
        })

        .then(noticias => {

            const contenedor = document.getElementById(
                "contenedor-noticias"
            );

            contenedor.innerHTML = "";

            noticias.forEach(noticia => {

                const articulo = document.createElement("article");

                const titulo = document.createElement("h3");
                titulo.textContent = noticia.titulo;

                const fecha = document.createElement("p");
                fecha.textContent = noticia.fecha;

                const descripcion = document.createElement("p");
                descripcion.textContent = noticia.descripcion;

                articulo.appendChild(titulo);
                articulo.appendChild(fecha);
                articulo.appendChild(descripcion);

                contenedor.appendChild(articulo);

            });

        })

        .catch(error => {

            console.error(error);

            document.getElementById(
                "contenedor-noticias"
            ).textContent = "No se pudieron cargar las noticias.";

        });

});
