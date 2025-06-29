require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/mental-wellness',
  JWT_SECRET: process.env.JWT_SECRET || 'your_super_secret_jwt_key_change_this_in_production',
  NODE_ENV: process.env.NODE_ENV || 'development'
}; 