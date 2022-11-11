function hola(nombre, callback) {
  setTimeout(function() {
    console.log(`Hola ${nombre}`)
    callback();
  }, 1000);
  
}


function adios(nombre, callback) {
  setTimeout(function() {
    console.log(`Adios ${nombre}`)
    callback()
  }, 1000); 
}

console.log("Iniciando proceso")
hola("alex", function() {
  adios("alex", function() {
    console.log("terminando proceso ....");
  });
});