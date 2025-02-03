const mongoose = require('mongoose');

// Define the Category schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,  
    trim: true     
  },
  createdAt: {
    type: Date,
    default: Date.now  
  }
});

// Export the model
module.exports = mongoose.model('Category', categorySchema);
