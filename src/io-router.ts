const ioRouter = (io) => {
  io.on("connection", () => {
    console.log("poooooop");
  });
};

module.exports = ioRouter;
