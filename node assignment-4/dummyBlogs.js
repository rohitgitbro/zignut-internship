const mongoose = require('mongoose');
const Category = require('./models/Category');
const Blog = require('./models/Blog');
require('dotenv').config(); // Load environment variables

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Insert categories and blogs
async function dummyBlogs() {
  try {
    // Insert categories
    const categories = [
      { name: 'Technology' },
      { name: 'Design' },
      { name: 'JavaScript' },
      { name: 'Database' },
      { name: 'Security' },
    ];

    // Use `upsert` to insert categories without duplicates
    for (const category of categories) {
      await Category.updateOne(
        { name: category.name },
        { $set: category },
        { upsert: true }
      );
    }
    console.log('Categories inserted/updated');

    // Fetch all categories and map by name for easy access
    const categoryMap = await Category.find({}).then((docs) =>
      docs.reduce((acc, doc) => {
        acc[doc.name] = doc._id; // Map category name to its ObjectId
        return acc;
      }, {})
    );

    // Insert blogs with dynamic category IDs
    const blogs = [
      {
        title: 'The Future of Web Development',
        slug: 'future-of-web-development',
        category: categoryMap['Technology'], // Use mapped ObjectId
        description: 'Exploring new trends and tools in web development.',
        publishDate: '2025-02-01',
        thumbnailImage: '/images/web-dev',
        featuredImage: '/images/web-dev',
      },
      {
        title: 'Design Principles for Modern Websites',
        slug: 'design-principles-modern-websites',
        category: categoryMap['Design'], // Use mapped ObjectId
        description: 'A guide to creating user-friendly and visually appealing designs.',
        publishDate: '2025-02-02',
        thumbnailImage: '/images/defaultDesign.png',
        featuredImage: '/images/defaultDesign.png',
      },
      {
        title: 'Mastering JavaScript: Tips and Tricks',
        slug: 'mastering-javascript-tips-tricks',
        category: categoryMap['JavaScript'], // Use mapped ObjectId
        description: 'Advanced JavaScript techniques to optimize your code.',
        publishDate: '2025-02-03',
        thumbnailImage: '/images/defaultJS.png',
        featuredImage: '/images/defaultJS.png',
      },
      {
        title: 'Database Optimization Techniques',
        slug: 'database-optimization-techniques',
        category: categoryMap['Database'], // Use mapped ObjectId
        description: 'Improving database performance for scalable applications.',
        publishDate: '2025-02-04',
        thumbnailImage: '/images/defaultDB.png',
        featuredImage: '/images/defaultDB.png',
      },
      {
        title: 'Cybersecurity Best Practices for 2025',
        slug: 'cybersecurity-best-practices-2025',
        category: categoryMap['Security'], // Use mapped ObjectId
        description: 'How to protect your applications from evolving security threats.',
        publishDate: '2025-02-05',
        thumbnailImage: '/images/defaultSecurity.png',
        featuredImage: '/images/defaultSecurity.png',
      },
      {
        title: 'AI in Web Development: The Next Frontier',
        slug: 'ai-in-web-development',
        category: categoryMap['Technology'], // Use mapped ObjectId
        description: 'How AI is shaping the future of websites and applications.',
        publishDate: '2025-02-06',
        thumbnailImage: '/images/defaultAI.png',
        featuredImage: '/images/defaultAI.png',
      },
      {
        title: 'Responsive Design Techniques in 2025',
        slug: 'responsive-design-techniques-2025',
        category: categoryMap['Design'], // Use mapped ObjectId
        description: 'Best practices for ensuring your designs adapt to any screen size.',
        publishDate: '2025-02-07',
        thumbnailImage: '/images/defaultResponsive.png',
        featuredImage: '/images/defaultResponsive.png',
      },
      {
        title: 'JavaScript Frameworks to Watch in 2025',
        slug: 'javascript-frameworks-2025',
        category: categoryMap['JavaScript'], // Use mapped ObjectId
        description: 'A breakdown of the latest and most popular JavaScript frameworks.',
        publishDate: '2025-02-08',
        thumbnailImage: '/images/defaultFrameworks.png',
        featuredImage: '/images/defaultFrameworks.png',
      },
      {
        title: 'Scaling Databases for High-Traffic Applications',
        slug: 'scaling-databases-high-traffic',
        category: categoryMap['Database'], // Use mapped ObjectId
        description: 'Techniques to handle massive traffic with a reliable database setup.',
        publishDate: '2025-02-09',
        thumbnailImage: '/images/defaultScaling.png',
        featuredImage: '/images/defaultScaling.png',
      },
      {
        title: 'Understanding Zero Trust Security',
        slug: 'zero-trust-security',
        category: categoryMap['Security'], // Use mapped ObjectId
        description: 'Implementing a zero-trust architecture for modern applications.',
        publishDate: '2025-02-10',
        thumbnailImage: '/images/defaultZeroTrust.png',
        featuredImage: '/images/defaultZeroTrust.png',
      },
    ];

    // Use `insertMany` to insert blogs in bulk
    await Blog.insertMany(blogs);
    console.log('Blogs inserted');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    // Close the connection after all operations
    mongoose.connection.close();
  }
}

// Run the function
dummyBlogs();
