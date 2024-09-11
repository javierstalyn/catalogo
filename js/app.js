import { login, logout } from "./helpers.js";

let logoutButton = document.getElementById("logOut");
let listaPeliculas = JSON.parse(localStorage.getItem("arrayPeliculas")) || [];

document.addEventListener("DOMContentLoaded", () => {
  login();
});

logoutButton.addEventListener("click", () => {
  logout();
});

const peliculas = [
  {
    codigo: "01",
    nombre: "Advengers",
    categoria: "ficcion",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    description:
      "Nick Fury, de S.H.I.E.L.D., forma un equipo para detener una amenaza global inesperada.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=PyakRSni-c0",
  },
  {
    codigo: "02",
    nombre: "Matrix",
    categoria: "ficcion",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description:
      "La serie narra las aventuras de Ariel como una sirena antes de los eventos de la película.",
    released: false,
    trailerLink:
      "https://www.youtube.com/watch?v=OM0tSTEQCQA&pp=ygUOdHJhaWxlciBtYXRyaXg%3D",
  },
  {
    codigo: "03",
    nombre: "Star Wars",
    categoria: "ficcion",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
    description:
      "Un variado grupo de rebeldes a bordo de la nave estelar Ghost se enfrenta al Imperio, enfrentando desafíos y luchando por la libertad.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=sGbxmsDFVnE",
  },
  {
    codigo: "04",
    nombre: "Avatar",
    categoria: "ficcion",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    description:
      "Se aborda la problemática que los persigue, las medidas que toman para protegerse mutuamente, las batallas que libran por sobrevivir y las tragedias que soportan.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=rjRVnVziU2A",
  },
  {
    codigo: "05",
    nombre: "Terminators",
    categoria: "ficcion",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7LV3sg3bJOGFD6J0gn7Wt1IL5SK.jpg",
    description:
      "Un pequeño grupo de combatientes de la resistencia lucha contra los cíborgs que han tomado el control del planeta.super héroes",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=DvDFA3eLzLc",
  },
  {
    codigo: "06",
    nombre: "La Sirenita",
    categoria: "infantil",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/32Tb6HZc8yAWqHesMSMnMozr6pi.jpg",
    description:
      "Producida por Walt Disney Television Animation, basada en la película de Disney de 1989 del mismo nombre. La serie narra las aventuras de Ariel como una sirena antes de los eventos de la película. Esta serie es la primera serie de televisión de Disney que se desprende de una película animada importante.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=ZGZX5-PAwR8",
  },
  {
    codigo: "07",
    nombre: "Jurassic",
    categoria: "ficcion",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
    description:
      "Cuatro años después de que Isla Nublar fuera destruida, los dinosaurios ahora viven, y cazan, junto a los humanos en todo el mundo. Este frágil equilibrio remodelará el futuro y determinará, de una vez por todas, si los seres humanos seguirán siendo los depredadores supremos en un planeta que ahora comparten con las criaturas más temibles de la historia.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=PyakRSni-c0",
  },
  {
    codigo: "08",
    nombre: "E.T",
    categoria: "ficcion",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/an0nD6uq6byfxXCfk6lQBzdL2J1.jpg",
    description: "super héroes",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=F8QgAwuxXtg",
  },
  {
    codigo: "09",
    nombre: "Interstellar",
    categoria: "accion",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "La aventura de un grupo de exploradores que utilizan un agujero de gusano recién descubierto para superar las limitaciones del viaje espacial humano y conquistar las vastas distancias involucradas en un viaje interestelar.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=UoSSbmD9vqc",
  },
  {
    codigo: "10",
    nombre: "Buscando a Nemo",
    categoria: "infantil",
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ggQ6o8X5984OCh3kZi2UIJQJY5y.jpg",
    description: "super héroes",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=SPHfeNgogVs",
  },
  {
    codigo: "11",
    nombre: "La era del hielo",
    categoria: "infantil",
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dfp1BZF7FxbBUyzHvMOI9t8NWDD.jpg",
    description:
      "Manny, Diego y Sid se embarcan en otra aventura después de que su continente se desplace. Utilizando un iceberg como barco, se encuentran con criaturas marinas y luchan contra piratas mientras exploran un nuevo mundo.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=SGluiIsL3Yk",
  },
  {
    codigo: "12",
    nombre: "Frozen",
    categoria: "infantil",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
    description:
      "La joven princesa Anna de Arendelle sueña con encontrar el verdadero amor en la coronación de su hermana Elsa. El destino la lleva en un peligroso viaje en un intento por poner fin al invierno eterno que ha caído sobre el reino. Está acompañada por el repartidor de hielo Kristoff, su reno Sven y el muñeco de nieve Olaf. En una aventura en la que descubrirá lo que realmente significan la amistad, el coraje, la familia y el amor verdadero",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=SPHfeNgogVs",
  },
  {
    codigo: "13",
    nombre: "Cars",
    destacada: false,
    categoria: "infantil",
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/abW5AzHDaIK1n9C36VdAeOwORRA.jpg",
    description:
      "Un automóvil de carreras novato y ambicioso, descubre que la vida se trata del viaje, no de la línea de meta, cuando se encuentra inesperadamente desviado en la tranquila ciudad de Radiator Springs, ubicada en la histórica Ruta 66.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=SbXIj2T-_uk&t=16s",
  },
  {
    codigo: "14",
    nombre: "Elemental",
    categoria: "infantil",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
    description:
      "En una ciudad donde conviven residentes de fuego, agua, tierra y aire, una joven apasionada y llena de energía y un chico tranquilo y adaptable descubrirán algo fundamental",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=7KIWqmLsJRM",
  },
  {
    codigo: "15",
    nombre: "A Star is Born",
    categoria: "romantico",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    description:
      "Dirigida por Bradley Cooper y protagonizada por Lady Gaga, esta película narra la historia de amor entre un músico en decadencia y una talentosa cantante en ascenso.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
  },
  {
    codigo: "16",
    nombre: "La La Land",
    categoria: "romantico",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    description:
      "Una película musical romántica que sigue la relación entre un pianista de jazz y una aspirante a actriz en Los Ángeles.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=45s24h98iOc",
  },
  {
    codigo: "17",
    nombre: "To All the Boys I've Loved Before",
    categoria: "romantico",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
    description:
      "Una comedia romántica adolescente que sigue la vida amorosa de una joven cuando sus cartas secretas de amor son expuestas.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=555oiY9RWM4",
  },
  {
    codigo: "18",
    nombre: "The Fault in Our Stars",
    categoria: "romantico",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ep7dF4QR4Mm39LI958V0XbwE0hK.jpg",
    description:
      "Basada en la novela de John Green, esta película cuenta la historia de dos adolescentes con cáncer que se enamoran.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=9ItBvH5J6ss",
  },
  {
    codigo: "19",
    nombre: "Crazy Rich Asians",
    categoria: "romantico",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg",
    description:
      "Una comedia romántica que sigue a una mujer que viaja a Singapur para conocer a la familia adinerada de su novio.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=ZQ-YX-5bAs0",
  },
  {
    codigo: "20",
    nombre: "Pretty Woman",
    categoria: "romantico",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iKaKr8aUqOy1aojENu5XuwBI8Uj.jpg",
    description:
      "Película romántica estadounidense dirigida por Garry Marshall y estrenada en 1990.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=y3FzXBkCUAg",
  },
  {
    codigo: "21",
    nombre: "The Continental",
    categoria: "accion",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/v1YEOdGptCyNxnc4mJSYNd4cE8E.jpg",
    description:
      "Un exasesino a sueldo busca venganza después de que roben su auto y maten a su perro, la última conexión con su difunta esposa.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=y3FzXBkCUAg",
  },
  {
    codigo: "22",
    nombre: "Kill Bill: Vol. 1",
    categoria: "accion",
    destacada: false,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    description:
      "Una ex asesina a sueldo despierta de un coma y busca venganza contra sus antiguos compañeros y su ex jefe.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=7kSuas6mRpk",
  },
  {
    codigo: "23",
    nombre: "Gladiator",
    categoria: "accion",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    description:
      "Un general romano es traicionado y su familia es asesinada. Se convierte en gladiador y busca venganza contra el emperador que lo traicionó.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=P5ieIbInFpg",
  },
  {
    codigo: "24",
    nombre: "Accion",
    categoria: "accion",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xTIohs08xedCORLIgOCDOZSpwVy.jpg",
    description:
      " Sigue la vida de Peter Dragon, un egocéntrico productor de cine de Hollywood que ha construido su carrera en base a los tres pilares de la industria del espectáculo: el nepotismo y la deshonestidad.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=5rp4hPVbW5U",
  },
  {
    codigo: "25",
    nombre: "Hangover",
    categoria: "accion",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    description:
      "Tras una fiesta de despedida de soltero, tres amigos buscan a su amigo desaparecido antes de una boda.",
    released: true,
    trailerLink:
      "https://www.youtube.com/watch?v=wnNgGp1KVWQ&pp=ygUVdHJhaWxlIHF1ZSBwYXNvIGF5ZXIg",
  },
  {
    codigo: "26",
    nombre: "Hangover II",
    categoria: "accion",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jrP9zmdSUpOzzUXpEqPqg3dryUr.jpg",
    description:
      "El equipo de Resacón en Tailandia va a Tailandia para la boda de Stu, pero las cosas no salen según lo planeado.",
    released: true,
    trailerLink:
      "https://www.youtube.com/watch?v=AbVRMX4E0bU&pp=ygUcdHJhaWxlIHF1ZSBwYXNvIGF5ZXIgUEFSVEUgMg%3D%3D",
  },
  {
    codigo: "27",
    nombre: "Hangover III",
    categoria: "accion",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vtxuPWkdllLNLVyGjKYa267ntuH.jpg",
    description:
      "Esta vez, no hay boda. Ni despedida de soltero. ¿Qué podría salir mal, verdad? Pero cuando el grupo de amigos se embarca, todo está en juego.",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=bFfsk98QPto",
  },
];
localStorage.setItem("arrayPeliculas", JSON.stringify(peliculas));
function guardarLocalStorage() {
  let peliculasGuardadas = localStorage.getItem("arrayPeliculas");
  let peliculas = peliculasGuardadas ? JSON.parse(peliculasGuardadas) : [];

  for (let i = 0; i < listaPeliculas.length; i++) {
    const nuevaPelicula = listaPeliculas[i];
    const alreadyExists = peliculas.some(
      (p) => p.codigo === nuevaPelicula.codigo
    );

    if (!alreadyExists) {
      peliculas.push(nuevaPelicula);
    }
  }

  localStorage.setItem("arrayPeliculas", JSON.stringify(peliculas));
}

