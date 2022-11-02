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

/**
 * http://localhost:9000/api/v1/posts
 */
router
  .route("/")
  .get(postServices.getAllPostServices)
  .post(authPassportUser, validateCreatePost, postServices.createPostServices);

/**
 * http://localhost:9000/api/v1/posts/me
 */
router.get("/me", authPassportUser, postServices.getMyPostServices);

/** En id incluir el id del posts
 * http://localhost:9000/api/v1/posts/id
 */
router
  .route("/:id")
  .get(validateById, postServices.getPostByIdServices)
  .delete(validateById, authPassportUser, postServices.deletePostServices)
  .patch(validatePatchPost, authPassportUser, postServices.patchPostServices);

module.exports = router;
