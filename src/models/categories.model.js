const { DataTypes } = require("sequelize");
const { sequelizeDB } = require("../config/db.config");

const Categories = sequelizeDB.define(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Categories;
