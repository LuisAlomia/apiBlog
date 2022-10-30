const postServices = require("./posts.services.js");
const router = require("express").Router();
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);
const {
  validateById,
  validateCreatePost,
  validatePatchPost,
} = require("../validator/validator");

const authPassportUser = passport.authenticate("jwt", { session: false });

router
  .route("/")
  .get(postServices.getAllPostServices)
  .post(authPassportUser, validateCreatePost, postServices.createPostServices);

//mejorar esta ruta
router.get("/me", authPassportUser, postServices.getMyPostServices);

router
  .route("/:id")
  .get(validateById, postServices.getPostByIdServices)
  .delete(validateById, authPassportUser, postServices.deletePostServices)
  .patch(validatePatchPost, authPassportUser, postServices.patchPostServices);

module.exports = router;
