import express from "express";
import * as User from "../controllers/userNote.js";

const route = express.Router();

route.route("/").get(User.fetchAllData).post(User.createData);
route.route("/:id").get(User.findUser);
route.route("/:id").put(User.updateData);
route.route("/:id").delete(User.deleteData);

export default route;
