const router = require("express").Router();
const { validateCreateCategory } = require("../validator/validator.js");
const categoriesServides = require("./categories.services.js");
const passport = require("passport");
const { getPostByCategoryServices } = require("../posts/posts.services.js");
require("../middlewares/auth.middleware")(passport);

const authPassportUser = passport.authenticate("jwt", { session: false });

router
  .route("/")
  .get(categoriesServides.getAllCategoryServices)
  .post(
    validateCreateCategory,
    authPassportUser,
    categoriesServides.createCategoryServices
  );

router
  .route("/:id")
  .get(categoriesServides.getCategoryByIdServices)
  .delete(authPassportUser, categoriesServides.deleteCategoryServices)
  .patch(authPassportUser, categoriesServides.patchCategoryServices);

router.get("/:id/posts", getPostByCategoryServices);

module.exports = router;
