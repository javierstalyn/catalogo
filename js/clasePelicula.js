export class Pelicula{
  constructor(
    codigo,
    nombre,
    categoria,
    description,
    srcImage,
    destacada,
    released,
    trailerLink
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.categoria = categoria;
    this.description = description;
    this.srcImage = srcImage;
    this.destacada = destacada;
    this.released = released;
    this.trailerLink = trailerLink;
  }

  get mostrarCodigo() {
    return this.codigo;
  }
  get mostrarNombre() {
    return this.nombre;
  }
  get mostrarCategoria() {
    return this.categoria;
  }

  get mostrarDestacada() {
    return this.destacada;
  }
  get mostrarSrcImage() {
    return this.srcImage;
  }
  get mostrarDescription() {
    return this.description;
  }
  get mostrarReleased() {
    return this.released;
  }
  get mostrarTrailerLink() {
    return this.trailerLink;
  }
  set modificarCodigo(nuevoCodigo) {
    this.codigo = nuevoCodigo;
  }
  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
  set modificarCategoria(nuevoCategoria) {
    this.categoria = nuevoCategoria;
  }
  set modificarDestacada(nuevoDestacada) {
    this.destacada = nuevoDestacada;
  }
  set modificarSrcImage(nuevoSrcImage) {
    this.srcImage = nuevoSrcImage;
  }
  set modificarDescription(nuevaDescription) {
    this.description= nuevaDescription;
  }
  set modificarReleased(nuevaReleased) {
    this.released = nuevaReleased;
  }
  set modificarTrailerLink(nuevaTrailerLink) {
    this.trailerLink = nuevaTrailerLink;
  }
}
