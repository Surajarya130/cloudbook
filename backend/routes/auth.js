const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Creating a user: POST at "/api/auth/". No auth required
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // if found errors return error as res status.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // const user = User(req.body);
    // user.save();

    // Check whether email the used exists or not
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log(user);
      return res.status(400).json({ error: "Sorry user is alreay existed" });
    }
    user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });
    res.json({ user: user });
  }
);

module.exports = router;
