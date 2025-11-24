import http from "http";
import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import { format } from "date-fns";

//configure dotenv package

dotenv.config();

//initialization of express

const app = express();

//express default middleware

app.use(express.json()); // used to access the body content/payload from the request or client

// port to run the server

const port = process.env.PORT || 5000;

//Default route to avoid cannot get

app.get("/", (req, res) => {
  res
    .status(200)
    .send(`<h1 style="text-align:center;">Welcome to Backend </h1>`);
});

//create a server using http & nodejs
/*
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("Hey all Welcome to the backend");
    res.end();
  })
  .listen(port, () => {
    console.log(`server is started and running on the port `);
  });
*/

//API to access the filesystem and perform operations

app.get("/file", (req, res) => {
  let today = format(new Date(), "dd-MM-yyyy-HH-mm-ss");
  //console.log(today);
  const filepath = `TimeStamps/${today}`;
  fs.writeFileSync(filepath, `${today}`, "utf-8");
  let data = fs.readFileSync(filepath, "utf-8");
  try {
    res.status(200).send(data);
  } catch (error) {
    res.status(503).json({ message: "Failed To Create A File" });
  }
});

app.listen(port, () => {
  console.log("server started");
});
