let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnviar = document.getElementById("enviar");

let calcularPotencia = (base: number, exponente: number): number => {
  let resultado: number = 1;
  if (base === 0) {
    resultado = 1;
  } else
    for (let i: number = 1; i <= exponente; i++) {
      resultado = resultado * base;
    }
  return resultado;
};

btnEnviar.addEventListener("click", () => {
  let numeroBase: number = Number(dato1.value);
  let exp: number = Number(dato2.value);
  console.log("La potencia es: ", calcularPotencia(numeroBase, exp));
});
