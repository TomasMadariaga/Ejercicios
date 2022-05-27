let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let datoExtraido: number = Number(dato.value);

  if (datoExtraido > 20) {
    console.log("El numero es mayor a 20");
  } else console.log("El numero es menor a 20");
});
