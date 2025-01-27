const express = require('express');
const mongoose = require('mongoose');
const guestRoutes = require('./routes/guestRoutes');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();
require('dotenv').config();
const adminRoutes = require('./routes/adminRoutes')
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');

(async () => {
  const fetch = (await import('node-fetch')).default;

  // You can now use fetch
})();



// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));
// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Routes
app.use('/', guestRoutes);
app.use('/auth', authRoutes); // Mount the route
app.use('/admin', adminRoutes); // Prefix `/admin` to all admin routes


// Start Server

const PORT = process.env.PORT || 3000; // Make sure this matches what you are accessing in the browser
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
