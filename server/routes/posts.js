const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Category = require("../models/Category");

//get all posts or posts by id or posts by category
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const categoryId = req.query.categoryId;
  try {
    let posts;
    if (categoryId) {
      posts = await Post.find({ categories: { $in: [categoryId] } }).populate({
        path: "categories",
        model: "Category",
        select: "name",
      }).populate({
        path: "userId",
        model: "User",
        select: ["username", "email"],
      })
    } else if (userId) {
      posts = await Post.find({ userId }).populate({
        path: "categories",
        model: "Category",
        select: "name",
      }).populate({
        path: "userId",
        model: "User",
        select: ["username", "email"],
      })
    } else {
      posts = await Post.find().populate({
        path: "categories",
        model: "Category",
        select: "name",
      }).populate({
        path: "userId",
        model: "User",
        select: ["username", "email"],
      })
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a post by id
router.get("/:_id", async (req, res) => {
  try {
    const post = await Post.findById(req.params._id).populate({
      path: "categories",
      model: "Category",
      select: "name",
    }).populate({
      path: "userId",
      model: "User",
      select: ["username", "email"],
    })
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create post
router.post("/", async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    userId: req.body.userId,
  });
  const exists = await Post.findOne({ title: req.body.title })
  if (exists) {
    res.status(400).json({message: "Post already exists!"});
  } else {
    try {
      const savedPost = await newPost.save()
      await User.findByIdAndUpdate(req.body.userId, { $push: { posts: savedPost._id } })
      let arr = []
      req.body.categories.map(async x => {
        try {
          const isThere = await Category.findOne({ name: x });
          if (!isThere) {
            const newCat = new Category({ name: x, posts: [savedPost._id] })
            const savedCat = await newCat.save()
            arr.push(savedCat._id)
          }
          else {
            const updatedCategory = await Category.findByIdAndUpdate(isThere._id, { $push: { posts: savedPost._id } })
            arr.push(updatedCategory._id)
          }
        } catch (err) {
          res.status(500).json('here', err);
        }
      })
      setTimeout(async () => {
        const updatedPost = await Post.findByIdAndUpdate(savedPost._id, { $set: { categories: arr } }, { new: true })
        res.status(200).json(updatedPost)
      }, 2000);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

//update post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      try {
        post.categories.map(async x => {
          const category = await Category.find({ name: x });
          await Category.findByIdAndUpdate(category._id, { $pull: { posts: post._id } })
        })
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
