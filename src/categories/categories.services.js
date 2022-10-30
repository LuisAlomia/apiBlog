const categoryControllers = require("./categories.controllers");

const getAllCategoryServices = (req, resp) => {
  categoryControllers
    .getAllCategory()
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getCategoryByIdServices = (req, resp) => {
  const { id } = req.params;

  categoryControllers
    .getCategoryById(id)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteCategoryServices = (req, resp) => {
  const { id } = req.params;

  categoryControllers
    .deleteCategory(id)
    .then((data) => {
      data
        ? resp.status(204)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const createCategoryServices = (req, resp) => {
  const { name } = req.body;

  categoryControllers
    .createCategory({ name })
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const patchCategoryServices = (req, resp) => {
  const { id } = req.params;
  const { name } = req.body;

  categoryControllers
    .updateCategory(id, { name })
    .then((data) => {
      data[0]
        ? resp.status(200).json({ message: `Update Record` })
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = {
  patchCategoryServices,
  createCategoryServices,
  getAllCategoryServices,
  deleteCategoryServices,
  getCategoryByIdServices,
};
