let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let datoExtraido: number = Number(dato.value);
  let aumento1: number = Number(dato.value) * 1.2;
  let aumento2: number = Number(dato.value) * 1.1;
  let aumento3: number = Number(dato.value) * 1.05;

  if (datoExtraido < 15000) {
    console.log("Felicidades!! Recibiste un aumento");
    console.log(aumento1);
  } else if (datoExtraido > 15001 && datoExtraido < 20000) {
    console.log("Felicidades!! Recibiste un aumento");
    console.log(aumento2);
  } else if (datoExtraido > 20001 && datoExtraido < 25000) {
    console.log("Felicidades!! Recibiste un aumento");
    console.log(aumento3);
  } else if (datoExtraido > 25001) {
    console.log("No recibiste ningun aumento");
    console.log(datoExtraido);
  }
});
