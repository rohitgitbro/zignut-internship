const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  description: { type: String },
  publishDate: { type: Date, default: Date.now },
  thumbnailImage: { type: String },
  featuredImage: { type: String }
});

module.exports = mongoose.model('Blog', blogSchema);
