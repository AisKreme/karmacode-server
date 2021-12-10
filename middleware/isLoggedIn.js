const isLoggedIn = (req, res, next) => {
  if (req.session.keks) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized user" });
  }
};

module.exports = isLoggedIn;
