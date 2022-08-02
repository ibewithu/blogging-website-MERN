const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: "Category"}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
