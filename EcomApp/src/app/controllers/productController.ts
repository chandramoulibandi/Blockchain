import { Request, Response, NextFunction, Errback } from "express";
import { Product } from '../models/Product';


export class ProductController {

    static getProducts(req: Request, res: Response, next: NextFunction) {
        Product.find({}, (err: Errback, result: any) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err })
            } else {
                res.json({ status: 'success', message: 'Products found!', data: result })
            }
        })
    }

    static getProductById(req: Request, res: Response, next: NextFunction) {
        const productId = req.params.id;
        Product.findById(productId, (err: Errback, result: any) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err })
            } else {
                res.json({ status: 'success', message: 'Product found!', data: result })
            }
        })
    }

    static addProduct(req: Request, res: Response, next: NextFunction) {
        
        const product = new Product(req.body);
        Product.create(product, (err: Errback, result: any) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err })
            } else {
                res.json({ status: 'success', message: 'Product Added!', data: result })
            }
        })
    }



    static updateProduct(req: Request, res: Response, next: NextFunction) {

        Product.findByIdAndUpdate(req.body._id, {
            $set: {
                description: req.body.description,
                price: req.body.price,
                outOfStock: req.body.outOfStock
            }
        }, (err: Errback, result: any) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err })
            } else {
                res.json({ status: 'success', message: 'Product Updated!', data: result })
            }

        })
    }



}