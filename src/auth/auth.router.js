const router = require("express").Router();
const authServices = require("./auth.services");
const {
  validateLogin,
  validateRegisterUser,
} = require("../validator/validator");

router
  .post("/login", validateLogin, authServices.loginServices)
  .post("/register", validateRegisterUser, authServices.registerUsersServices);

module.exports = router;