guardarLocalStorage();

function cargarPeliculasPorCategoria(
  categoria,
  elementoActivo,
  elementoCarrusel
) {
  let elementosAgregadosAlActivo = 0;

  for (let i = 0; i < listaPeliculas.length; i++) {
    const pelicula = listaPeliculas[i];

    if (
      elementosAgregadosAlActivo < 5 &&
      pelicula.released &&
      pelicula.categoria.toLowerCase() === categoria.toLowerCase()
    ) {
      elementoActivo.innerHTML += `
       <a href="./pages/detallePelicula.html#${pelicula.codigo}" class="text-decoration-none">
         <img src="${pelicula.srcImage}" class="img-carrusel efectoFoto" alt="${pelicula.nombre}" />
       </a>
     `;
      elementosAgregadosAlActivo++;
    } else if (
      pelicula.released &&
      pelicula.categoria.toLowerCase() === categoria.toLowerCase()
    ) {
      elementoCarrusel.innerHTML += `
       <a href="./pages/detallePelicula.html#${pelicula.codigo}" class="text-decoration-none">
         <img src="${pelicula.srcImage}" class="img-carrusel efectoFoto" alt="${pelicula.nombre}" />
       </a>
     `;
    }
  }
}

cargarPeliculasPorCategoria(
  "ficcion",
  document.getElementById("carouselActive"),
  document.getElementById("carrusel")
);

