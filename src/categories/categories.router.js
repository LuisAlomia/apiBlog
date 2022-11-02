const router = require("express").Router();
const { validateCreateCategory } = require("../validator/validator.js");
const categoriesServides = require("./categories.services.js");
const passport = require("passport");
const { getPostByCategoryServices } = require("../posts/posts.services.js");
require("../middlewares/auth.middleware")(passport);

const authPassportUser = passport.authenticate("jwt", { session: false });

/**
 * http://localhost:9000/api/v1/categories
 */
router
  .route("/")
  .get(categoriesServides.getAllCategoryServices)
  .post(
    validateCreateCategory,
    authPassportUser,
    categoriesServides.createCategoryServices
  );

/** En id incluir el id de la categoria
 * http://localhost:9000/api/v1/categories/id
 */
router
  .route("/:id")
  .get(categoriesServides.getCategoryByIdServices)
  .delete(authPassportUser, categoriesServides.deleteCategoryServices)
  .patch(authPassportUser, categoriesServides.patchCategoryServices);

/** En id incluir el id de la categoria
 * http://localhost:9000/api/v1/categories/id/posts
 */
router.get("/:id/posts", getPostByCategoryServices);

module.exports = router;
