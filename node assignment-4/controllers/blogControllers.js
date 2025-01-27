const Blog = require('../models/Blog');

// Get home page (latest blogs)
exports.getHomePage = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ publishDate: -1 }).limit(10); // Fetch latest blogs
    const query = req.query.q || ''; // Default to an empty string if no query is provided
    res.render('guest/home', { blogs, query }); // Pass `query` to the EJS template
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching blogs');
  }
};

// Get blog details
exports.getBlogDetails = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug }).populate('category');
    if (!blog) {
      return res.status(404).send('Blog not found');
    }
    res.render('guest/blog_details', { blog });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching blog details');
  }
};

// Search blogs by title
exports.searchBlogs = async (req, res) => {
  try {
    const query = req.query.q || '';
    const blogs = await Blog.find({ title: new RegExp(query, 'i') }); // Case-insensitive search
    res.render('guest/home', { blogs, query });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error searching blogs');
  }
};
