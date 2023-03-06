import express from "express";
import {
  getAllLearner,
  getSingleLearner,
  AddLearner,
  UpdateLearner,
  DeleteLearner,
} from "../Controllers/LearnerController.js";

const router = express.Router();

router.route('/').get(getAllLearner).post(AddLearner);
router.route('/:id').get(getSingleLearner).put(UpdateLearner).delete(DeleteLearner);

export default router