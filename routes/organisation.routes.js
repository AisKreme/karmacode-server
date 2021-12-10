const router = require("express").Router();
const axios = require("axios");
const bcrypt = require("bcryptjs");
const Organisation = require("../models/Organisation.model");
const UserModel = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/create-organisation", isLoggedIn, async (req, res) => {
  const { _id } = req.session.keks;

  const { name, street, houseNr, zip, city, country, description, image } =
    req.body;

  let contact = {
    user: _id,
    links: [],
  };

  let streetData = `street=${houseNr}+${street},&city=${city},&country=${country},&postalcode=${zip}`;
  try {
    const { data } = await axios.get(
      `https://nominatim.openstreetmap.org/search?${streetData}&format=geocodejson`
    );
    const longitude = data.features[0].geometry.coordinates[0];
    const latitude = data.features[0].geometry.coordinates[1];

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
      res
        .status(500)
        .json({ error: "Please make sure to enter a valid address." });
    }

    const organisation = await Organisation.create({
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

    const user = await UserModel.findByIdAndUpdate(
      _id,
      {
        organisation: organisation._id,
      },
      { new: true }
    );
    user.password = "***";
    req.session.keks = user;
    res.status(200).json(organisation);
  } catch (err) {
    res.status(500).json({
      errorMessage: "Something went wrong! Go to sleep!",
      message: err,
    });
  }
});

router.patch("/edit-organisation", isLoggedIn, async (req, res) => {
  const { organisation: organisationId } = req.session.keks;

  const {
    name,
    street,
    houseNr,
    zip,
    city,
    country,
    description,
    image,
    contact,
  } = req.body;

  let streetData = `street=${houseNr}+${street},&city=${city},&country=${country},&postalcode=${zip}`;
  try {
    const { data } = await axios.get(
      `https://nominatim.openstreetmap.org/search?${streetData}&format=geocodejson`
    );
    const longitude = data.features[0].geometry.coordinates[0];
    const latitude = data.features[0].geometry.coordinates[1];

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
      res
        .status(500)
        .json({ error: "Please make sure to enter a valid address." });
    }

    let organisation = await Organisation.findByIdAndUpdate(
      { _id: organisationId },
      {
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
      },
      { new: true }
    );
    res.status(200).json(organisation);
  } catch (err) {
    res.status(500).json({
      errorMessage: "Something went wrong! Go to sleep!",
      message: err,
    });
  }
});

router.delete("/organisation/delete", isLoggedIn, async (req, res) => {
  const { _id } = req.session.keks;
  const { confirmPassword } = req.body;
  const errors = {};

  try {
    const user = await UserModel.findById(_id);
    const checkPW = bcrypt.compareSync(confirmPassword, user.password);
    if (!checkPW) {
      errors.password = "You have entered an incorrect password";
      res.status(400).json(errors);
      return;
    }
    await UserModel.findByIdAndUpdate(
      _id,
      {
        $unset: { organisation: 1 },
      },
      { new: true }
    );
    await Organisation.findByIdAndDelete({ _id: user.organisation });
    res.status(204).json({ message: "Organisation deleted" });
  } catch (err) {
    res.status(500).json({
      errorMessage: "Something went wrong! Go to sleep!",
      message: err,
    });
  }
});

module.exports = router;
