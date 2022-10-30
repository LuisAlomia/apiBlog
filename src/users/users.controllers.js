const Users = require("../models/users.model");
const { hashPassword } = require("../utils/hashed");

const getAllUsers = async () => {
  const data = await Users.findAll({});
  return data;
};

const getUserById = async (id) => {
  const data = await Users.findOne({ where: { id, status: "active" } });
  return data;
};

const daleteUser = async (id) => {
  const data = await Users.destroy({ where: { id } });
  return data;
};

const updateUser = async (id, data) => {
  const updateData = await Users.update(data, { where: { id } });
  return updateData;
};

const updatePasswordUser = async (id, data) => {
  const newData = {
    name: data.name,
    password: hashPassword(data.password),
  };
  const updateData = await Users.update(newData, { where: { id } });
  return updateData;
};

module.exports = {
  getAllUsers,
  getUserById,
  daleteUser,
  updateUser,
  updatePasswordUser,
};
