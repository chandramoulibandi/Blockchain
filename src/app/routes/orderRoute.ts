import { OrderController } from "../controllers/orderController";
import * as express from "express";



export const orderRoute = express.Router();


orderRoute.get('/admin/dashboard', OrderController.getDashBoardInfo);
orderRoute.get('/admin', OrderController.getAllOrders);
orderRoute.get('/', OrderController.getUserOrders);
orderRoute.get('/:orderId', OrderController.getOrderDetails);
orderRoute.post('/', OrderController.placeOrder);
orderRoute.put('/', OrderController.updateOrderStatus);