
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formreg").addEventListener("submit", (event) => {
        event.preventDefault();   
        validarCampos();
    });

    document.querySelectorAll(".form-control").forEach((input) => {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Tab" || event.key === "Enter") {
                event.preventDefault();
                validarCampos();
            }
        });
    });
});

const validarCampos = () => {
    resetErrorMessages();
    const nombre = document.getElementById("inputNombre").value.trim();
    const apellido = document.getElementById("inputApellido").value.trim();
    const email = document.getElementById("inputEmail").value.trim();
    const password = document.getElementById("password").value.trim();
    const fecha = document.getElementById("fecha").value.trim();
    const pais = document.getElementById("pais").value.trim();
    const terminos = document.getElementById("terminos").value.trim();
console.log(pais,apellido, nombre);
 
    if (nombre === "") {
        displayErrorMessage("nombreError", "Ingrese un nombre por favor");
        document.getElementById("inputNombre").classList.add("is-invalid");

    } else {
        document.getElementById("inputNombre").classList.remove("is-invalid");
        document.getElementById("inputNombre").classList.add("is-valid");
    }
    
    if (apellido === "") {
        displayErrorMessage("apellidoError", "Ingrese un apellido por favor");
        document.getElementById("inputApellido").classList.add("is-invalid");

    } else {
        document.getElementById("inputApellido").classList.remove("is-invalid");
        document.getElementById("inputApellido").classList.add("is-valid");
    } 

    if (fecha === "") {
        displayErrorMessage("fNacimientoError", "Ingrese un fecha ");
        document.getElementById("fecha").classList.add("is-invalid");

    } else {
        document.getElementById("fecha").classList.remove("is-invalid");
        document.getElementById("fecha").classList.add("is-valid");
    }

   
    if (!isValidEmail(email)) {
        displayErrorMessage("mailError", "Por favor ingrese un correo electrónico válido.");
        document.getElementById("inputEmail").classList.add("is-invalid");
      
    } else {
        document.getElementById("inputEmail").classList.remove("is-invalid");
        document.getElementById("inputEmail").classList.add("is-valid");
    }

    if (password.length < 8) {
        displayErrorMessage("passError", "La contraseña debe tener al menos 8 caracteres.");
        document.getElementById("password").classList.add("is-invalid");

    } else {
        document.getElementById("password").classList.remove("is-invalid");
        document.getElementById("password").classList.add("is-valid");
    }

    if (pais === "") {
        displayErrorMessage("paisError", "seleccione un Pais por favor ");
        document.getElementById("pais").classList.add("is-invalid");

    } else {
        document.getElementById("pais").classList.remove("is-invalid");
        document.getElementById("pais").classList.add("is-valid");
    }

    if (terminos === "") {
        displayErrorMessage("terminosError", "Ingrese un fecha ");
        document.getElementById("terminos").classList.add("is-invalid");

    } else {
        document.getElementById("terminos").classList.remove("is-invalid");
        document.getElementById("terminos").classList.add("is-valid");
    }
 
};

const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

const displayErrorMessage = (elementId, message) => {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
};

const resetErrorMessages = () => {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.innerText = "";
    });
};

