const http = require("http");

const server = http.createServer(function (req, res) {
  switch (req.url) {
    case "/9":
      res.write(`respondo desde la url: ${req.url}`);
      res.end();
      break;

    default:
      res.write(`respondo por default ${req.url}`);
      res.end();
      break;
  }
});

server.listen(8080, () => {
  console.log("port in 8080");
});
