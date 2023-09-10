import mongoose from "mongoose";

const URI = "mongodb://127.0.0.1:27017/products";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log("DB is connected", conn.connection.host);
  } catch (error) {
    console.log(error);
  }
};
