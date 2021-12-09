const router = require("express").Router();
const axios = require("axios");
const Organisation = require("../models/User.model");
const UserModel = require("../models/User.model");

router.post("/create-organisation", async (req, res) => {
  const { _id } = req.session.keks;

  const { name, street, houseNr, zip, city, country, description, image } =
    req.body;

  let streetData = `${houseNr}+${street}+${city}+${country}+${zip}`;
  let contact = {
    user: _id,
    links: [],
  };

  try {
    const { data } = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${streetData}&format=geocodejson`
    );
    const longitude = data.features[0].geometry.coordinates[0];
    const latitude = data.features[0].geometry.coordinates[1];

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
  } catch (err) {
    res.status(500).json({
      errorMessage: "Something went wrong! Go to sleep!",
      message: err,
    });
  }
});

module.exports = router;
