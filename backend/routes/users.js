import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getOneUser,
  updateUser,
} from "../Controller/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// //create User
// router.post("/", createUser);

//update User
router.put("/:id", verifyUser, updateUser);

//delete User
router.delete("/:id", verifyUser, deleteUser);

//getOne User
router.get("/:id", verifyUser, getOneUser);

//getAll User
router.get("/", verifyAdmin, getAllUser);

export default router;
