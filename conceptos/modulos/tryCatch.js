function otraFunc() {
  seRompe();
}

function seRompe() {
  return a + 3;
}

function seRompeAsync(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Error en la funcion Async Await");
      cb(error);
    }
  }, 1000);
}

try {
  seRompeAsync((err) => {
    console.log("Hay un error");
    console.error(err.menssage);
  });
} catch (error) {
  console.error("Error, algo se ha roto");
  console.error(error);
  console.error("No pasa nada, lo hemos controlado");
}

console.log("Aqui se termina");
