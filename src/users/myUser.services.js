const userControllers = require("./users.controllers");

const getMyUser = (req, resp) => {
  const { id } = req.user;

  userControllers
    .getUserById(id)
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteMyUser = (req, resp) => {
  const { id } = req.user;

  userControllers
    .updateUser(id, { status: "inactive" })
    .then((data) => resp.status(204))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const patchMyUser = (req, resp) => {
  const { id } = req.user;
  const { name, password } = req.body;

  userControllers
    .updatePasswordUser(id, { name, password })
    .then((data) => resp.status(200).json({ message: `Update Record` }))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = { getMyUser, deleteMyUser, patchMyUser };
