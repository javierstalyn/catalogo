import { Pelicula } from "./clasePelicula.js";
import {
  campoRequerido,
  validarNombre,
  validarURL,
  validarGeneral,
  login,
  logout,
} from "./helpers.js";
document.addEventListener("DOMContentLoaded", () => {
  login();
});

let logoutButton = document.getElementById("logOut");
logoutButton.addEventListener("click", () => {
  logout();
});


let campoCodigo = document.getElementById("campoCodigo");
let campoNombre = document.getElementById("campoNombre");
let campoCategoria = document.getElementById("campoCategoria");
let campoDescription = document.getElementById("campoDescription");
let campoSrcImage = document.getElementById("campoSrcImage");
let campoDestacada = document.getElementById("campoDestacada");
let campoReleased = document.getElementById("campoReleased");
let campoTrailerLink = document.getElementById("campoTrailerLink");
let formPeliculas = document.getElementById("formPeliculas");
let peliculaExistente = false;

let listaPeliculas = JSON.parse(localStorage.getItem("arrayPeliculas")) || [];

campoCodigo.addEventListener("blur", () => {
  campoRequerido(campoCodigo, 1, 30);
});

campoNombre.addEventListener("blur", () => {
  validarNombre(campoNombre);
});

campoCategoria.addEventListener("blur", () => {
  campoRequerido(campoCategoria, 1, 14);
});
campoDescription.addEventListener("blur", () => {
  campoRequerido(campoDescription, 1, 45);
});
campoSrcImage.addEventListener("blur", () => {
  validarURL(campoSrcImage);
});
campoDestacada.addEventListener("blur", () => {
  campoRequerido(campoDestacada, 1, 14);
});
campoReleased.addEventListener("blur", () => {
  campoRequerido(campoReleased, 1, 14);
});
campoTrailerLink.addEventListener("blur", () => {
  validarURL(campoTrailerLink);
});
formPeliculas.addEventListener("submit", guardarPelicula);

cargaInicial();
function guardarPelicula(e) {
  e.preventDefault();
  if (
    validarGeneral(
      campoCodigo,
      campoNombre,
      campoCategoria,
      campoDescription,
      campoSrcImage,
      campoDestacada,
      campoReleased,
      campoTrailerLink
    )
  ) {
    console.log("los datos son correctos para enviar");
    if (!peliculaExistente) {
      crearPelicula();
    } else {
      modificarPelicula();
    }
    guardarLocalStorage();
  }
}
function crearCodigoUnico() {
  let codigoUnico = Date.now().toString();
  return codigoUnico;
}
function crearPelicula() {
  let codUnico = crearCodigoUnico();
  let peliculaNueva = new Pelicula(
    codUnico,
    campoNombre.value,
    campoCategoria.value,
    campoDescription.value,
    campoSrcImage.value,
    campoDestacada.value,
    campoReleased.value,
    campoTrailerLink.value
  );

  console.log(peliculaNueva);
  listaPeliculas.push(peliculaNueva);
  console.log(listaPeliculas);
  limpiarFormulario();
  guardarLocalStorage();
  Swal.fire("Pelicula creada!", "Su producto fue creado con exito", "success");

  crearFila(peliculaNueva);
}
function limpiarFormulario() {
  formPeliculas.reset();
  campoCodigo.className = "form-control";
  campoNombre.className = "form-control";
  campoCategoria.className = "form-control";
  campoDescription.className = "form-control";
  campoSrcImage.className = "form-control";
  campoDestacada.className = "form-control";
  campoReleased.className = "form-control";
  campoTrailerLink.className = "form-control";

  peliculaExistente = false;
}
function guardarLocalStorage() {
  localStorage.setItem("arrayPeliculas", JSON.stringify(listaPeliculas));
}
function crearFila(pelicula) {
  let tablaPeliculas = document.getElementById("tablaPeliculas");
  tablaPeliculas.innerHTML += `
<tr>
<td scope="col">${pelicula.codigo} </td>
<td scope="col">${pelicula.nombre} </td>
<td scope="col">${pelicula.description} </td>
<td scope="col">${pelicula.srcImage} </td>
<td scope="col">${pelicula.destacada} </td>
<td scope="col">${pelicula.released} </td>
<td scope="col">${pelicula.trailerLink} </td>


<td>        <button class="btn btn-warning mb-3" onclick="prepararEdicionPelicula('${pelicula.codigo}')"> Edicion</button>
</td> <td>   <button class="btn btn-danger mb-3" onclick="borrarPelicula('${pelicula.codigo}')"> Eliminar</button>
</td>
</tr>
`;
}
function cargaInicial() {
  if (listaPeliculas.length > 0) {
    listaPeliculas.forEach((itemPelicula) => crearFila(itemPelicula));
  }
}
window.prepararEdicionPelicula = function (codigo) {
  let peliculaBuscada = listaPeliculas.find(
    (itemPelicula) => itemPelicula.codigo === codigo
  );

  campoCodigo.value = peliculaBuscada.codigo;
  campoNombre.value = peliculaBuscada.nombre;
  campoCategoria.value = peliculaBuscada.categoria;
  campoDescription.value = peliculaBuscada.description;
  campoSrcImage.value = peliculaBuscada.srcImage;
  campoDestacada.value = peliculaBuscada.destacada;
  campoReleased.value = peliculaBuscada.released;
  campoTrailerLink.value = peliculaBuscada.trailerLink;

  peliculaExistente = true;
};

function modificarPelicula() {
  Swal.fire({
    title: "¿Seguro que deseas modificar esta película?",
    text: "Puedes volver a editar esta película",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      let indicePelicula = listaPeliculas.findIndex(
        (itemPelicula) => itemPelicula.codigo === campoCodigo.value
      );
      console.log(indicePelicula);
      listaPeliculas[indicePelicula].nombre = campoNombre.value;
      listaPeliculas[indicePelicula].categoria = campoCategoria.value;
      listaPeliculas[indicePelicula].description = campoDescription.value;
      listaPeliculas[indicePelicula].srcImage = campoSrcImage.value;
      listaPeliculas[indicePelicula].destacada = campoDestacada.value;
      listaPeliculas[indicePelicula].released = campoReleased.value;
      listaPeliculas[indicePelicula].trailerLink = campoTrailerLink.value;

      guardarLocalStorage();
      borrarTabla();
      cargaInicial();
      Swal.fire(
        "Película modificada",
        "La película fue modificada con éxito",
        "success"
      );
      limpiarFormulario();
    }
  });
}

function borrarTabla() {
  let tablaPeliculas = document.getElementById("tablaPeliculas");
  tablaPeliculas.innerHTML = "";
}
window.borrarPelicula = function (codigo) {
  Swal.fire({
    title: "Seguro que deseas eliminar este producto?",
    text: "La accion no se puede revertir!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar!",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      let nuevaListaPeliculas = listaPeliculas.filter(
        (itemPelicula) => itemPelicula.codigo !== codigo
      );

      listaPeliculas = nuevaListaPeliculas;
      guardarLocalStorage();
      borrarTabla();
      cargaInicial();
      Swal.fire(
        "Producto Eliminado!",
        "Su producto fue eliminado con exito",
        "success"
      );
    }
  });
};
