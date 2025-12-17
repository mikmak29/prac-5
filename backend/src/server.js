import dotenv from "dotenv";
import express from "express";
import route from "./routes/route.js";
import { globalErrorHandler } from "./middleware/globalErrorHandler.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 31000;

app.use(express.json());

app.use(route);

// ERROR HANDLER MIDDLEWARE
app.use(globalErrorHandler);

const serverStarter = () => {
	try {
		app.listen(port, () => {
			console.log(`Server listening at port ${port}`);
		});
	} catch (error) {
		throw new Error("Server Error.");
	}
};

serverStarter();
