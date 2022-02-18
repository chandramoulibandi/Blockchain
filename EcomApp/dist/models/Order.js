"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const ObjectId = mongoose_1.Schema.Types.ObjectId;
const ProductSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
const AddressSchema = new mongoose_1.Schema({
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    }
});
const CouriesSchema = new mongoose_1.Schema({
    courierName: {
        type: String
    },
    trackingNumber: {
        type: String
    }
});
let OrderSchema = new mongoose_1.Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    shippingAddress: AddressSchema,
    products: [ProductSchema],
    courierInfo: CouriesSchema,
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Placed'
    },
    createdOn: {
        type: Date,
        default: new Date()
    }
});
exports.Order = (0, mongoose_1.model)('Order', OrderSchema);
