const { port } = require("./config/env.config");
const app = require("./app");
const { dataBaseInit } = require("./config/db.config");
const initModels = require("./models/initModels.models");

const serverInit = () => {
  app.listen(port, () => {
    console.log(`Init Server in port: ${port}`);
  });

  dataBaseInit();

  initModels();
};

serverInit();
