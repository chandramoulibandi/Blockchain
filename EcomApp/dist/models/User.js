"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = require("bcryptjs");
const salt_Round = process.env.SALT_ROUND;
const AddressSchema = new mongoose_1.Schema({
    addressLine1: {
        type: String,
        required: false,
    },
    addressLine2: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    pin: {
        type: String,
        required: false,
    },
});
let Userschema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxlength: 12,
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
    },
    dob: {
        type: Date,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        trim: true,
        default: "User",
    },
    addressInfo: AddressSchema,
});
Userschema.pre("save", function (next) {
    const user = this;
    if (user.isModified("password")) {
        const saltRound = parseInt(salt_Round);
        (0, bcryptjs_1.genSalt)(saltRound, (err, salt) => {
            (0, bcryptjs_1.hash)(user.password, salt, (err, hash) => {
                if (err) {
                    throw err;
                }
                else {
                    user.password = hash;
                    next();
                }
            });
        });
    }
    else {
        next();
    }
});
exports.User = (0, mongoose_1.model)("User", Userschema);
