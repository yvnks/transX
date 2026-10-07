import mongoose from "mongoose";

// Use connect method to connect to the server
const connectDatabase = async () => {
  const connect = await mongoose.connect(process.env.MONGODB_URI);
  console.log(`connected to db: ${connect.connection.host}`);
};

export default connectDatabase;
