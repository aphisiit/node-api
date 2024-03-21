import express from "express";
import { healthy, actuator } from "../controllers/actuator.controller";
const router = express.Router();

router.get("/", actuator);
router.get("/health", healthy);

export default router;
