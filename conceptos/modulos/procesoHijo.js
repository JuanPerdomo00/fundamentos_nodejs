const { exec, spawn } = require("child_process");

async function listarConExect(comando) {
  await exec(comando, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return 1;
    }
    console.log(stdout);
    console.log("============================================");
  });
}

async function listarConSpanw(comando, arrOpt) {
  let proceso = await spawn(comando, arrOpt);

  console.log(proceso.pid);

  console.log(proceso.connected);

  await proceso.stdout.on("data", (data) => {
    console.log(data.toString());
  });
}

listarConExect("ls");
listarConSpanw("ls", ["-lah"]);
