const hasOrganisation = (req, res, next) => {
  const { organisation } = req.session.keks;
  if (organisation) {
    next();
  } else {
    res.status(401).json({ message: "You need an organisation." });
  }
};

module.exports = hasOrganisation;
