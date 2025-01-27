const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
});
const Admin = mongoose.model('Admin', AdminSchema);

async function seedAdmin() {
    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash('123', 10); // Hash "123"
    const admin = new Admin({ username: 'admin', password: hashedPassword });

    await admin.save();
    console.log('Admin user created:', admin);
    mongoose.disconnect();
}

seedAdmin();
