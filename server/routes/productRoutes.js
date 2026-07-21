import express from "express";
import Product from "../models/ProductModel.js";

const router = express.Router();

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
    try {
        const products = await Product.find({});

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch products",
            error: error.message,
        });
    }
});

export default router;