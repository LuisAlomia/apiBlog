const authControllers = require("./auth.controllers");

const loginServices = (req, resp) => {
  const { email, password } = req.body;

  authControllers
    .loginUser(email, password)
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const registerUsersServices = (req, resp) => {
  const { name, email, password } = req.body;

  authControllers
    .registerUser({ name, email, password })
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = { loginServices, registerUsersServices };
