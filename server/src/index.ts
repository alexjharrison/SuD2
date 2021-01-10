import express from "express";
import path from "path";
import proxy from "express-http-proxy";
import { createServer } from "http";
import { Server } from "socket.io";
import { ioRouter } from "./io-router";

import { config } from "dotenv";
config();

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);
ioRouter(io);

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === "production") {
  // Serve static vue files if in production
  app.use(express.static(path.join(__dirname, "../../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
  });
} else {
  // Proxy vue dev server if in dev
  app.use("/", proxy("localhost:8080"));
}

httpServer.listen(`${PORT}`, () =>
  console.log(`SuD2 running at http://localhost:${PORT}`)
);
