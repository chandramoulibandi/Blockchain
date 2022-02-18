"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./routes/index");
const bodyparser = require("body-parser");
const db_1 = require("./db/db");
var app = express();
const port = 3000;
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/user", index_1.userRoute);
app.use("/product", index_1.productRoute);
app.use("/order", index_1.orderRoute);
app.listen(port, () => {
    db_1.mongoConnect.connection();
    console.log(`Example app listening on port ${port}`);
});
