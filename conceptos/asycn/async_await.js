async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola, ${nombre}`);
      resolve(nombre);
      reject("No sé qué paso");
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bla bla bla bla...`);
      resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adiós, ${nombre}`);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("Jakepys");
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Terminamos el proceso");
}

console.log("Empezamos el proceso");
main();
console.log("No me bloqueo porque async no bloque el hilo principal");
