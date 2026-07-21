import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/ProductModel.js";
import products from "./data/products.js";

dotenv.config();

const importData = async () => {
    try {
        await connectDB();

        // Purane products remove karega
        await Product.deleteMany();

        // Dummy products MongoDB me insert karega
        await Product.insertMany(products);

        console.log(" Products Imported Successfully!");
        process.exit();
    } catch (error) {
        console.error(` Error: ${error.message}`);
        process.exit(1);
    }
};

importData();