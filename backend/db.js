const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://dollymamgai12:dollymamgai123@cluster0.wfzr4m7.mongodb.net/gofood?retryWrites=true&w=majority';

// Define global variables to store the data
global.food_item = [];
global.food_category = [];

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const foodItemCollection = mongoose.connection.db.collection('food_item');
    const foodCategoryCollection = mongoose.connection.db.collection('food_category');

    console.log('Before fetching data');

    // Fetch and store the data in global variables
    global.food_item = await foodItemCollection.find({}).toArray();
    global.food_category = await foodCategoryCollection.find({}).toArray();

    console.log('Data fetched successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

module.exports = connectToMongoDB;
