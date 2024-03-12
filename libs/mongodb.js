import mongoose from 'mongoose';

const testMongoDBConnection = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Test connection to MongoDB successful');
    mongoose.connection.close(); // Close the test connection
    return true;
  } catch (error) {
    console.error('Error testing MongoDB connection:', error.message);
    return false;
  }
};

const connectMongoDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error('MongoDB connection URI is missing in the environment variables.');
    }

    // Test MongoDB connection before establishing the actual connection
    const testSuccessful = await testMongoDBConnection(MONGODB_URI);

    if (!testSuccessful) {
      console.error('Test connection to MongoDB failed. Aborting actual connection.');
      return;
    }

    // Establish the actual MongoDB connection
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default connectMongoDB;
