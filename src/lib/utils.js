import mongoose from "mongoose";

// const MONGO =
//   "mongodb+srv://testUser:testUser@cluster0.qskldwj.mongodb.net/nextJs14-practice?retryWrites=true&w=majority&appName=Cluster0";
const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    console.log("connection string", process.env.MONGO);
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
