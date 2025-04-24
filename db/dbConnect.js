const mongoose = require('mongoose')
// Access your MongoDB connection string from secrets
require("dotenv").config();
const mongoURI = process.env.MONGODB;

// const connectionOptions = {
//   socketTimeoutMS: 45000, 
//   connectTimeoutMS: 10000,  
// };
mongoose
  .connect(mongoURI, {  
    useNewUrlParser: true,
    useUnifiedTopology: true,})
  .then(() => {
    console.log('Connected to the MongoDB Successfully!')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });