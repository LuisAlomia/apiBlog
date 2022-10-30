const adminValidate = (req, resp, next) => {
  const role = req.user.role;

  role === "admin"
    ? next()
    : resp.status(401).json({ message: "Access Denied" });
};

module.exports = adminValidate;
