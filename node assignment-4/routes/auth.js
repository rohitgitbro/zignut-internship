const express = require('express');

const router = express.Router();
const { loginAdmin } = require('../controllers/adminController.js');

router.get('/login', (req, res) => {
  res.render('admin/login');
});

router.post('/login',loginAdmin);

router.get('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.redirect('/admin/login');
});

module.exports = router;
