import http from "http";
import dotenv from "dotenv";

//configure dotenv package

dotenv.config();

// port to run the server

const port = process.env.PORT || 5000;

//create a server using http & nodejs

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("Hey all Welcome to the backend");
    res.end();
  })
  .listen(port, () => {
    console.log(`server is started and running on the port ${port}`);
  });
