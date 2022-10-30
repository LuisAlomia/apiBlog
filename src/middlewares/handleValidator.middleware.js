const { validationResult } = require("express-validator");

const validateResult = (req, resp, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    resp.status(403).json({ message: error.array() });
  }
};

module.exports = validateResult;
