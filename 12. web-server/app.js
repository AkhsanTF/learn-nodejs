const http = require("http");
const fs = require("fs");

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error : file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const url = req.url;

    if (url === "/about") {
      renderHTML("/about", res);
    } else if (url === "/contact") {
      res.write("<h1>This is a contact page</h1>");
      res.end();
    } else {
      //   res.write("hello world!");
      renderHTML("./index.html", res);
    }
  })
  .listen(3000, () => {
    console.log("Listening on port 3000...");
  });
