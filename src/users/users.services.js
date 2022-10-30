const usersController = require("./users.controllers");

const getAllUsersServices = (req, resp) => {
  usersController
    .getAllUsers()
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getUserByIdServices = (req, resp) => {
  const { id } = req.params;

  usersController
    .getUserById(id)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteUserServices = (req, resp) => {
  const { id } = req.params;

  usersController
    .daleteUser(id)
    .then((data) => {
      data
        ? resp.status(204)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const patchUserServices = (req, resp) => {
  const { id } = req.params;
  const { role, status, isVerified } = req.body;

  usersController
    .updateUser(id, { role, status, isVerified })
    .then((data) => {
      data[0]
        ? resp.status(200).json({ message: `Update Record` })
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = {
  getAllUsersServices,
  getUserByIdServices,
  patchUserServices,
  deleteUserServices,
};
