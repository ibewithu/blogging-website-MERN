const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//get a user
router.get("/:_id", async (req, res) => {
  try {
    const user = await User.findById(req.params._id, {
      posts: 0,
      })
    const { password, ...rest } = user.toObject()
    res.status(200).json(rest);
  } catch (err) {
    res.status(500).json(err);
  }
})

//update username
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {username: req.body.username},
        },
        { new: true }
      );
      const { password, ...rest } = updatedUser.toObject()
      res.status(200).json(rest);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only update your account!");
  }
})

//update password
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {password: hashedPassword},
        },
        { new: true }
      );
      const { password, ...rest } = updatedUser.toObject()
      res.status(200).json(rest);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only update your account!");
  }
})

module.exports = router;
