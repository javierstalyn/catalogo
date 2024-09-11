
export const login = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  if (isAdmin === "true") {
    let adminLink = document.getElementById("adminLink");
    adminLink.className = "d-block";
    let logOut = document.getElementById("logOut");
    logOut.className = "d-block";
    let loginLink = document.getElementById("loginLink");
    loginLink.className = "d-none";
    let registerLink = document.getElementById("registerLink");
    registerLink.className = "d-none";
  }
};
export const logout = () => {
  localStorage.removeItem("isAdmin");

  location.replace("/pages/login.html");
};



export const campoRequerido = (input, min, max) => {
  if (
    input.value.trim().length > 0 &&
    input.value.length <= max &&
    input.value.length >= min
  ) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};

export const validarMail = (input) => {
  const validacion = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (validacion.test(input.value) && input.value.trim().length > 0) {
    input.className = "form-control is-valid";

    return true;
  } else {
    input.className = "form-control is-invalid";

    return false;
  }
};

export const validarNombre = (input) => {
  const nombreValidado = /^[A-Za-z\s\-']+$/;
  if (nombreValidado.test(input.value) && input.value.trim().length > 0) {
    input.className = " form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";

    return false;
  }
};

export const validarURL = (input) => {
  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};
  
export const validarGeneral = (
  campoCodigo,
  campoNombre,
  campoCategoria,
  campoDescription,
  campoSrcImage,
  campoDestacada,
  campoReleased,
  campoTrailerLink
) => {
    let alert= document.getElementById("mensajeAlert")
     if (
    campoRequerido(campoCodigo,1,40) &&
    validarNombre(campoNombre) &&
    campoRequerido(campoCategoria,1,14) &&
    campoRequerido(campoDescription, 1,45) &&
    validarURL(campoSrcImage) &&
    campoRequerido(campoReleased, 1,14) &&
    validarURL(campoTrailerLink) 
  ) {
    alert.className = "alert alert-danger my-3 d-none"
    console.log("validacion correcta")
    return true
  } else {
    console.log("validacion INCORRECTA")
    alert.className = "alert alert-danger my-3"
return false
}
};

