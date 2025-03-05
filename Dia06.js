let frutas = [];
let lacteos = [];
let dulces = [];

let nuevaFruta;
let nuevaLactosa;
let nuevoDulce;

function agregarLista() {
  while (confirm("¿Quieres agregar un producto?") === true) {

    alert("¿Qué categoría es tu producto?");

    let CaT = prompt("frutas[1], lácteos[2], dulces[3]");

    if (CaT == 1) {
      alert("Categoría: Frutas");
      nuevaFruta = prompt("Ingresa el nombre de una fruta:");
      frutas.push(nuevaFruta);
      console.log(frutas);
      alert("Frutas actualizadas: " + frutas.join(", "));
    }

    if (CaT == 2) {
      alert("Categoría: Lácteos");
      nuevaLactosa = prompt("Ingresa el nombre de un lácteo:");
      lacteos.push(nuevaLactosa);
      console.log(lacteos);
      alert("Lácteos actualizados: " + lacteos.join(", "));
    }

    if (CaT == 3) {
      alert("Categoría: Dulces");
      nuevoDulce = prompt("Ingresa el nombre del dulce:");
      dulces.push(nuevoDulce);
      console.log(dulces);
      alert("Dulces actualizados: " + dulces.join(", "));
    }
  }
}

function eliminarElemento(categoria) {
  let lista;
  if (categoria == 1) {
    lista = frutas;
  } else if (categoria == 2) {
    lista = lacteos;
  } else if (categoria == 3) {
    lista = dulces;
  }

  if (lista.length === 0) {
    console.log("No hay elementos en la lista para eliminar.");
    return;
  }

  let elementoEliminar = prompt("¿Cuál producto deseas eliminar? Escribe el nombre del producto.");
  let index = lista.indexOf(elementoEliminar);

  if (index !== -1) {
    lista.splice(index, 1); // Elimina el elemento
    console.log(`${elementoEliminar} ha sido eliminado de la lista.`);
    alert(`${elementoEliminar} ha sido eliminado.`);
  } else {
    console.log("¡No fue posible encontrar el producto en la lista!");
    alert("¡No fue posible encontrar el producto en la lista!");
  }
}

// Ejecuta la función para agregar productos
agregarLista();

// Al finalizar muestra las listas
console.log("Frutas:", frutas);
console.log("Lácteos:", lacteos);
console.log("Dulces:", dulces);
alert("Productos ingresados:\n" +
  "Frutas: " + frutas.join(", ") + "\n" +
  "Lácteos: " + lacteos.join(", ") + "\n" +
  "Dulces: " + dulces.join(", "));

// Opción para eliminar elementos después de ingresar productos
let eliminar = confirm("¿Quieres eliminar algún producto?");
if (eliminar) {
  let categoriaEliminar = prompt("¿De qué categoría deseas eliminar un producto? (1: Frutas, 2: Lácteos, 3: Dulces)");
  eliminarElemento(parseInt(categoriaEliminar));
}
