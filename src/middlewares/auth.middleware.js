const jwtStrategy = require("passport-jwt").Strategy;
const jwtExtract = require("passport-jwt").ExtractJwt;
const { jwtSecret } = require("../config/env.config");
const { getUserById } = require("../users/users.controllers");

module.exports = (passport) => {
  const options = {
    jwtFromRequest: jwtExtract.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: jwtSecret,
  };

  passport.use(
    new jwtStrategy(options, async (decoded, done) => {
      try {
        const authUser = await getUserById(decoded.id);
        return !authUser ? done(null, false) : done(null, decoded);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
