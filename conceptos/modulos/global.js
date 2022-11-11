console.log(process);
console.log(__dirname);

let i = 0;

let intervalo = setInterval(() => {
  console.log("HOla");
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
});

setImmediate(() => {
  console.log("inmediatamente");
});
