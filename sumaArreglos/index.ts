let vectores1: number[] = new Array(6);
let nro1: number;
let indice1: number;
for (indice1 = 0; indice1 < 6; indice1++) {
  nro1 = Number(prompt("Ingrese los primeros numeros a sumar ", indice1));
  vectores1[indice1] = nro1;
}

let vectores2: number[] = new Array(6);
let nro2: number;
let indice2: number;
for (indice2 = 0; indice2 < 6; indice2++) {
  nro2 = Number(prompt("Ingrese los segundos numeros a sumar", indice2));
  vectores2[indice2] = nro2;
}

let resultadoVectores: number[] = new Array(6);
let indice3: number;
for (indice3 = 0; indice3 < 6; indice3++) {
  resultadoVectores[indice3] = vectores1[indice3] + vectores2[indice3];
  console.log("El resultado es", resultadoVectores[indice3]);
}
