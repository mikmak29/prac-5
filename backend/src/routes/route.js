import express from "express";
import * as User from "../controllers/userNote.js";

const route = express.Router();

route.route("/").get(User.fetchAllData).post(User.createData);
route.route("/:id").get(User.findUser).put(User.updateData).delete(User.deleteData);

export default route;
