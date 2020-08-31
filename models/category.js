const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    slug: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true,
    }
  });

module.exports = mongoose.model("category", categorySchema);