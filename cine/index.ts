let cantButacas: number = Number(prompt("Ingrese la cantidad de butacas"));
let butacas: boolean[] = new Array(cantButacas);

let butacasDesocupadas: number = 0;
for (let indice: number = 0; indice < cantButacas; indice++) {
  butacas[indice] = Boolean(
    prompt("La butaca " + (indice + 1) + "esta ocupada? (Vacio = No)")
  );
  if (butacas[indice] === false) {
    butacasDesocupadas++;
  }
}
console.log("Hay " + butacasDesocupadas + " butacas desocupadas");
