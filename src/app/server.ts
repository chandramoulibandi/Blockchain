import * as express from "express";
import {
  userRoute,
  productRoute,
  orderRoute,
} from "./routes/index";
import * as bodyparser from 'body-parser';
import {mongoConnect} from './db/db';
import helmet  from 'helmet';
import * as compression from 'compression';
import * as dotenv from "dotenv";

var app = express();
app.use(helmet());
app.use(compression());
const port = 3000;


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT");
  next();
});


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/order", orderRoute);

app.listen(process.env.PORT || 3000, () => {
  mongoConnect.connection();
  console.log(`Example app listening on port ${port}`);
});
