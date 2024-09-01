import mongoose from 'mongoose';

const connectDB = async () => {
  try {
   // await mongoose.connect("mongodb://127.0.0.1:27017/socouser");
    await mongoose.connect("mongodb://localhost:27017/socouser");
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectDB;
