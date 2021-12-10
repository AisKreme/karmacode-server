const hasOrganisation = (req, res, next) => {
  const { organisation } = req.session.keks;
  if (!organisation) {
    next();
  } else {
    res
      .status(401)
      .json({ message: "Only one organisation possible to create." });
  }
};

module.exports = hasOrganisation;
