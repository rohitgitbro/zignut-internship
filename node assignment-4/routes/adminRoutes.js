const express = require('express');
const authenticate = require('../middlewares/authMiddleware');
console.log('Authenticate Middleware:', authenticate); // Should not be undefined

const Blog = require('../models/Blog');
const Category = require('../models/Category');
const router = express.Router();

router.get("/all-blogs", authenticate, async (req, res) => {
  try {
    const blogs = await Blog.find().populate('category');  // Assuming category is referenced
    res.render('admin/all-blogs', {
      blogs: blogs,  // Passing the list of blogs to the view
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).send("An error occurred while fetching blogs.");
  }
});


router.get("/add-blog", authenticate, async (req, res) => {
  try {
    const categories = await Category.find();
    console.log(categories); // Log to verify if data is fetched correctly

    res.render("admin/add-blog", {
      categories: categories,
      formData: {}, 
      error: null,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).render("admin/add-blog", {
      categories: [], 
      formData: {},
      error: "An error occurred while fetching categories. Please try again later!",
    });
  }
});



router.post("/add-blog", authenticate, async (req, res) => {
  try {
    console.log(req.body);  // Log the request body to verify the data

    const { title, category, description, publishDate, thumbnailImage, featuredImage } = req.body;
    
    const newBlog = new Blog({
      title,
      category,
      description,
      publishDate,
      thumbnailImage,
      featuredImage
    });

    await newBlog.save();
    res.redirect("/admin/all-blogs");
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).render("admin/add-blog", {
      categories: await Category.find(),
      formData: req.body,
      error: "Error saving blog. Please try again."
    });
  }
});


// Admin Dashboard
router.get('/dashboard', authenticate, async (req, res) => {
  const blogs = await Blog.find().populate('category');
  res.render('admin/dashboard', { blogs });
});


router.get("/all-categories", authenticate, async (req, res) => {
  try {
    // Fetch categories from database
    const categories = await Category.find();
    
    // Render all-categories page with the categories data
    res.render('admin/all-categories', {
      categories: categories,  // Passing categories to the view
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("An error occurred while fetching categories.");
  }
});

// Blogs CRUD
router.get('/blogs', authenticate, async (req, res) => {
  const blogs = await Blog.find().populate('category');
  res.render('admin/blogs/index', { blogs });
});

router.get('/blogs/create', authenticate, async (req, res) => {
  const categories = await Category.find();
  res.render('admin/blogs/create', { categories });
});

router.post('/blogs', authenticate, async (req, res) => {
  await Blog.create(req.body);
  res.redirect('/admin/blogs');
});

router.get('/blogs/:id/edit', authenticate, async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  const categories = await Category.find();
  res.render('admin/blogs/edit', { blog, categories });
});

router.post('/blogs/:id', authenticate, async (req, res) => {
  await Blog.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/admin/blogs');
});

router.post('/blogs/:id/delete', authenticate, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect('/admin/blogs');
});

// Categories CRUD
router.get('/categories', authenticate, async (req, res) => {
  const categories = await Category.find();
  res.render('admin/categories/index', { categories });
});

router.get('/categories/create', authenticate, (req, res) => {
  res.render('admin/categories/create');
});

router.post('/categories', authenticate, async (req, res) => {
  await Category.create(req.body);
  res.redirect('/admin/categories');
});

router.get('/categories/:id/edit', authenticate, async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.render('admin/categories/edit', { category });
});

router.post('/categories/:id', authenticate, async (req, res) => {
  await Category.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/admin/categories');
});

router.post('/categories/:id/delete', authenticate, async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.redirect('/admin/categories');
});

module.exports = router;
