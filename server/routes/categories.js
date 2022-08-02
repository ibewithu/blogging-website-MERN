const router = require("express").Router();
const Category = require("../models/Category");

//get all category
router.get("/", async (req, res) => {
    try {
      const cats = await Category.find({}, {name: 1})
      res.status(200).json(cats);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
