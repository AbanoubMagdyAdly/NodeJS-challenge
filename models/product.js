const mongoose = require('mongoose');
const category = require('./category');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    category: {
      type: ObjectId,
      ref: category
    },
    title: {
      type: String,
      required: true,
    },
    product_code: {
      type: String,
      required: true,
      unique: true
    },
    attributes: {
      type: mongoose.Schema.Types.Mixed
    },
  });

module.exports = mongoose.model("product", productSchema);
