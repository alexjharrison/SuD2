const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const proxy = require("express-http-proxy");
require("dotenv").config();
require("./io-router")(io);

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === "production") {
  // Serve static vue files if in production
  app.use("/", express.static(path.join(__dirname, "../client/dist")));
} else {
  // Proxy vue dev server if in dev
  app.use("/", proxy("localhost:8080"));
}

http.listen(`${PORT}`, () => console.log(`Listening at ${PORT}`));
