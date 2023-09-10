import { Router } from "express";
import { createProduct, getProducts, productById } from "../controllers/productsController.js"


const router = Router();

router.get("/", getProducts);
router.post("/create", createProduct)
router.get("/:id", productById)


export default router;
