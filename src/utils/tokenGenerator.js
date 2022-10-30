const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/env.config");

const tokenGenerator = (id, name, role) => {
  return jwt.sign({ id, name, role }, jwtSecret);
};

module.exports = tokenGenerator;
