import mongoose from "mongoose";

async function connectDB(){
    try {
        const DB = process.env.DB;
        await mongoose.connect(DB)
        console.log("Connected to database");
    } catch (error) {
        console.log(`db connection error: ${error}`);
    }
}

export {
    connectDB
}