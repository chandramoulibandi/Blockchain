"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("../models/User");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
let private_Key = "";
class UserController {
    static login(req, res, next) {
        // private_Key = process.env.PRIVATEKEY || '';
        User_1.User.findOne({ email: req.body.email }, (err, result) => {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                if (result != undefined) {
                    if ((0, bcryptjs_1.compareSync)(req.body.password, result.password)) {
                        const token = (0, jsonwebtoken_1.sign)({ id: result._id }, "TESTKEY", {
                            expiresIn: "1h",
                        });
                        res.json({
                            status: "Success",
                            message: "Login Succuss!",
                            data: token,
                        });
                    }
                    else {
                        res.json({
                            status: "failed",
                            message: "UserName and Password is incorrect!",
                        });
                    }
                }
                else {
                    res.json({
                        status: "failed",
                        message: "UserName and Password is incorrect!",
                    });
                }
            }
        });
    }
    static registration(req, res, next) {
        const user = new User_1.User(req.body);
        User_1.User.create(user, (err, result) => {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Registration Successful",
                    data: result,
                });
            }
        });
    }
    static updateProfile(req, res, next) {
        const userid = req.body.userid;
        User_1.User.findByIdAndUpdate(userid, {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                addressInfo: req.body.addressInfo,
            },
        }, (err, result) => {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "success",
                    message: "Profile updated successful",
                    data: null,
                });
            }
        });
    }
    static getProfile(req, res, next) {
        const userid = req.body.userid;
        User_1.User.findById(userid, (err, result) => {
            if (err) {
                res.status(500).json({ status: "failed", message: err });
            }
            else {
                res.json({
                    status: "Success",
                    message: "Profile Updated",
                    data: result,
                });
            }
        });
    }
}
exports.UserController = UserController;
