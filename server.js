const http = require("http");
const fs = require('fs').promises;
const host = 'localhost';
const port = 8000;

let indexFile;

const requestListener = function (req, res) {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(indexFile);
      break;
    case "/bundle.js":
      fs.readFile(__dirname + "/public/bundle.js")
      .then(contents => {
        res.setHeader("Content-Type", "text/javascript");
        res.writeHead(200);
        res.end(contents);
      })
      .catch(err => {
        res.writeHead(500);
        res.end(err);
      });
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({error:"Resource not found"}));
  }
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/public/index.html")
.then(contents => {
  indexFile = contents;
  server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
})
.catch(err => {
  console.error(`Could not read index.html file: ${err}`);
  process.exit(1);
});