const router = require("express").Router();
const axios = require("axios");
const bcrypt = require("bcryptjs");
const Organisation = require("../models/Organisation.model");
const UserModel = require("../models/User.model");
const Project = require("../models/Project.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const canCreateProject = require("../middleware/canCreateProject");
const { populate } = require("../models/Organisation.model");

router.get("/project/all", async (req, res) => {
  try {
    const project = await Project.find({});
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({
      errorMessage: "Something went wrong! Go to sleep!",
      message: err,
    });
  }
});

router.get("/project/:id", async (req, res) => {
  const { id: _id } = req.params;

  try {
    const project = await Project.findById({ _id });

    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({
      errorMessage: "Something went wrong! Go to sleep!",
      message: err,
    });
  }
});

router.post(
  "/create-project",
  isLoggedIn,
  canCreateProject,
  async (req, res) => {
    const { organisation } = req.session.keks;

    let { name, street, houseNr, zip, city, country, description, image } =
      req.body;
    let streetData = `street=${houseNr}+${street}&city=${city}&country=${country}&postalcode=${zip}`;
    try {
      const { data } = await axios.get(
        `https://nominatim.openstreetmap.org/search?${streetData}&format=geocodejson`
      );
      const imgData = await axios.get("https://picsum.photos/id/0/info");
      const longitude = data.features[0].geometry.coordinates[0];
      const latitude = data.features[0].geometry.coordinates[1];
      let image = imgData.data;
      if (!name) {
        let errorName = "Please enter a name for your project.";
        res.status(500).json(errorName);
        return;
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
        let errorAddress = "Please make sure to enter a valid address.";
        res.status(500).json(errorAddress);
        return;
      }

      const project = await Project.create({
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
      });
      let orgaUpdated = await Organisation.findByIdAndUpdate(
        { _id: organisation },
        {
          $push: { projects: project._id },
        },
        { new: true }
      );
      res.status(200).json(orgaUpdated);
    } catch (err) {
      errorSomething = "Something went wrong! PLEASE MOVE BACK!";
      res.status(500).json(errorSomething);
    }
  }
);

module.exports = router;
