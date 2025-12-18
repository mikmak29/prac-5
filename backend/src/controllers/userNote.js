import User from "../model/User.js";
import asyncMiddleware from "express-async-handler";

export const fetchAllData = asyncMiddleware(async (req, res) => {
	const data = await User.find();
	res.status(201).send(data);
});

export const findUser = asyncMiddleware(async (req, res) => {
	const isUserExist = await User.findById(req.params.id);

	if (isUserExist) {
		res.status(400);
		throw new Error("User not exist.");
	}
	const findData = await User.findById(req.params.id);

	res.status(201).send(findData);
});

export const createData = asyncMiddleware(async (req, res) => {
	const { name, gmail, note } = req.body;

	if (!name || !gmail || !note) {
		res.status(404);
		throw new Error("Form is mandatory to fillup.");
	}

	const isGmailExist = await User.findOne({ gmail });
	if (isGmailExist) {
		res.status(400);
		throw new Error("Gmail already exist.");
	}

	const createData = await User.create({
		name,
		gmail,
		note,
	});

	res.status(201).send(`Created User successfully:  ${createData.name}`);
});

export const updateData = asyncMiddleware(async (req, res) => {
	const isUserExist = await User.findById(req.params.id);

	if (!isUserExist) {
		res.status(400);
		throw new Error("User not exist.");
	}

	const updateData = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

	res.status(201).send(`Update User successfully: ${updateData}`);
});

export const deleteData = asyncMiddleware(async (req, res) => {
	const isUserExist = await User.findById(req.params.id);

	if (!isUserExist) {
		res.status(400);
		throw new Error("User not exist.");
	}

	const deleteData = await User.findByIdAndDelete(req.params.id);

	res.status(201).send(`Deleted User successfully: ${deleteData}`);
});
