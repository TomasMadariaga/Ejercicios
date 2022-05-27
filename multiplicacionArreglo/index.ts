let dimensionArreglo: number = Number(
  prompt("Ingrese la dimension del arreglo")
);
let arreglo1: number[] = new Array(dimensionArreglo);
let arreglo2: number[] = new Array(dimensionArreglo);

let cargarArreglo = (vector: number[], cantidad: number): number[] => {
  for (let indice: number = 0; indice < cantidad; indice++) {
    vector[indice] = Number(
      prompt("Ingrese el valor para la posicion " + indice)
    );
  }
  return vector;
};

let multiplicarArreglo = (
  vector1: number[],
  vector2: number[],
  cantidad: number
): number[] => {
  let multiplicacion: number[] = new Array(cantidad);
  for (let indice: number = 0; indice < cantidad; indice++) {
    multiplicacion[indice] = vector1[indice] * vector2[indice];
  }
  return multiplicacion;
};

cargarArreglo(arreglo1, dimensionArreglo);
cargarArreglo(arreglo2, dimensionArreglo);

multiplicarArreglo(arreglo1, arreglo2, dimensionArreglo);
console.log(
  "El resultado de la multiplicacion es " +
    multiplicarArreglo(arreglo1, arreglo2, dimensionArreglo)
);
