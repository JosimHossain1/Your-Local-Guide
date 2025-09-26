import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log('Database connect successfylly');
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
