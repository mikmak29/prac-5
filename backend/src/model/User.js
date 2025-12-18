import mongoose from "mongoose";

const userNoteSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required."],
		},
		gmail: {
			type: String,
			required: [true, "Age is required."],
		},
		note: {
			type: String,
			required: [true, "Note is required."],
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Users", userNoteSchema, "prac5_users");
