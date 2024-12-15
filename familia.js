document.addEventListener("DOMContentLoaded", () => {
    const botonesVerMas = document.querySelectorAll(".ver-mas-btn");

    botonesVerMas.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.dataset.target;
            const targetContainer = document.getElementById(targetId);

            if (targetContainer.style.display === "none" || targetContainer.style.display === "") {
                targetContainer.style.display = "grid"; // Mostrar el contenedor
                cargarCards(targetId); // Cargar las tarjetas
                button.textContent = "Ver menos"; // Cambiar texto del botón
            } else {
                targetContainer.style.display = "none"; // Ocultar el contenedor
                button.textContent = "Ver más"; // Cambiar texto del botón
            }
        });
    });

    function cargarCards(targetId) {
        fetch("contenedores-dinamicos.json")
            .then(response => response.json())
            .then(data => {
                const items = data[targetId];
                const container = document.getElementById(targetId);

                // Evitar duplicar las tarjetas al mostrar nuevamente
                if (container.children.length > 0) return;

                items.forEach(item => {
                    const card = document.createElement("div");
                    card.className = "card3";

                    // Construimos la tarjeta con las propiedades según el targetId
                    if (targetId === "familia-cards") {
                        card.innerHTML = `
                            <img src="${item.imagen}" alt="${item.lugar}">
                            <h3>${item.lugar}</h3>
                            <p>Motivo: ${item.motivo}</p>
                            <p>Integrantes: ${item.integrantes}</p>
                            <p>Año: ${item.año}</p>
                        `;
                    } else if (targetId === "hobbies-cards") {
                        card.innerHTML = `
                            <img src="${item.imagen}" alt="${item.nombre}">
                            <h3>${item.nombre}</h3>
                            <p>${item.descripcion}</p>
                        `;
                    } else if (targetId === "turismo-cards") {
                        card.innerHTML = `
                            <img src="${item.imagen}" alt="${item.lugar}">
                            <h3>${item.lugar}</h3>
                            <p>${item.descripcion}</p>
                        `;
                    }

                    container.appendChild(card);
                });
            })
            .catch(error => console.error("Error al cargar el archivo JSON:", error));
    }
});
