const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//register user
router.post("/register", async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (user) {
    return res.status(400).json({ message: "Email already exists" })
  }
  console.log(user)
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    })
    await newUser.save();
    res.status(200).json({message: "User created successfully"})
  } catch (err) {
    res.status(500).json(err);
  }
});

//login user
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json("User does not exist!");
    }
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      res.status(400).json("Invalid password!");
    }
    const { password, posts, createdAt, updatedAt, ...rest } = user.toObject()
    res.status(200).json(rest);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
