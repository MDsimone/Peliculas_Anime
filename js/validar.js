
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formLogin").addEventListener("submit", (event) => {
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
    const email = document.getElementById("inputEmail").value.trim();
    const password = document.getElementById("password").value.trim();



   
    if (!isValidEmail(email)) {
        displayErrorMessage("emailError", "Por favor ingrese un correo electrónico válido.");
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

