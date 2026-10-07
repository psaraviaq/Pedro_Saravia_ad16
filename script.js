//* Tarea 1

const botonEstilo = document.getElementById("botonEstilo");
const parrafo = document.getElementById("parrafo");

botonEstilo.addEventListener("click", () => {
  parrafo.style.fontFamily = "Comic Sans MS";
  parrafo.style.fontSize = "24px";
  parrafo.style.color = "#d63384";
});

//* Tarea 2

const form1 = document.getElementById("form1");

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  const formulario = event.currentTarget;
  console.log(formulario.elements.fname.value);
  console.log(formulario.elements.lname.value);
});

//* Tarea 3

const botonEnlaces = document.getElementById("botonEnlaces");

botonEnlaces.addEventListener("click", () => {
  const enlaces = document.querySelectorAll("a");
  alert(
    `Total de enlaces: ${enlaces.length}\n` +
      `Primer enlace: ${enlaces[0].href}\n` +
      `Último enlace: ${enlaces[enlaces.length - 1].href}`,
  );
});

//* Tarea extra

const contenedor = document.getElementById("contenedor");
const elementosSegundo = document.querySelectorAll(".segundo");
const tercerElementoDeLista = document.querySelector("ol .tercero");

contenedor.textContent = "¡Hola!";

const footer = document.querySelector(".footer");
footer.classList.add("principal");
footer.classList.remove("principal");

const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "cuatro";
const lista = contenedor.querySelector("ul");
lista.append(nuevoElemento);

contenedor.append(lista);
