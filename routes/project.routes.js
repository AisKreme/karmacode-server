const router = require("express").Router();
const axios = require("axios");
const bcrypt = require("bcryptjs");
const Organisation = require("../models/Organisation.model");
const UserModel = require("../models/User.model");
const Project = require("../models/Project.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const canCreateProject = require("../middleware/canCreateProject");
const { populate } = require("../models/Organisation.model");

router.post(
  "/create-project",
  isLoggedIn,
  canCreateProject,
  async (req, res) => {
    const { _id } = req.session.keks;
    let { name, street, houseNr, zip, city, country, description, image } =
      req.body;

    let contact = {
      user: _id,
      links: [],
    };

    let streetData = `street=${houseNr}+${street}&city=${city}&country=${country}&postalcode=${zip}`;
    try {
      const { data } = await axios.get(
        `https://nominatim.openstreetmap.org/search?${streetData}&format=geocodejson`
      );
      const imgData = await axios.get("https://picsum.photos/200");
      const longitude = data.features[0].geometry.coordinates[0];
      const latitude = data.features[0].geometry.coordinates[1];
      let image = imgData.data;
      if (!name) {
        res
          .status(500)
          .json({ error: "Please enter a name for your organisation." });
      }
      if (
        !street ||
        !houseNr ||
        !zip ||
        !city ||
        !country ||
        !longitude ||
        !latitude
      ) {
        return res
          .status(500)
          .json({ error: "Please make sure to enter a valid address." });
      }

      const Project = await Project.create({
        name,
        street,
        houseNr,
        zip,
        city,
        country,
        latitude,
        longitude,
        description,
        image,
        contact,
      });
      const organisation = await Organisation.findByIdAndUpdate(_id, {
        $addToSet: { projects: project._id },
      });
      res.status(200).json(organisation);
    } catch (err) {
      res.status(500).json({
        errorMessage: "Something went wrong! Go to sleep2!",
        message: err,
      });
    }
  }
);

module.exports = router;
