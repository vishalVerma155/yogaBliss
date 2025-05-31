// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    minlength: 6
  },
  address: {
    type: String,
    trim: true
  },
  profilePhoto: {
    type: String, // store Cloudinary or local file URL
    default: null
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
