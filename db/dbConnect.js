const mongoose = require('mongoose')
// Access your MongoDB connection string from secrets
require("dotenv").config({ path: './.env' });
const mongoURI = process.env.MONGODB;

const connectionOptions = {
  socketTimeoutMS: 45000, 
  connectTimeoutMS: 30000,  
};
mongoose
  .connect(mongoURI, connectionOptions)
  .then(() => {
    console.log('Connected to the MongoDB Successfully!')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });