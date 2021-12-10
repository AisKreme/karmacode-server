const hasOrganisation = (req, res, next) => {
  const { organisation } = req.session.keks;
  console.log(organisation);
  if (!organisation) {
    next();
  } else {
    res
      .status(401)
      .json({ message: "Only one organisation possible to create." });
  }
};

module.exports = hasOrganisation;
