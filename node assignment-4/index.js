const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();
require('dotenv').config();
const adminRoutes = require('./routes/adminRoutes')
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const session = require("express-session");
const multer = require('multer');
const bodyParser = require('body-parser');

(async () => {
  const fetch = (await import('node-fetch')).default;
})();




// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(expressLayouts);
app.set('layout', 'layout');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true })); // For form data
app.use(bodyParser.json()); // For JSON data
app.use(multer().none()); // If you are handling files

app.use(session({
  secret: "process.env.JWT_SECRET",
  resave: false,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  res.locals.admin = req.session.admin || null; // Making Admin available in all EJS views
  next();
});


// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Routes
app.use('/', blogRoutes);
app.use('/auth', authRoutes); // Mount the route
app.use('/admin', adminRoutes); // Prefix `/admin` to all admin routes


// Start Server

const PORT = process.env.PORT || 3000; // Make sure this matches what you are accessing in the browser
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
