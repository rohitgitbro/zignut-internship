const Blog = require('../models/Blog');
const Category = require('../models/Category');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
// Get home page (latest blogs)
exports.getHomePage = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ publishDate: -1 }).limit(10); 
    const query = req.query.q || '';
    res.render('guest/home', { blogs, query }); 
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching blogs');
  }
};

// Get blog details
exports.getBlogDetails = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('category');  
    res.render('admin/all-blogs', {
      blogs: blogs, 
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).send("An error occurred while fetching blogs.");
  }
};

exports.getBlog = async (req, res) => {
  try {
    const categories = await Category.find();
    console.log(categories); 

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
};

exports.addBlog = async (req, res) => {
  try {
    console.log(req.files);  
    console.log(req.body);    

    const { title, category, description, publishDate,thumbnailImage ,featuredImage} = req.body;
    
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
    
  }
}

exports.getEditBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send("Blog not found");
    }

    const categories = await Category.find(); 

    res.render('admin/edit-blog', { blog, categories, error: null }); 
  } catch (error) {
    console.error("Error fetching blog for edit:", error);
    res.status(500).send("Error loading edit page");
  }
};


exports.postEditBlog = upload.fields([
  { name: 'thumbnailImage', maxCount: 1 },
  { name: 'featuredImage', maxCount: 1 }
]), async (req, res) => {
  try {
      const { title, category, description, publishDate } = req.body;
      const blog = await Blog.findById(req.params.id);

      if (!blog) {
          return res.status(404).send("Blog not found");
      }

      // Update fields
      blog.title = title;
      blog.category = category;
      blog.description = description;
      blog.publishDate = publishDate;

      // Handle file uploads
      if (req.files['thumbnailImage']) {
          blog.thumbnailImage = req.files['thumbnailImage'][0].path;
      }
      if (req.files['featuredImage']) {
          blog.featuredImage = req.files['featuredImage'][0].path;
      }

      await blog.save();
      res.redirect("/admin/all-blogs");
  } catch (error) {
      console.error("Error updating blog:", error);
      res.status(500).send("Error updating blog");
  }
};

exports.deleteBlog = async (req, res) => {
  try {
      await Blog.findByIdAndDelete(req.params.id);
      res.redirect('/admin/all-blogs');
  } catch (error) {
      console.error("Error deleting blog:", error);
      res.status(500).send("Error deleting blog");
  }
}
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
