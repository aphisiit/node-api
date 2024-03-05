import express from "express";
import { products, productsById } from "../controllers/product.controller";
const router = express.Router();

router.get("/", products);
router.get("/:id", productsById);

export default router;
