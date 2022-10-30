const Categories = require("../models/categories.model");

const getAllCategory = async () => {
  const data = await Categories.findAll({});
  return data;
};

const getCategoryById = async (id) => {
  const data = await Categories.findOne({ where: { id } });
  return data;
};

const deleteCategory = async (id) => {
  const data = await Categories.destroy({ where: { id } });
  return data;
};

const createCategory = async (data) => {
  const newCategory = await Categories.create({ name: data.name });
  return newCategory;
};

const updateCategory = async (id, data) => {
  const updateCategory = await Categories.update(data, { where: { id } });
  return updateCategory;
};

module.exports = {
  getAllCategory,
  getCategoryById,
  deleteCategory,
  createCategory,
  updateCategory,
};
