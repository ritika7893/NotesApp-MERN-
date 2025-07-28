import mongoose from "mongoose";
const connectDB = async () => {
try {
    const uri = process.env.MONGO_URI;
    console.log(uri); // For debugging, remove later
    await mongoose.connect(uri);
} catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process with failure
}
}
export default connectDB;
//nR7wxsXYu2LEr.v