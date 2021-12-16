const router = require("express").Router();
const axios = require("axios");
const bcrypt = require("bcryptjs");
const Organisation = require("../models/Organisation.model");
const UserModel = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const hasOrganisation = require("../middleware/hasOrganisation");
const { populate } = require("../models/Organisation.model");

router.get("/user/:id", async (req, res) => {
  const { id: _id } = req.params;

  try {
    const user = await UserModel.findById({ _id });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      errorMessage: "Something went wrong! Go to sleep!",
      message: err,
    });
  }
});

router.get("/organisation/all", async (req, res) => {
  try {
    const organisation = await Organisation.find({});
    // const allOrga = JSON.parse(JSON.stringify(organisation));
    // const ids = allOrga.map((orga) => orga._id);
    // const paths = ids.map((id) => ({ params: { id: id.toString() } }));
    res.status(200).json(organisation);
  } catch (err) {
    res.status(500).json({
      errorMessage: "Something went wrong! Go to sleep!",
      message: err,
    });
  }
});

router.get("/organisation/:id", async (req, res) => {
  const { id: _id } = req.params;

  try {
    const organisation = await Organisation.findById({ _id }).populate(
      "projects"
    );

    res.status(200).json(organisation);
  } catch (err) {
    res.status(500).json({
      errorMessage: "Something went wrong! Go to sleep!",
      message: err,
    });
  }
});

router.post(
  "/create-organisation",
  isLoggedIn,
  hasOrganisation,
  async (req, res) => {
    const { _id } = req.session.keks;
    const { name, street, houseNr, zip, city, country, description, image } =
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
      const longitude = data.features[0].geometry.coordinates[0];
      const latitude = data.features[0].geometry.coordinates[1];
      if (!name) {
        let errorName = "Please enter a name for your organisation.";
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
      ).populate("organisation");
      user.password = "***";
      req.session.keks = user;
      res.status(200).json(user);
    } catch (err) {
      errorSomething = "Something went wrong! PLEASE MOVE BACK!";
      res.status(500).json(errorSomething);
    }
  }
);
router.patch("/edit-organisation", isLoggedIn, async (req, res) => {
  const { organisation: organisationId } = req.session.keks;
  let _id = null;
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

  let streetData = `street=${houseNr}+${street}&city=${city}&country=${country}&postalcode=${zip}`;
  try {
    const { data } = await axios.get(
      `https://nominatim.openstreetmap.org/search?${streetData}&format=geocodejson`
    );
    const longitude = data.features[0].geometry.coordinates[0];
    const latitude = data.features[0].geometry.coordinates[1];

    if (!name) {
      let errorName = "Please enter a name for your organisation.";
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
    if (organisationId._id) {
      _id = organisationId._id;
    } else {
      _id = organisationId;
    }
    let organisation = await Organisation.findByIdAndUpdate(
      { _id },
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
    errorSomething = "Something went wrong! PLEASE MOVE BACK!";
    res.status(500).json(errorSomething);
  }
});

router.delete("/organisation/delete", isLoggedIn, async (req, res) => {
  const { _id } = req.session.keks;
  // const { confirmPassword } = req.body;
  const errors = {};

  try {
    let user = await UserModel.findById(_id);
    // const checkPW = bcrypt.compareSync(confirmPassword, user.password);
    // if (!checkPW) {
    //   errors.password = "You have entered an incorrect password";
    //   res.status(400).json(errors);
    //   return;
    // }

    await Organisation.findByIdAndDelete({ _id: user.organisation });
    user = await UserModel.findByIdAndUpdate(
      _id,
      {
        $unset: { organisation: 1 },
      },
      { new: true }
    );
    user.password = "***";
    req.session.keks = user;
    res.status(204).json({});
  } catch (err) {
    errorSomething = "Something went wrong! PLEASE MOVE BACK!";
    res.status(500).json(errorSomething);
  }
});

module.exports = router;
