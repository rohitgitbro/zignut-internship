const Blog = require('../models/Blog');  // Import the Blog model
const Category = require('../models/Category');  // Import the Category model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');


// Admin login handler
exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.cookie('token', token, { httpOnly: true, });
    res.redirect('/admin/dashboard');
  } catch (err) {
    console.error('Error during login:', err.message);
    res.render('admin/login', { error: 'Invalid username or password' });

  }
};





// Render Admin Dashboard
exports.getDashboard = async (req, res) => {
  try {
    const blogsCount = await Blog.countDocuments();  // Get total blog count
    const categoriesCount = await Category.countDocuments();  // Get total category count
    res.render('admin/dashboard', {
      title: 'Admin Dashboard',
      blogsCount,
      categoriesCount
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

// Render All Blogs for Admin
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('category');  // Fetch all blogs with category details
    res.render('admin/blogs', { title: 'All Blogs', blogs });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving blogs');
  }
};

// Render New Blog Form
exports.getCreateBlogForm = (req, res) => {
  Category.find().then(categories => {
    res.render('admin/createBlog', { title: 'Add New Blog', categories });
  }).catch(err => {
    console.error(err);
    res.status(500).send('Error loading categories');
  });
};

// Handle Blog Creation
exports.createBlog = async (req, res) => {
  const { title, category, description, publishDate } = req.body;
  const slug = title.toLowerCase().replace(/ /g, '-');  // Generate slug from title
  const blog = new Blog({
    title,
    slug,
    category,
    description,
    publishDate,
    thumbnailImage: req.file?.path,  // Assuming multer is used for file upload
    featuredImage: req.file?.path
  });

  try {
    await blog.save();
    res.redirect('/admin/blogs');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving blog');
  }
};

// Render All Categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.render('admin/categories', { title: 'All Categories', categories });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving categories');
  }
};

// Handle New Category Creation
exports.createCategory = async (req, res) => {
  const { name } = req.body;
  const category = new Category({ name });
  try {
    await category.save();
    res.redirect('/admin/categories');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving category');
  }
};
