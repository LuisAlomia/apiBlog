const { Sequelize } = require("sequelize");
const config = require("./env.config");

const sequelizeDB = new Sequelize({
  username: config.db.username,
  password: config.db.password,
  host: config.db.host,
  database: config.db.nameDB,
  dialect: "postgres",
});

const dataBaseInit = () => {
  sequelizeDB
    .authenticate()
    .then((resp) => console.log("Sequelize Authenticate"))
    .catch((err) => console.log(err));

  sequelizeDB
    .sync()
    .then((resp) => console.log("Sequelize Synced"))
    .catch((err) => console.log(err));
};

module.exports = { dataBaseInit, sequelizeDB };
