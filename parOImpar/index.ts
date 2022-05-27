let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let datoExtraido: number = Number(dato.value);

  if (datoExtraido % 2 == 0) {
    console.log("El numero es par");
  } else if (datoExtraido % 3 == 1) {
    console.log("El numero es impar");
  }
});
