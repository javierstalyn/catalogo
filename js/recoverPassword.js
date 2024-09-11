import { validarMail } from "./helpers.js";

let emailRecuperacion = document.getElementById("emailRecuperacion")

emailRecuperacion.addEventListener("blur", () => {
    validarMail(emailRecuperacion);
  });