import { login, logout } from "./helpers.js";

function getCodigoPeliculaFromHash() {
    const hash = location.hash;
    console.log(hash);
    return hash.substring(1);
  }
  const codigoPelicula = getCodigoPeliculaFromHash();
  
  let listaPeliculas = JSON.parse(localStorage.getItem("arrayPeliculas")) || [];
  
  const detallePelicula = () => {
    let detallePelicula = document.getElementById("detallePelicula");
    let pelicula = listaPeliculas.find((item) => item.codigo === codigoPelicula);
  
    detallePelicula.innerHTML = `
  <h1 class="text-center display-3 pt-4">Detalles de la pelicula</h1>
                <hr />
                <article class="row py-2">
                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <h2>${pelicula.nombre}</h2>
                    <p class="lead">
                      Original de <span class="fw-bold">RollingMovies+</span>
                    </p>
                    <p class="pt-4">
                      <span class="text-success fw-bold">85% para ti</span> | 2016. 1hs
                      28 min
                    </p>
                    <p>
                      ${pelicula.description}
                    </p>
                    <button class="btn btn-reproducir px-4 mb-5 text-center"><i class="fa-solid fa-play" style="color: #ffffff;"></i><a href="${pelicula.trailerLink}" target="_blank"> Reproducir</a>
                    </button>
                  </div>
                  <div class="col-sm-12 col-md-6 col-lg-6">
                    <div class="d-flex justify-content-center"> <img
                      src=${pelicula.srcImage}
                      class="w-50"
                    /></div>
  
                  </div>
                </article>`;
  };
  
  detallePelicula();
  document.addEventListener("DOMContentLoaded", ()=>{
    login()
  });
  
  
  const logoutButton = document.getElementById("logOut"); 
  logoutButton.addEventListener("click", ()=>{
    logout()
  });
