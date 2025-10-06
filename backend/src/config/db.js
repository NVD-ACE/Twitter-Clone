import mongoose from "mongoose";
import { ENV } from "./env.js";

if (!ENV.DB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env",
  );
}
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(ENV.DB_URI);
    console.log(`Connected to database in ${ENV.NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting to database: ", error);
    process.exit(1);
  }
};
export default connectToDatabase;
