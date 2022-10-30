const uuid = require("uuid");
const Users = require("../models/users.model");
const Categories = require("../models/categories.model");
const Posts = require("../models/posts.model");

const getAllPost = async (offset, limit) => {
  const data = await Posts.findAndCountAll({
    offset: offset,
    limit: limit,
    include: [
      {
        model: Users,
      },
      {
        model: Categories,
      },
    ],
  });
  return data;
};

const getMyPost = async (id) => {
  const data = await Posts.findAll({ where: { createdBy: id } });
  return data;
};

const getPostByCategory = async (id) => {
  const data = await Posts.findAll({ where: { categoryId: id } });
  return data;
};

const getPostById = async (id) => {
  const data = await Posts.findOne({ where: { id } });
  return data;
};

const deletePost = async (id) => {
  const data = await Posts.destroy({ where: { id } });
  return data;
};

const createPost = async (data) => {
  const newPost = await Posts.create({
    id: uuid.v4(),
    title: data.title,
    content: data.content,
    userId: data.userId,
    categoryId: data.categoryId,
  });
  return newPost;
};

const updatePost = async (id, data) => {
  const updatePost = await Posts.update(data, { where: { id } });
  return updatePost;
};

module.exports = {
  getAllPost,
  getPostById,
  deletePost,
  createPost,
  updatePost,
  getMyPost,
  getPostByCategory,
};
