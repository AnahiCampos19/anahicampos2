document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const submitButton = document.getElementById("submit-btn");

    // Campos del formulario
    const nameField = document.getElementById("name");
    const surnameField = document.getElementById("surname");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    // IDs de mensajes de error
    const errors = {
        name: document.getElementById("error-name"),
        surname: document.getElementById("error-surname"),
        email: document.getElementById("error-email"),
        message: document.getElementById("error-message"),
    };

    let interacted = false; // Nuevo estado para rastrear interacción del usuario

    // Función de validación
    const validateField = (field, errorId, condition, message) => {
        if (condition) {
            errors[errorId].textContent = interacted ? message : ""; // Mostrar error solo si hubo interacción
            field.classList.add("error");
            return false;
        } else {
            errors[errorId].textContent = "";
            field.classList.remove("error");
            return true;
        }
    };

    // Validar todo el formulario
    const validateForm = () => {
        const nameValid = validateField(
            nameField,
            "name",
            nameField.value.trim() === "",
            "El campo 'Nombre' es obligatorio."
        );

        const surnameValid = validateField(
            surnameField,
            "surname",
            surnameField.value.trim() === "",
            "El campo 'Apellido' es obligatorio."
        );

        const emailValid = validateField(
            emailField,
            "email",
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value),
            "Por favor, introduce un correo electrónico válido."
        );

        const messageValid = validateField(
            messageField,
            "message",
            messageField.value.trim() === "",
            "El campo 'Mensaje' no puede estar vacío."
        );

        // Habilitar o deshabilitar el botón de envío
        const isFormValid = nameValid && surnameValid && emailValid && messageValid;
        submitButton.disabled = !isFormValid;
    };

    // Activar la validación al interactuar con el formulario
    [nameField, surnameField, emailField, messageField].forEach((field) => {
        field.addEventListener("input", () => {
            interacted = true; // Marcar que el usuario interactuó
            validateForm();
        });
    });

    // Validar al enviar el formulario
    form.addEventListener("submit", (event) => {
        interacted = true; // Marcar como interactuado si intenta enviar sin tocar campos
        validateForm();
        if (!submitButton.disabled) {
            return; // Permitir el envío si es válido
        }
        event.preventDefault(); // Evitar el envío si el formulario no es válido
    });

    // Validación inicial sin mostrar errores
    validateForm();
});
