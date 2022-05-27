let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let datoExtraido1: number = Number(dato1.value);
  let datoExtraido2: number = Number(dato2.value);
  let precioConDescuento: number = Number(dato2.value) * 0.85;

  if (datoExtraido1 == 9) {
    console.log("Felicidades! Tiene un descuento de 15%");
    console.log(precioConDescuento);
  } else {
    console.log("Usted no tiene ningun descuento");
    console.log(datoExtraido2);
  }
});
