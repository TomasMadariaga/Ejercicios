let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let operacion = document.getElementById("operacion");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  /*let resultado = 0;
  let num1: number = Number(numero1.value);
  let num2: number = Number(numero2.value);
 let accion: number = Number(operacion.value);
  let linea: string = "-";

  for (let i: number = 0; i <= 40; i++) {
    linea = linea + "-";
  }

  if (accion === 1) {
    resultado = num1 + num2;
  } else if (accion === 2) {
    resultado = num1 - num2;
  } else {
    console.log("La opcion es incorrecta");
  }
 console.log(linea);
  console.log("El resultado es  ", resultado);
  console.log(linea);
});
*/
  let num1: number = Number(numero1.value);
  let num2: number = Number(numero2.value);
  let accion: number = Number(operacion.value);

let calcularResultado = (dato1:number, dato2:number, opcion:number) => {

  let resultado : number = 0
 if (opcion == 1) {
  resultado = dato1 + dato2
 }else if (opcion == 2) {
   resultado = dato1 - dato2
 }else {
   console.log("Opcion incorrecta")
 }
 
    return resultado

}

console.log(calcularResultado(num1, num2, accion))


