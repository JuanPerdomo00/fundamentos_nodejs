let saludo = process.env.NOMBRE ?? "anonymous"
let web = process.env.WEB ?? "No tengo web"
console.log(`Hola: ${saludo}`)
console.log(`Tu web es: ${web}`)
