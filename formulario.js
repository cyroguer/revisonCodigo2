const formulario = document.querySelector("#form")// en el html estaba como class
//cambiar variables var por const o let
formulario.onsubmit = function(event) {

  event.preventDefault(); // corregido a preventDefault()
  
  const name = formulario.elements[0]//n ->name
  const age = formulario.elements[1]//e ->edad
  const nation = formulario.elements[2]// na - nation

  const nombre = name.value;//falto cerrar sentencia con ;
  const edad = age.value; //falto cerrar sentencia con ;
  const i = nacionalidad.selectedIndex;//falto cerrar sentencia con ; se cambio na por nacional
  const nacionalidad = nation.options[i].value;//falto cerrar sentencia con ;
  

  console.log(nombre, edad);//falto cerrar sentencia con ;
  console.log(nacionalidad);//falto cerrar sentencia con ;

  if (nombre.length === 0) {
    name.classList.add("error");// cambie n por name y cerrar sentencia
  }
  if (edad < 18 || edad > 120) {
    age.classList.add("error");// cambie e por age y cerrar sentencia
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);// cerrar sentencia ;
  }
}

const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");

document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

const lista = document.getElementById("lista-de-invitados")

const elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");//secambio added por add
lista.appendChild(elementoLista);

var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
//var espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
//elementoLista.appendChild(espacio); inecesario

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}
//hasta aqui llegue :c
crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}