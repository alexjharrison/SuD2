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

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === "production") {
  // Serve static vue files if in production
  app.use("/", express.static(path.join(__dirname, "../client/dist")));
} else {
  // Proxy vue dev server if in dev
  app.use("/", proxy("localhost:8080"));
}

httpServer.listen(`${PORT}`, () => console.log(`Listening at ${PORT}`));
