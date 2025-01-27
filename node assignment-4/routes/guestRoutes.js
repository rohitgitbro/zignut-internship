const express = require('express');
const router = express.Router();
const { getHomePage, getBlogDetails, searchBlogs } = require('../controllers/blogControllers');

// Home page - latest blogs
router.get('/', getHomePage);

// Blog details page
router.get('/blogs/:slug', getBlogDetails);

// Search blogs by title
router.get('/search', searchBlogs);

module.exports = router;
