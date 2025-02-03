const Category = require('../models/Category'); 

exports.getAllCategory = async (req, res) => {
    try {
      
      const categories = await Category.find();
  
      res.render('admin/all-categories', {
        categories: categories, 
      });
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).send("An error occurred while fetching categories.");
    }
  }

exports.getCategory =  async (req, res) => {
    try {
      const { categories } = await Category.find();
      res.render('admin/add-category', { categories });
    } catch {
      console.log("error is ", error);
      res.status(500).send("An error occurred while fetching add categories");
    }
  }

exports.addCategory  = async (req, res) => {
    try {
      const { name } = req.body;
      const existingCategory = await Category.findOne({ name });
  
      if (existingCategory) {
        req.session.error = "Category already exists. Try a different category.";
  
        return res.render("admin/add-category", {
          categories: await Category.find(),
          error: "Category already exists. Try a different category."
        });
      }
  
      const newCategory = new Category({ name });
      await newCategory.save();
  
      req.session.success = "Category successfully added!";
  
      res.redirect("/admin/all-categories");
    } catch (error) {
      console.error("Error adding category:", error);
      req.session.error = "An error occurred while adding the category.";
  
      res.status(500).render("admin/add-category", {
        categories: await Category.find(),
        error: "An error occurred. Please try again."
      });
    }
  };

exports.getEditCategory = async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).send("category not found");
      }
      res.render("admin/edit-category", { category });
    } catch (error) {
      console.error("Error fetching category:", error);
      res.redirect("/admin/all-categories");
    }
  }

  exports.postEditCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await Category.findById(req.params.id);

        if (!category) {
        return res.status(404).send("category not found");
        }

        // Update category name
        category.name = name;
        await category.save();

        res.redirect("/admin/all-categories");
    } catch (error) {
        console.error("Error updating category:", error);
        res.redirect("/admin/all-categories");
    }
};

exports.deleteCategory = async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
    res.redirect("/admin/all-categories");
  };