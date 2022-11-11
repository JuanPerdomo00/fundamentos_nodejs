const os = require("os");

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());
console.log(os.constants);

function kb(bytes) {
  const SIZE = 1024; // 1024
  return bytes / SIZE;
}
function mb(bytes) {
  const SIZE = 1024; // 1024
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  const SIZE = 1024; // 1024
  return mb(bytes) / SIZE;
}

const byte = os.freemem();

console.log("byte: ", os.freemem());
console.log("kilobyte:", kb(byte));
console.log("megabyte:", mb(byte));
console.log("gigabyte:", gb(byte));

console.log("memory free:", gb(os.totalmem()));

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.networkInterfaces());
