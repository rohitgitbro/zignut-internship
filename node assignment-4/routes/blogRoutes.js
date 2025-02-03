const express = require('express');
const router = express.Router();
const { getHomePage, searchBlogs } = require('../controllers/blogControllers');

// Home page - latest blogs
router.get('/', getHomePage);


// Search blogs by title
router.get('/search', searchBlogs);

module.exports = router;
