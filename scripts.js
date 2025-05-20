// Animación del visualizador de audio
const visualizador = document.getElementById("visualizador-audio");
const audio = document.getElementById("audioPlayer");

const crearBarras = () => {
  for (let i = 0; i < 40; i++) {
    const barra = document.createElement("div");
    barra.classList.add("barra");
    visualizador.appendChild(barra);
  }
};

const animarBarras = () => {
  const barras = document.querySelectorAll(".barra");
  barras.forEach((barra) => {
    const altura = Math.random() * 100;
    barra.style.height = `${altura}%`;
  });
};

crearBarras();

let intervaloAnimacion;

audio.addEventListener("play", () => {
  intervaloAnimacion = setInterval(animarBarras, 200);
});

audio.addEventListener("pause", () => {
  clearInterval(intervaloAnimacion);
});

audio.addEventListener("ended", () => {
  clearInterval(intervaloAnimacion);
});

// Lógica del formulario
const formulario = document.getElementById("formulario-contacto");
const respuesta = document.getElementById("respuesta-formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  respuesta.textContent = "Gracias por tu mensaje. ¡Te contactaremos pronto!";
  formulario.reset();
});

// Función para reproducir canciones o stream
function reproducirCancion(ruta) {
  audio.pause();
  audio.src = ruta;
  audio.load();
  audio.play().catch((error) => {
    console.error("No se pudo reproducir:", error);
  });
}

// Reproducir Mix Radio en Vivo
document.getElementById("boton-radio-en-vivo").addEventListener("click", () => {
  const boton = document.getElementById("boton-radio-en-vivo");
  const streamURL = boton.getAttribute("stream");
  reproducirCancion(streamURL);
});

// Reproducir canciones individuales
const botonesCanciones = document.querySelectorAll(".reproducir");
botonesCanciones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const rutaCancion = boton.getAttribute("data-src");
    reproducirCancion(rutaCancion);
  });
});
