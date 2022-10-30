const { check } = require("express-validator");
const validateResult = require("../middlewares/handleValidator.middleware");

const validateById = [
  check("id").exists().notEmpty().isUUID(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateRegisterUser = [
  check("name").exists().notEmpty().isString(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validatePatchUser = [
  check("id").exists().notEmpty().isUUID(),
  check("isVerified").optional().notEmpty().trim().isBoolean(),
  check("role").optional().notEmpty().trim().isString(),
  check("status").optional().notEmpty().trim().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validatePatchMyUser = [
  check("name").optional().notEmpty().trim().isString(),
  check("password").optional().notEmpty().trim().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateLogin = [
  check("email").exists().notEmpty().trim().isEmail(),
  check("password").exists().notEmpty().trim().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateCreateCategory = [
  check("name").exists().notEmpty().trim().isString(),
];

const validateCreatePost = [
  check("id").exists().notEmpty().isUUID(),
  check("title").exists().notEmpty().isString(),
  check("content").exists().notEmpty().isString(),
  check("userId").exists().notEmpty().isUUID(),
  check("categoryId").exists().notEmpty().isInt(),
];

const validatePatchPost = [
  check("id").exists().notEmpty().isUUID(),
  check("title").optional().notEmpty().isString(),
  check("content").optional().notEmpty().isString(),
  check("categoryId").optional().notEmpty().isInt(),
];

module.exports = {
  validateById,
  validateRegisterUser,
  validatePatchUser,
  validateLogin,
  validatePatchMyUser,
  validateCreateCategory,
  validateCreatePost,
  validatePatchPost,
};
