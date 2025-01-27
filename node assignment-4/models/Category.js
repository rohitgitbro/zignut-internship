const mongoose = require('mongoose');

// Define the Category schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,  // Category names should be unique
    trim: true     // Removes whitespace from both ends of the name
  },
  createdAt: {
    type: Date,
    default: Date.now  // Automatically sets the current date on creation
  }
});

// Export the model
module.exports = mongoose.model('Category', categorySchema);
