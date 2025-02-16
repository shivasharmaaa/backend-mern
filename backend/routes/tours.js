import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTours,
  getOneTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../Controller/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create tour
router.post("/", verifyAdmin, createTour);

//update tour
router.put("/:id", verifyAdmin, updateTour);

//delete tour
router.delete("/:id", verifyAdmin, deleteTour);

//getOne tour
router.get("/:id", getOneTour);

//getAll tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

//getting featured tour by search
router.get("/search/getFeaturedTours", getFeaturedTours);

//get Tour count
router.get("/search/getTourCount", getTourCount);
export default router;
