const express = require("express");
const router = express.Router();
const UserModel = require("../models/User.model");

//we installed bcrypt.js
const bcrypt = require("bcryptjs");
const {
  validateRegisterInput,
  validateLoginInput,
} = require("../utilities/validators");

router.post("/signup", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  console.log(username, email, password, confirmPassword);
  const { notValid, errors } = validateRegisterInput(
    username,
    email,
    password,
    confirmPassword
  );

  if (notValid) {
    res.status(500).json(errors);
    return;
  }

  const image = `https://avatars.dicebear.com/api/croodles-neutral/${username}.svg`;

  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);

  try {
    const user = await UserModel.create({
      username,
      email,
      password: hash,
      image,
    });
    errors.username = "User not found";
    req.session.keks = user;
    res.status(200).json(user);
  } catch (err) {
    let error = {};

    if (err.code === 11000) {
      // Error Pointing
      if (Object.keys(err.keyValue)[0] === "username") {
        error[
          Object.keys(err.keyValue)[0]
        ] = `Username ${err.keyValue.username} already exists!`;
        error.message = err;
      } else {
        error[
          Object.keys(err.keyValue)[0]
        ] = `E-Mail ${err.keyValue.email} already exists!`;
        error.message = err;
      }

      res.status(500).json(error);
    } else {
      res.status(500).json({
        errorMessage: "Something went wrong! Go to sleep!",
        message: err,
      });
    }
  }
});

// will handle all POST requests to http:localhost:5005/api/signin
router.post("/login", async (req, res, next) => {
  const { userInput, password } = req.body;

  const { notValid, errors } = validateLoginInput(userInput, password);

  if (notValid) {
    res.status(500).json(errors);
    return;
  }

  try {
    const user = await UserModel.findOne({
      $or: [{ username: userInput }, { email: userInput }],
    });

    if (!user) {
      user.password = "***";
      res.status(500).json(errors);
      return;
    }

    const checkPW = bcrypt.compareSync(password, user.password);

    if (checkPW) {
      user.password = "***";
      req.session.keks = user;
      res.status(200).json(user);
    } else {
      errors.password = "You entered a wrong Password";
      res.status(500).json(errors);
      return;
    }
  } catch (err) {
    res.status(500).json({
      errorMessage: "Something went wrong! Go to sleep!",
      message: err,
    });
  }
});

// will handle all POST requests to http:localhost:5005/api/logout
router.post("/logout", (req, res) => {
  req.session.destroy();
  res.status(204).json({});
});

// middleware to check if user is loggedIn
const isLoggedIn = (req, res, next) => {
  if (req.session.loggedInUser) {
    //calls whatever is to be executed after the isLoggedIn function is over
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized user",
      code: 401,
    });
  }
};

// THIS IS A PROTECTED ROUTE
// will handle all get requests to http:localhost:5005/api/user
router.get("/user", isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});

module.exports = router;
