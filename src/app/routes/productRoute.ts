import { ProductController } from "../controllers/productController";
import * as express from "express";

export const productRoute = express.Router();

productRoute.get('/', ProductController.getProducts);
productRoute.get('/:id', ProductController.getProductById);
productRoute.post("/", ProductController.addProduct);

productRoute.put("", ProductController.updateProduct);