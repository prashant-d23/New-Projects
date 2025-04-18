import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://prashantdeshpande2302:UlRIMQJNpQtmhTIm@cluster0.9pzrspd.mongodb.net/management_system");
}

export default connectDB;