import express from "express";
import * as User from "../controllers/userNote.js";
import { validateObjectId } from "../middleware/validateObjectId.js";

const route = express.Router();

route.route("/").get(User.fetchAllData).post(User.createData);
route.route("/:id").get(validateObjectId, User.findUser).put(validateObjectId, User.updateData).delete(validateObjectId, User.deleteData);

export default route;
