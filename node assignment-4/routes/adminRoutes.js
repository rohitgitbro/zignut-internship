const express = require('express');
const authenticate = require('../middlewares/authMiddleware');
console.log('Authenticate Middleware:', authenticate); // Should not be undefined

const Blog = require('../models/Blog');
const router = express.Router();
const {getBlogDetails, addBlog,getBlog, getEditBlog, postEditBlog, deleteBlog} = require('../controllers/blogControllers')
const {getAllCategory,getCategory,addCategory,getEditCategory, deleteCategory, postEditCategory} = require('../controllers/categoryControler')

router.get("/all-blogs", authenticate, getBlogDetails);


router.get("/add-blog", authenticate,getBlog );


// router.post("/add-blog", authenticate, async (req, res) => {
//   try {
//     console.log(req.body);  // Log the request body to verify the data

//     const { title, category, description, publishDate, thumbnailImage, featuredImage } = req.body;

//     const newBlog = new Blog({
//       title,
//       category,
//       description,
//       publishDate,
//       thumbnailImage,
//       featuredImage
//     });

//     await newBlog.save();
//     res.redirect("/admin/all-blogs");
//   } catch (error) {
//     console.error("Error adding blog:", error);
//     res.status(500).render("admin/add-blog", {
//       categories: await Category.find(),
//       formData: req.body,
//       error: "Error saving blog. Please try again."
//     });
//   }
// });


// Admin Dashboard

 // Set the destination for uploaded files

// If you're uploading only one image at a time, use the .single method.
router.post('/add-blog',authenticate,addBlog );



router.get('/dashboard', authenticate, async (req, res) => {
  const blogs = await Blog.find().populate('category');
  res.render('admin/dashboard', { blogs });
});



router.get("/all-categories", authenticate, getAllCategory);

router.get("/add-category", authenticate,getCategory)

router.post("/add-category", authenticate, addCategory);



// Blogs CRUD

router.get('/edit-blog/:id',authenticate,getEditBlog);

router.post('/edit-blog/:id',authenticate, postEditBlog);

router.post('/delete-blog/:id',authenticate, deleteBlog);

// Categories CRUD
router.get('/edit-category/:id', authenticate, getEditCategory);

router.post('/edit-category/:id', authenticate,postEditCategory);

router.post('/delete-category/:id', authenticate, deleteCategory);

router.get('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.redirect('/auth/login');
});


module.exports = router;