cargarPeliculasPorCategoria(
  "infantil",
  document.getElementById("carouselActiveInfantil"),
  document.getElementById("carruselInfantil")
);

cargarPeliculasPorCategoria(
  "romantico",
  document.getElementById("carouselActiveRomantico"),
  document.getElementById("carruselRomantico")
);

cargarPeliculasPorCategoria(
  "accion",
  document.getElementById("carouselActiveAccion"),
  document.getElementById("carruselAccion")
);

const peliculaDestada = () => {
  let imgDestacada = document.getElementById("imgDestacada");
  let peliculaEstrella = listaPeliculas.find((item) => item.destacada === true);
  imgDestacada.innerHTML = `
 <div class="d-flex justify-content-center">
 <img
   src= ${peliculaEstrella.srcImage}
   class="card-img-top img-destacada"
   alt="pelicula destacada"
 />
 <a
   href=${peliculaEstrella.trailerLink}
   target="_blank"

 >
   <div class="btn-play">
     <i
       class="fa-regular fa-circle-play fa-5x"
       style="color: #ffffff"
     ></i></div
 ></a>
</div>
<div class="card-body container">
 <h5 class="card-title fw-semibold">${peliculaEstrella.nombre} </h5>
 <p class="card-text">
  ${peliculaEstrella.description}
 </p>

 <a
   href="https://www.youtube.com/watch?v=4HOrjGQhpV4"
   target="_blank"
   ><button class="btn btn-reproducir">Reproducir</button></a
 >
</div>
 `;
};

peliculaDestada();
