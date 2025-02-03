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

    req.session.admin = admin;

    res.redirect('/admin/dashboard');
  } catch (err) {
    console.error('Error during login:', err.message);
    res.render('admin/login', { error: 'Invalid username or password' });

  }
};










