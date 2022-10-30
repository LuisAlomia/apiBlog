const uuid = require("uuid");
const Users = require("../models/users.model");
const tokenGenerator = require("../utils/tokenGenerator");
const { hashPassword, comparePassword } = require("../utils/hashed");

const registerUser = async (data) => {
  const newUser = await Users.create({
    id: uuid.v4(),
    name: data.name,
    email: data.email,
    password: hashPassword(data.password),
  });
  return newUser;
};

const loginUser = async (email, password) => {
  const user = await Users.findOne({ where: { email, status: "active" } });

  if (user === null) return `Invalid Credentials`;

  const userValid = comparePassword(password, user.password);

  return userValid
    ? tokenGenerator(user.id, user.name, user.role)
    : `Invalid Credentials`;
};

module.exports = { registerUser, loginUser };
