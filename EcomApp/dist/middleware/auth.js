"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function validateUser(req, res, next) {
    const token = req.headers["x-access-token"];
    //const privateKey = process.env.PRIVATE_KEY || "";
    const privateKey = "TESTKEY";
    (0, jsonwebtoken_1.verify)(token, privateKey, (err, decode) => {
        if (err) {
            res.status(401).json({
                status: "failed",
                message: "Your session is expired",
                data: null,
            });
        }
        else {
            req.body.userid = decode.id;
            next();
        }
    });
}
exports.validateUser = validateUser;
