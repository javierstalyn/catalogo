import { campoRequerido, validarMail } from "./helpers.js";

let campoEmail = document.getElementById("email");
let campoConstraseña = document.getElementById("password");

campoEmail.addEventListener("blur", () => {
  validarMail(campoEmail);
});

campoConstraseña.addEventListener("blur", () => {
  campoRequerido(campoConstraseña, 1, 15);
});

const admin = {
  correo: "admin@admin.com",
  password: "12345678",
};

const logIn = (event) => {
  event.preventDefault();

  let correo = campoEmail.value;
  let password = campoConstraseña.value;

  if (correo === admin.correo && password === admin.password) {
    localStorage.setItem("user", JSON.stringify(correo));
    localStorage.setItem("isAdmin", "true");
    location.replace("/index.html");
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario o contraseña incorrecta",
      footer: '<a href="/pages/error.html">Recuperar contraseña</a>',
    });
  }
};

document.getElementById("formulario").addEventListener("submit", logIn);
