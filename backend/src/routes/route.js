import express from "express";

const route = express.Router();

route.get("/", (req, res, next) => {
	try {
		res.status(200).send(name);
	} catch (error) {
		next(error);
	}
});

export default route;
