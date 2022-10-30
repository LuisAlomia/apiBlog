const postControllers = require("./posts.controllers");
const { prevPage, nextPage } = require("../utils/paginations");

const getAllPostServices = (req, resp) => {
  const offset = Number(req.query.offset) || 0;
  const limit = Number(req.query.limit) || 10;

  postControllers
    .getAllPost(offset, limit)
    .then((data) => {
      resp.status(200).json({
        count: data.count,
        offset,
        limit,
        next: nextPage(data.count, offset, limit),
        prev: prevPage(offset, limit),
        data: data.rows,
      });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getPostByIdServices = (req, resp) => {
  const { id } = req.params;

  postControllers
    .getPostById(id)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getMyPostServices = (req, resp) => {
  const id = req.user.id;

  postControllers
    .getMyPost(id)
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getPostByCategoryServices = (req, resp) => {
  const { id } = req.params;

  postControllers
    .getPostByCategory(id)
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deletePostServices = (req, resp) => {
  const { id } = req.params;

  postControllers
    .deletePost(id)
    .then((data) => {
      data
        ? resp.status(204)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const createPostServices = (req, resp) => {
  const { title, content, categoryId } = req.body;
  const userId = req.user.id;

  postControllers
    .createPost({ title, content, userId, categoryId })
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const patchPostServices = (req, resp) => {
  const { id } = req.params;
  const { title, content, categoryId } = req.body;

  postControllers
    .updatePost(id, { title, content, categoryId })
    .then((data) => {
      data[0]
        ? resp.status(200).json({ message: `Update Record` })
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = {
  patchPostServices,
  createPostServices,
  getAllPostServices,
  deletePostServices,
  getPostByIdServices,
  getMyPostServices,
  getPostByCategoryServices,
};
