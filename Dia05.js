let frutas = [];
let lacteos = [];
let dulces = [];

let nuevaFruta;
let nuevaLactosa;
let nuevoDulce;

function agregarLista() {
while ( confirm("Quieres agregar un producto?") === true){

       alert(" que categoria es tu productor ")

        let CaT = prompt("frutas[1], lacteos[2], dulces[3]")

            if(CaT == 1){
               alert("Categoria: Frutas");
              nuevaFruta = prompt("Ingresa el nombre de una fruta:");

               frutas.push(nuevaFruta);
               console.log(frutas);

               alert("Frutas actualizadas: " + frutas.join(", "));
           }

           if(CaT == 2){
                alert("Categoria: lactosa");
                nuevaLactosa = prompt("Ingresa el nombre de una fruta:")

                lacteos.push(nuevaLactosa);
                console.log(lacteos);

                alert("Lacteos actualizadas: " + lacteos.join(", "));
           }
           if(CaT == 3){
                alert("Categoria: Dulces");
                nuevoDulce = prompt("Ingresa el nombre del dulce")

                dulces.push(nuevoDulce);
                console.log(dulces);

                alert("Dulces actualizados:" + dulces.join(", "))
           }

    }

}
agregarLista();

//Cuando el usuario cancele el bucle imprima todas las listas
console.log("Frutas:", frutas);
console.log("Lácteos:", lacteos);
console.log("Dulces:", dulces);

alert("Productos ingresados:\n" +

      "Frutas: " + frutas.join(", ") + "\n" +

      "Lácteos: " + lacteos.join(", ") + "\n" +

      "Dulces: " + dulces.join(", "));


      