let nombreUsuario = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let contrasena: string;
  let contador: number = 1;

  while (contador <= 3 && contrasena !== "Eureka") {
    contador = contador + 1;
    contrasena = prompt("Ingrese la contrasena");

    if (contrasena === "Eureka") {
      console.log("Contrasena correcta");
    } else {
      console.log("Contrasena incorrecta");
    }
  }
});
