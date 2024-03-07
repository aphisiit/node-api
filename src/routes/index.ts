import express from "express";
import product from "./product";
import actuator from "./actuator";

const router = express.Router();

router.use("/products", product);
router.use("/actuator", actuator);

export default router;
