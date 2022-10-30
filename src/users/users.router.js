const router = require("express").Router();
const usersServices = require("./users.services");
const myUserServices = require("./myUser.services");
const adminValidate = require("../middlewares/handleRole.middleware");
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);
const {
  validateById,
  validatePatchUser,
  validatePatchMyUser,
} = require("../validator/validator");

const authPassportUser = passport.authenticate("jwt", { session: false });

router.get("/", usersServices.getAllUsersServices);

router
  .route("/me")
  .get(authPassportUser, myUserServices.getMyUser)
  .delete(authPassportUser, myUserServices.deleteMyUser)
  .patch(authPassportUser, validatePatchMyUser, myUserServices.patchMyUser);

router
  .route("/:id")
  .get(
    validateById,
    authPassportUser,
    adminValidate,
    usersServices.getUserByIdServices
  )
  .patch(
    validatePatchUser,
    authPassportUser,
    adminValidate,
    usersServices.patchUserServices
  )
  .delete(
    validateById,
    authPassportUser,
    adminValidate,
    usersServices.deleteUserServices
  );

module.exports = router;
