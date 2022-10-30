const { DataTypes } = require("sequelize");
const { sequelizeDB } = require("../config/db.config");

const Users = sequelizeDB.define("User", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: "is_verified",
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

module.exports = Users;
