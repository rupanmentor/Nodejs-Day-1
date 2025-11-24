import http from "http";

// port to run the server

const port = 5000;

//create a server using http & nodejs

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("Hello Welcome to backend");
    res.end();
  })
  .listen(port, () => {
    console.log(`server is started and running on the port ${port}`);
  });
