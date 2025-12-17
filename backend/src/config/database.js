import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const DB_URL = process.env.MONGO_URL;

export const connectDB = async () => {
	try {
		await mongoose.connect(DB_URL);
		console.log(`Database sucessfully connected at ${mongoose.connection.db.databaseName}`);
	} catch (error) {
		throw new Error("Database failed to connect.");
	}
};
