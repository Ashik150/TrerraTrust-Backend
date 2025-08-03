import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    const con = await mongoose.connect(mongoURI);
    console.log(`MongoDB connected`);
  } catch (err) {
    console.log("Error: ", err.message);
    process.exit(1);
  }
};

export default connectDatabase;
